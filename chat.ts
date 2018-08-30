
import signalr = require('@aspnet/signalr');    
import CommentManager from 'comment-core-library';

let connection = new signalr.HubConnectionBuilder().withUrl("/chatHub").build();
let CM = new CommentManager(document.getElementById('my-comment-stage'));
CM.init(); // 初始化
connection.on("ReceiveMessage",function(message:string){
    
});
var danmakuList = [
    {
        "mode":1,
        "text":"Hello World",
        "stime":0,
        "size":25,
        "color":0xffffff
    }
];
CM.load(danmakuList);
// 启动播放弹幕（在未启动状态下弹幕不会移动）
CM.start();