import * as mongoose from 'mongoose';
import IVersionableDocument from '../../repositories/versionable/ IVersionableDocument';

export default class VersionableRepository<D extends mongoose.Document, m extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    protected modelType: m;

    constructor(modelType) {
        this.modelType = modelType;
    }
    public create(options): Promise<D> {
        console.log(options, "}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>create");
        const id = VersionableRepository.generateObjectId();
        const model = new this.modelType({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: id,
            deletedAt: Date.now(),
            // email: 'vinay@nodepddddderts.com',
            // name: 'Head Trainer',
            // address: 'Noida',
            // hobbies: [ 'Touring' ],
            // dob: '1970-01-01 00:00:00.000Z',
            // mobileNumber: 8925558330
        });
        return model.save();
    }
    public count() {
        return this.modelType.countDocuments();
    }
    public update(id, data) {
        this.modelType.findById(id)
            .then(user => {
                console.log('userrrrrrrrrrrrrrrrrr', user);
                const updatedData = Object.assign(user, data);
                this.updateAndCreate(user);
            })
            .catch(error => {
                throw error;
            });
        const deleteddata = {
            deletedBy: id,
            deletedAt: Date.now()
        };
        return this.modelType.update(id, deleteddata);
    }
    public updateAndCreate(options) {
        console.log(options);
        const id = VersionableRepository.generateObjectId();
        return this.modelType.create({
        name: options.name,
        hobbies: options.hobbies,
        email: options.email,
        address: options.address,
        dob: options.dob,
        role: options.role,
        mobileNumber: options.mobileNumber,
        originalId: options.originalId,
        ...options,
        _id: id,
        createdBy: id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        updatedBy: id
        });
        }
    async getAll() {
        return this.modelType.find();
    }
    async delete(id) {
        const deleteddata = {
            deletedBy: id,
            deletedAt: Date.now()
        };
        console.log(deleteddata.deletedAt,' kkkkkkkkkkkkkk');
        console.log(deleteddata.deletedBy, 'eeeeeeeeeeeeeeeeeee');
        return this.updateAndCreate(id);
    }
}
