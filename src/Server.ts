import * as express from 'express';
import * as bodyParser from 'body-parser';
import Iconfig from './config/iconfig';
import { errorHandler, notFoundRoute } from './libs/routes';
import { eventNames } from 'cluster';

class Server {
    private app: express.Express;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();

        return this;
    }
    run = () => {
        const { app, config: { port, env } } = this;
        app.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log('app is running successfully on', { port }, { env });
        });
        app.use(notFoundRoute);
        app.use(errorHandler);

        return this;
    }
    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }

    setupRoutes() {
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.send('I am OK');
            this.app.use(notFoundRoute);
            this.app.use(errorHandler);
        });
    }
}

export default Server;

