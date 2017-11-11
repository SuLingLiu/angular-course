/**
 *  npm i @types/express --save    文件支持typescript
 *  npm i @types/node --save     node支持typescript语法
 *  npm init -y 创建一个默认的package.json文件
 *  npm i @types/ws --save  websocket支持typescript
 *  需要创建tsconfig.json来编译typescript
 * */

import * as express from 'express';
import * as path from 'path';

import { Server} from  'ws';

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/stock', (req, res) => {
    let result = stocks;
    let params = req.query;
    if(params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1)
    }
    res.json(result);
});
app.get('/api/stock/:id', (req, res) => {
    res.json(stocks.find( (stock) => stock.id == req.params.id));
});

const server = app.listen(8000, 'localhost', () => {
    console.log('服务器已经启动')
});
//这个集合是用放所有客户端的
const subscriptions = new Set<any>();
const wsServer = new Server({port: 8085});
wsServer.on('connection', websocket => {

    subscriptions.add(websocket);
});
var messageCount = 0;

//每隔2s给客户端推送消息
setInterval(() => {
    subscriptions.forEach(ws => {
        if(ws.readyState === 1) {   //表示客户端还是连着的
            ws.send(JSON.stringify({messageCount: messageCount++}));
        }else {
            subscriptions.delete(ws);
        }
    })
}, 2000)

export class Stock {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {}
}

const stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 1.5, '这是第一支股票，是我在学习angular', ['IT','互联网']),
    new Stock(2, '第二只股票', 2.99, 2.5, '这是第二支股票，是我在学习angular', ['IT','科技']),
    new Stock(3, '第三只股票', 3.99, 3.5, '这是第三支股票，是我在学习angular', ['IT','股票']),
    new Stock(4, '第四只股票', 4.99, 4.2, '这是第四支股票，是我在学习angular', ['网红','互联网']),
    new Stock(5, '第五只股票', 5.99, 4.7, '这是第五支股票，是我在学习angular', ['IT','科学']),
    new Stock(6, '第六只股票', 6.99, 3.3, '这是第六支股票，是我在学习angular', ['道德','互联网']),
    new Stock(7, '第柒只股票', 7.99, 2.1, '这是第柒支股票，是我在学习angular', ['IT','新福'])
];