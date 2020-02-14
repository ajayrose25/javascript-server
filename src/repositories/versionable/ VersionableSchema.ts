import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
    constructor(schema, options) {
        const baseSchema = {
            createdAt: {
                type: Date,
                default: Date.now
            },
            createdBy: {
                type: String,
            },
            updatedAt: {
                type: Date,
                default: Date.now
            },
            updatedBy: {
                type: String,
            },
            deletedAt: {
                type: Date,
                default: Date.now
            },
            deletedBy: {
                type: String,
            },
            originalId: String,
        };
        super({...schema, ...baseSchema}, options);
    }
}
