import { config } from 'dotenv';
import Iconfig from './iconfig';

config();

const { env: { PORT, NODE_ENV, SECRET_KEY, MONGO_URL }} = process;


const configuration: Iconfig = Object.freeze({
    port: PORT,
    env: NODE_ENV,
    secretKey: SECRET_KEY,
    mongoUri: MONGO_URL
});

// const {port, env, secretKey, mongoUri} = configuration;
// const {process.env.PORT} = port;
// const {process.env.NODE_ENV} = env;


export default configuration;
