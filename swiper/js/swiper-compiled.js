/**
 * create by yilin
 * 2017-6-1
 * */
// 页面加载完了执行 js
window.addEventListener('load', function () {
    // 拿到图片
    var pics = document.querySelectorAll('.list');
    var circle = document.querySelectorAll('.circle');
    // 拿到点点
    var points = circle[0].querySelectorAll('span');
    console.log(circle, points);
    var timer = null;
    var index = 0;

    // 自动播放
    timer = setInterval(autoSwiper, 1000);
    function autoSwiper() {
        index++;
        if (index >= pics.length) {
            index = 0;
        }
        run(index);
    }
    // 实现切换
    function run(index) {
        var i;
        for (i = 0; i < pics.length; i++) {
            pics[i].style.display = 'none';
            points[i].className = '';
        }
        pics[index].style.display = 'block';
        points[index].className = 'active';
    }
}, false);

//# sourceMappingURL=swiper-compiled.js.map