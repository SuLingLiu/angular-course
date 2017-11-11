/**
 *  npm i @types/express --save    文件支持typescript
 *  npm i @types/node --save     node支持typescript语法
 *  npm init -y 创建一个默认的package.json文件
 *  npm i @types/ws --save  websocket支持typescript
 *  需要创建tsconfig.json来编译typescript
 * */

import * as express from 'express';

import { Server} from  'ws';

const app = express();

app.get('/', (request, response) => response.send('这里是首页'));
app.get('/api/stock', (request, response) => {
    response.json(stocks);
});
app.get('/api/stock/:id', (request, response) => {
    response.json(stocks.find( (stock) => stock.id == request.params.id));
});

const server = app.listen(8080, 'localhost', () => {
    console.log('服务器已经启动')
});

const wsServer = new Server({port: 8081});
wsServer.on('connection', websocket => {
    websocket.send('欢迎连接服务器！！');
    websocket.on('message', message => {
        console.log('接收到客户端发送的消息，消息内容是：'+ message);
    })
});

//每隔2s给客户端推送消息
setInterval(() => {
    //clients表示当前服务器连上的所有客户端
    if(wsServer.clients) {
        //循环每一个客户端；
        wsServer.clients.forEach(client => {
            client.send('这是定时推送的消息');
        })
    }
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