import * as mongoose from 'mongoose';

class Database {
    static open = (mongoUri: string) => {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
                if (err) {
                    console.log('error in database connection');
                    return reject(err);
                }
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