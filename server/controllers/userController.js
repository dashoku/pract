const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const uuid = require ('uuid');
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}



class UserController {

    // Метод регистрации с проверкой email
    async registration(req, res, next) {
        const { email, password } = req.body;

        // Проверяем, что email и пароль были переданы
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
    
        const candidate = await User.findOne({ where: { email } });
    
        if (candidate) {
            return next(ApiError.badRequest('Користувач з таким email вже існує'));
        }
    
        const hashPassword = await bcrypt.hash(password, 5);
    
        //const activationLink = uuid.v4();
    
        // Здесь устанавливаем роль "client" для всех новых пользователей
        const user = await User.create({
            email, 
            role: {"CLIENT": 2001}, 
            password: hashPassword 
            /*, activationLink*/ });
    
        // Call sendActivationMail using this.sendActivationMail
        //await this.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.internal('Користувача з таким email не знайдено'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internal('Невірний пароль'));
        }

        const roles = Object.values(user.role);
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
    async getProfile(req, res, next) {
        try {
            // Используем данные пользователя из запроса
            const { id, email, roles } = req.user;

            // В зависимости от роли возвращаем разные данные
            let profileData;
            if (roles === 'CLIENT') {
                profileData = {
                    id,
                    email,
                    roles,
                    // Дополнительные данные для профиля клиента
                };
            } else if (roles === 'MASTER') {
                profileData = {
                    id,
                    email,
                    roles,
                    // Дополнительные данные для профиля мастера
                };
            } else if (roles === 'MANAGER') {
                profileData = {
                    id,
                    email,
                    roles,
                    // Дополнительные данные для профиля менеджера
                };
            }
            return res.json(profileData);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
