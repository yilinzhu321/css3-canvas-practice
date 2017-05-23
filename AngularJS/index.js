var canvas;
var context;
function getDom(id){
    canvas = document.getElementById(id);
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight - 300;
    if(canvas == null){
        return false;
    }
    context =canvas.getContext("2d");
}

(function canvas1(){
        getDom('id');
        context.fillRect(0, 0, 100, 100); //(x, y, width, height)
        context.strokeRect(120, 0, 100, 100); //(x, y, width, height)
        context.fillStyle = "red";
        context.strokeStyle = "blue";
        context.fillRect(0, 120, 100, 100);
        context.strokeRect(120, 120, 100, 100);
        context.fillStyle = "rgba(255,0,0,0.2)";
        context.strokeStyle = "rgba(255,0,0,0.2)";
        context.fillRect(240,0 , 100, 100);
        context.strokeRect(240, 120, 100, 100);
        context.clearRect(50, 50, 240, 120);
    }
)();
(function canvas2(){
        var canvas2 = document.getElementById('id2');
        canvas2.width = document.documentElement.clientWidth;
        canvas2.height = document.documentElement.clientHeight;
        if (canvas2 == null) {
            return false;
        }
        var context2 = canvas2.getContext('2d');
        context2.beginPath();
        //context.arc(x,y,r,sAngle:起始角，以弧度计,eAngle:结束角，以弧度计,counterclockwise:可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针);
        context2.arc(100, 100, 100, 0, Math.PI * 2, true);
        context2.fillStyle = 'rgba(0,255,0,0.25)';
        context2.closePath();
        context2.fill();

        context2.beginPath();
        context2.arc(100, 100, 50, 0, Math.PI/2 , true);
        context2.fillStyle = 'rgba(255,0,0,0.25)';
        context2.fill();
        context2.strokeStyle = 'rgba(255,0,0,0.25)'
        context2.closePath();
        context2.stroke();

        context2.beginPath();
        context2.arc(100, 100, 50, 0, Math.PI/2 , false);
        context2.strokeStyle = 'rgba(255,0,0,0.25)';
        context2.closePath();
        context2.stroke();

        context2.beginPath();
        context2.arc(100, 100, 50, Math.PI/2 * 3 , Math.PI , true);
        context2.fillStyle = 'rgba(0,0,255,0.25)';
        context2.fill();
        context2.strokeStyle = 'rgba(255,0,0,0.25)';
        context2.closePath();
        context2.stroke();

        context2.strokeStyle = "rgb(250,0,0)";
        context2.lineTo(100, 100);
        context2.lineTo(100, 150);

        context2.lineTo(100, 50);

        context2.lineTo(100, 100);
        context2.lineTo(50, 100);

        context2.lineTo(150, 100);

        context2.moveTo(200, 50);
        context2.stroke();

        context2.fillStyle = "#EEEEFF";
        //context2.fillRect(0, 0, 400, 300);
        var n = 0;
        var dx = 100;
        var dy = 350;
        var s = 100;
        context2.beginPath();
        // TODO
        //context2.globalCompositeOperation = 'and';
        //context2.fillStyle = 'rgb(100,255,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var angle = Math.PI / 15 * 11;
        for(var i = 0; i < 30; i++){
            x = Math.sin(i * angle);
            y = Math.cos(i * angle);
            context2.lineTo(dx + x * s, dy + y * s);
            // TODO
            //context2.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
        }
        context2.closePath();
        context2.fill();
        context2.stroke();
    }
)();
(function canvas3(){
    getDom('id3');
    context.moveTo(50, 50);
    //bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y)
    //cpX1, cpY1	和曲线的开始点（当前位置）相关联的控制点的坐标。
    //cpX2, cpY2	和曲线的结束点相关联的控制点的坐标。
    //x, y	曲线的结束点的坐标。
    context.bezierCurveTo(50, 50,150, 50, 150, 150);
    context.stroke();
    //context.quadraticCurveTo(cpx,cpy,x,y);
    //cpx	贝塞尔控制点的 x 坐标
    //cpy	贝塞尔控制点的 y 坐标
    //x	结束点的 x 坐标
    //y	结束点的 y 坐标
    context.quadraticCurveTo(150, 250, 250, 250);
    context.stroke();
}
)();
//var num = 360;
//var radianDecrement = Math.PI / num * 2; //弧度增量
//(//x = 16(sint)^3; y = 13cost - 5cos2t - 2cos3t -cos4t;
//    function drowHeard(){
//        getDom('id4');
//        var startRadian = Math.PI;
//        var radian;
//        var r = 4;
//        context.strokeStyle = "rgba(0,200,0,0.5)";
//        context.lineWidth = 1;
//        radian = startRadian;//弧度设为初始弧度
//        drowLine(r, radian);
//
//        //for (r = 1; r < 5; r++){
//        //    drowLine(r, radian);
//        //}
//
//    }
//)();
//function drowLine(r, radian){
//    var time = 10;
//    var i = 0;
//    context.moveTo(getX(r, radian), getY(r, radian));//移动到初始点
//    intervalId = setInterval(function printHeart(){
//        radian += radianDecrement;
//        context.lineTo(getX(r, radian), getY(r, radian));
//        i++;
//        context.stroke();//画线
//    }, time);
//    if (i >= num) {
//        clearInterval(intervalId);
//    }
//}
//function getX(r, t) {//由弧度得到 X 坐标
//    return 100 + r * (16 * Math.pow(Math.sin(t), 3));
//
//
//
//}
//function getY(r, t) {//由弧度得到 Y 坐标
//    return 50 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
//}

