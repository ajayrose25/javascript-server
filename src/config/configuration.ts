import { config } from 'dotenv';
import Iconfig from './iconfig';
import { createSecretKey } from 'crypto';
config();

const configuration: Iconfig = Object.freeze( {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secretKey: process.env.SECRET_KEY
});

const {port, env, secretKey} = configuration;

export default configuration;
