var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "@aspnet/signalr", "comment-core-library"], function (require, exports, signalr, comment_core_library_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    comment_core_library_1 = __importDefault(comment_core_library_1);
    let connection = new signalr.HubConnectionBuilder().withUrl("/chatHub").build();
    let CM = new comment_core_library_1.default(document.getElementById('my-comment-stage'));
    CM.init(); // 初始化
    connection.on("ReceiveMessage", function (message) {
    });
    var danmakuList = [
        {
            "mode": 1,
            "text": "Hello World",
            "stime": 0,
            "size": 25,
            "color": 0xffffff
        }
    ];
    CM.load(danmakuList);
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM.start();
});
