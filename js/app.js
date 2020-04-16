// 服务端
// 引入支持接收请求，返回响应的模块http
const http=require("http");
const url=require("url");

// 创建服务端程序实例
http.createServer(
  // 每当客户端发来请求时
  // 自动调用回调函数
  (req,res)=>{
    var Url=url.parse(req.url.true);
    var callback=Url.query.callback;
    var weather="合肥 晴天 18~32";
    // 可选，因为客户端ajax自带json转换
    res.writeHead(200,{
      "Content-Type":"text/plain;charset=utf-8"
    });
    // 想在客户端执行：alert("天气")
    res.write(`${callback}("${weather}")`);
    res.end();
  }
)
// 并监听3000端口
.listen(3000)
console.log("服务器启动成功")