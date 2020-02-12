export const validation = {
    create:
    {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: ((value) => {
                console.log('Value', value);
                throw { error: 'Error Occured', message: 'Message' };
            })
        },
        name: {
            required: true,
            regex: /([a-zA-Z])+ ([a-zA-Z])+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        address: {
            required: true,
            string: false,
            in: ['body'],
        },
        email: {
            required: true,
            string: true,
            in: ['body'],
        },
        dob: {
            required: true,
            number: true,
            in: ['body'],
        },
        mobileNumber: {
            required: true,
            number: true,
            in: ['body'],
        },
        hobbies: {
            required: true,
            string: true,
            in: ['body'],
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: (dataToUpdate) => { 
                
            },
        }
    }
}; 