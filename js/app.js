// �����
// ����֧�ֽ������󣬷�����Ӧ��ģ��http
const http=require("http");
const url=require("url");

// ��������˳���ʵ��
http.createServer(
  // ÿ���ͻ��˷�������ʱ
  // �Զ����ûص�����
  (req,res)=>{
    var Url=url.parse(req.url.true);
    var callback=Url.query.callback;
    var weather="�Ϸ� ���� 18~32";
    // ��ѡ����Ϊ�ͻ���ajax�Դ�jsonת��
    res.writeHead(200,{
      "Content-Type":"text/plain;charset=utf-8"
    });
    // ���ڿͻ���ִ�У�alert("����")
    res.write(`${callback}("${weather}")`);
    res.end();
  }
)
// ������3000�˿�
.listen(3000)
console.log("�����������ɹ�")