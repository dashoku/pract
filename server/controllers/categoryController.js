const { Category } = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res) {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ error: 'Необхідно ввести назву та опис' });
        }
        try {
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                return res.status(400).json({ error: 'Категорія з такою назвою вже існує' });
            }
            const category = await Category.create({ name, description });
            return res.json(category);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            return res.json(categories);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const category = await Category.findByPk(id);
            if (!category) {
                return next(ApiError.notFound(`Категорія з ідентифікатором ${id} не знайдена`));
            }
            return res.json(category);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ error: 'Необхідно ввести назву та опис' });
        }
        try {
            const category = await Category.findByPk(id);
            if (!category) {
                return next(ApiError.notFound(`Категорія з ідентифікатором ${id} не знайдена`));
            }

            if (name !== category.name) {
                const existingCategory = await Category.findOne({ where: { name } });
                if (existingCategory) {
                    return res.status(400).json({ error: 'Категорія з такою назвою вже існує' });
                }
            }
            
            category.name = name;
            category.description = description;
            await category.save();
            return res.json(category);
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }    

    async delete(req, res) {
        const { id } = req.params;
        try {
            const category = await Category.findByPk(id);
            if (!category) {
                return next(ApiError.notFound(`Категорія з ідентифікатором ${id} не знайдена`));
            }
            await category.destroy();
            return res.json({ message: 'Категорія успішно видалена' });
        } catch (err) {
            return next(ApiError.internalServerError(err.message));
        }
    }
}

module.exports = new CategoryController();