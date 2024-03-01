const { Master } = require('../models/models');
const ApiError = require('../error/ApiError');

class MasterController {
    async create(req, res, next) {
        const { name, password, phone, age, email, surname } = req.body;
        try {
            const master = await Master.create({ name, password, phone, age, email, surname });
            return res.json(master);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const masters = await Master.findAll();
            return res.json(masters);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const master = await Master.findByPk(id);
            if (!master) {
                return next(ApiError.notFound(`Master with id ${id} not found`));
            }
            return res.json(master);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name, password, phone, age, email, surname } = req.body;
        try {
            const master = await Master.findByPk(id);
            if (!master) {
                return next(ApiError.notFound(`Master with id ${id} not found`));
            }
            master.name = name;
            master.password = password;
            master.phone = phone;
            master.age = age;
            master.email = email;
            master.surname = surname;
            await master.save();
            return res.json(master);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const master = await Master.findByPk(id);
            if (!master) {
                return next(ApiError.notFound(`Master with id ${id} not found`));
            }
            await master.destroy();
            return res.json({ message: 'Master deleted successfully' });
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }
}

module.exports = new MasterController();
