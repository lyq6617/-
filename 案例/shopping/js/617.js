window.addEventListener('load', function () {
    var ap = document.querySelector('.ap');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    ap.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    ap.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    ap.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //遮挡层的最大移动距离
        var maskMax = ap.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //大图片的移动距离=遮挡层移动距离 * 大图片最大移动距离 /遮挡层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskX * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';


    })

})