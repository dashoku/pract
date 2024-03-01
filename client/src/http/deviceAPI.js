import { $authHost, $host } from './index';


export const createType = async (type) => {
    const {data} = await $authHost.post('api/category', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/category', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/category', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/procedure', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/procedure', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/procedure/' + id)
    return data
}

// Category
export const createCategory = async (category) => {
    const { data } = await $authHost.post('api/category', category);
    return data;
};

export const fetchCategories = async () => {
    const { data } = await $host.get('api/category');
    return data;
};

// Procedure
export const createProcedure = async (procedure) => {
    const { data } = await $authHost.post('api/procedure', procedure);
    return data;
};

export const fetchProcedures = async (categoryId, page, limit = 5) => {
    const { data } = await $host.get('api/procedure', {
        params: { categoryId, page, limit }
    });
    return data;
};

export const fetchOneProcedure = async (id) => {
    const { data } = await $host.get(`api/procedure/${id}`);
    return data;
};


// Discount
export const createDiscount = async (discount) => {
    const { data } = await $authHost.post('api/discount', discount);
    return data;
};

export const fetchDiscounts = async () => {
    const { data } = await $host.get('api/discount');
    return data;
};

// Salon
export const createSalon = async (salon) => {
    const { data } = await $authHost.post('api/salon', salon);
    return data;
};

export const fetchSalons = async () => {
    const { data } = await $host.get('api/salon');
    return data;
};

// WorkingHours
export const createWorkingHours = async (workingHours) => {
    const { data } = await $authHost.post('api/working-hours', workingHours);
    return data;
};

export const fetchWorkingHours = async () => {
    const { data } = await $host.get('api/working-hours');
    return data;
};

// Income
export const createIncome = async (income) => {
    const { data } = await $authHost.post('api/income', income);
    return data;
};

export const fetchIncome = async () => {
    const { data } = await $host.get('api/income');
    return data;
};

// Manager
export const createManager = async (manager) => {
    const { data } = await $authHost.post('api/manager', manager);
    return data;
};

export const fetchManagers = async () => {
    const { data } = await $host.get('api/manager');
    return data;
};

// Record
export const createRecord = async (record) => {
    const { data } = await $authHost.post('api/record', record);
    return data;
};

export const fetchRecords = async () => {
    const { data } = await $host.get('api/record');
    return data;
};

// Master
export const createMaster = async (master) => {
    const { data } = await $authHost.post('api/master', master);
    return data;
};

export const fetchMasters = async () => {
    const { data } = await $host.get('api/master');
    return data;
};

// Expense
export const createExpense = async (expense) => {
    const { data } = await $authHost.post('api/expense', expense);
    return data;
};

export const fetchExpenses = async () => {
    const { data } = await $host.get('api/expense');
    return data;
};

// Client
export const createClient = async (client) => {
    const { data } = await $authHost.post('api/client', client);
    return data;
};

export const fetchClients = async () => {
    const { data } = await $host.get('api/client');
    return data;
};

// Review
export const createReview = async (review) => {
    const { data } = await $authHost.post('api/review', review);
    return data;
};

export const fetchReviews = async () => {
    const { data } = await $host.get('api/review');
    return data;
};

// Reminder
export const createReminder = async (reminder) => {
    const { data } = await $authHost.post('api/reminder', reminder);
    return data;
};

export const fetchReminders = async () => {
    const { data } = await $host.get('api/reminder');
    return data;
};
