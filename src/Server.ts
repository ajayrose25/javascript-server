import * as express from 'express';
import Iconfig from './config/iconfig';

class Server {
    private app: express.Express;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap() {
        console.log('inside bootstrap');
        this.setupRoutes();
        return this;
    }
    run = () => {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log('app is running successfully');
        });
        return this;
    }

    setupRoutes() {
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.send('I am OK');
        });
    }
}

export default Server ;