(function canvas5(){
    getDom('id5');
    //context.createLinearGradient(x0,y0,x1,y1);
    //x0	渐变开始点的 x 坐标
    //y0	渐变开始点的 y 坐标
    //x1	渐变结束点的 x 坐标
    //y1	渐变结束点的 y 坐标

    //createRadialGradient   创建放射状/圆形渐变对象。
    //var g1 = context.createLinearGradient(0, 0, 0, 300);
    var g1 = context.createRadialGradient(100, 150, 10, 300, 150, 50);
    g1.addColorStop(0, 'rgb(255,0,0)'); //红
    g1.addColorStop(0.3, 'rgb(0,255,0)');//绿
    g1.addColorStop(0.7, 'rgb(0,0,0)');//绿
    g1.addColorStop(1, 'rgb(0,0,255)'); //蓝
    //可以把lg对象理解成GDI中线性brush
    context.fillStyle = g1;
    //再用这个brush来画正方形
    context.fillRect(0, 0, 300, 300);
    }
)();

(function flower() {

        getDom('id6');
        var Xo, Yo, A, B;
        var n = 10;
        context.lineWidth = 1;
        Xo = canvas.width / 2;
        Yo = canvas.height / 2;
        console.log(Xo, Yo, 'Yo')
        A = Yo * 0.75;
        context.save();//保存当前绘制状态
        //context.clearRect(0,0,width,height);//擦除之前绘制的图形
        context.translate(Xo,Yo);//坐标原点移动到canvas元素中央
        context.beginPath();//开始创建路径
        for(B = 0; B < 6.5; B = B + 0.01) {
            r = A * Math.sin(n * B);
            x = r * Math.cos(B);
            y = r * Math.sin(B);
            context.fillStyle="rgba(0,255,0,.25)";//设置填充颜色
            context.lineTo(-x,-y);//绘制直线
            context.fill();
        }
        context.closePath();//关闭路径
}
)();

(function flower1(){
        getDom('id7');
        var Xo, Yo, A, B;
        var n = 10;
        context.lineWidth = 1;
        Xo = canvas.width / 2;
        Yo = canvas.height / 2;
        A = Yo * 0.45;
        context.save();//保存当前绘制状态
        //context.clearRect(0,0,width,height);//擦除之前绘制的图形
        context.translate(Xo,Yo);//坐标原点移动到canvas元素中央
        context.beginPath();//开始创建路径
        for(B = 0; B < 6.5; B = B + 0.01) {
            r = A * Math.sin(n * B) * Math.exp(-B / (20));
            x = r * Math.cos(B);
            y = r * Math.sin(B);
            context.fillStyle="rgba(255,0,0,.25)";//设置填充颜色
            context.lineTo(-x,-y);//绘制直线
            context.fill();
        }
        context.closePath();//关闭路径
    }
)();

