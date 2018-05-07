(() => {
    var dom = document.querySelector('canvas'),
    width = dom.getAttribute('width'),
    height = dom.getAttribute('height'),
    mp = Math.PI,
    c1 = 245,
    c2 = 27,
    c3 = 203,
    flg = true,
    reqRet;

    if(!dom || !dom.getContext('2d')){return;}
    var ctx = dom.getContext('2d');

    (function(w,r){
        w['r'+r] = w['r'+r] ||
        w['webkitR'+r] ||
        w['mozR'+r] ||
        w['oR'+r] ||
        w['msR'+r] ||
        function(callback){w.setTimeout(callback,1000/60);};
    })(window,'equestAnimationFrame');

    (function(w,c){
        w['c'+c] = w['c'+c] ||
        w['webkitC'+c] ||
        w['mozC'+c] ||
        w['oC'+c] ||
        w['msC'+c] ||
        function(callback){w.clearTimeout(reqRet);};
    })(window,'ancelAnimationFrame');

    var c_ch = function(c){
        return ('0' + c.toString(16)).slice(-2);
    };

    var draw = function(){
        ctx.fillStyle = '#' + c_ch(c1) + c_ch(c2) + c_ch(c3);
        ctx.fillRect(width / 2,height / 2,50,50);
    };

    var loop = function(){
        ctx.clearRect(0,0,width,height);
        draw();

        if(flg){
            c1 = c1 > 222?c1 - 1:c1;
            c2 = 183 > c2?c2 + 1:c2;
            c3 = c3 > 132?c3 - 1:c3;
        }else{
            c1 = 245 > c1?c1 + 1:c1;
            c2 = c2 > 27?c2 - 1:c2;
            c3 = 203 > c3?c3 + 1:c3;
        }

        if(flg && c1 === 222 && c2 === 183 && c3 === 132) flg = false;
        if(!flg && c1 === 245 && c2 === 27 && c3 === 203) flg = true;


        reqRet = window.requestAnimationFrame(loop);

    };

    loop();

})();
