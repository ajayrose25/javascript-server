import { IPermissions } from './interfaces';
export const permissions: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};

const { getUsers } = permissions;