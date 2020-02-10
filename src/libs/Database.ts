import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
    static open = (mongoUri: string) => {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log('error in database connection');
                    return reject(err);
                }
                seedData();
                resolve({ name: 'data' });
                console.log('database connected successfully');
            });
        })
    }
    static disconnect = () => {
        mongoose.connection.close();
        console.log(':::::::::::Database Disconnected Successfully::::::::::::::::::::::')
}
}

export default Database;