const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

const portifolioRouter = require('./router/portifolioRouter')

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json());

router.get("/", (req, res) => res.json({
    mensagem: 'API online!'
}))

api.use('/', router);
api.use('/portifolio', portifolioRouter);

api.listen(port);
console.log('Run API...');