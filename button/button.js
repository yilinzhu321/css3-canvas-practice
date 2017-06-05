// var a;
//var button = document.getElementById('button');
//var click = false;
//var timer = null;
//function fun(){
//    if(click == false) {
//        console.log('22');
//        button.innerHTML = '123';
//    }
//    click = true;
//
//    timer = setTimeout(function() {
//        click = false;
//        button.innerHTML = '按钮';
//        clearTimeout(timer);
//    }, 300);
//}
//
//button.onclick = fun;

(function() {
    var button = document.getElementById('button');
    var click = true;
    var a = null;
    button.addEventListener('touchend', function () {
        if (click == true) {
            button.innerHTML = '跳转';
            click = false;
            a = setTimeout(function () {
                console.log(a, '1234')
                console.log('11');
                clearTimeout(a);
                console.log(a);
                button.innerHTML = '按钮';
                click = true;
            }, 3000);
        }
     }, false);
})();

