import express, { urlencoded } from 'express';
import ProductRoutes from './routes/products.routes.js'
import CartRoutes from './routes/carts.routes.js'
import { config } from './config.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', ProductRoutes)
app.use('/api/carts', CartRoutes)
app.use(express.static(`${config.DIRNAME}/public`));


app.listen(config.PORT, ()=> {
    console.log(`Servidor iniciado en ${config.PORT}`);
})