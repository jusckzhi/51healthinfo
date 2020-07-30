//浏览器判断
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") {
    document.getElementById("ieTs").style.display = "block";
}

//第一屏显示
var pgHeight = $(window).height();
$("#hdBox").css("height", pgHeight);
$("#navBox").css("top", pgHeight - 170);
$("#header").css("height", pgHeight - 170 + "px");
$("#hdCenter").css("height", pgHeight - 170 + "px");


// 自定义导航菜单

// 导航状态标记  默认关闭
var targetNav = true
$("#closeNav").click(function () {
    if (targetNav) {
        // 打开
        $("#navShade").css("display", "block")
        $("#closeNav").css("color", "#7acdf3")
    } else {
        // 关闭
        $("#navShade").css("display", "none")
        $("#closeNav").css("color", "#696969")
    }
    targetNav = !targetNav
})
$("#navShade").click(function () {
    $("#navShade").css("display", "none")
    $("#closeNav").css("color", "#696969")
    targetNav = false;
})



//二维码
$("#btnMa").mousemove(function () {
    $("#maBox").show(200);
});
$("#btnMa").mouseout(function () {
    $("#maBox").hide(200);
});

//数字增加
function Numincrease(opt) { //num 保留多少位
    this.settings = {
        'num': 2,
        'str': ''
    }
    extend(this.settings, opt);
    this.obj = gid(opt.id);
    this.num = this.settings.num;
    this.timer = null;
    this.str = this.settings.str;
}
Numincrease.prototype = {
    constructor: Numincrease,
    moveup: function (numb) {
        clearInterval(this.timer);
        var _this = this;
        var time = 0;
        if (numb) {
            var str = '' + numb;
        } else {
            var str = this.obj.innerHTML;
        }
        var num = parseFloat(str.replace(/[\u4e00-\u9fa5\：\,]/g, ''));
        this.obj.innerHTML = 0;
        this.timer = setInterval(function () {
            time++;
            if (_this.str != '') {
                _this.obj.innerHTML = _this.fmoney(num * (0.05 * time), _this.num);
            } else {
                _this.obj.innerHTML = _this.fmoney(num * (0.05 * time), _this.num);
            }
            if (time >= 20) {
                clearInterval(_this.timer);
            }
        }, 50)
    },
    fmoney: function (s, n) {
        n = n > 0 && n <= 20 ? n : 0;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        if (n == 0) {
            return t.split("").reverse().join("");
        } else {
            return t.split("").reverse().join("") + "." + r;
        }
    }
}

//获取ID
function gid(v) {
    return document.getElementById(v);
}
//组件用到的覆盖属性	
function extend(obj1, obj2) { //obj2的属性 覆盖 obj1的属性
    for (var attr in obj2) {
        obj1[attr] = obj2[attr];
    }
}
var numAdd1 = new Numincrease({
    'num': 0,
    'id': 'brandNumberText',
    'str': 1
});
var numAdd2 = new Numincrease({
    'num': 0,
    'id': 'ordersNumberText',
    'str': 1
});

var cont7Off = true;
// 鼠标滚轮事件---------------------------------S

//浮动导航
var navBox = document.getElementById("navBox");
var navBoxSmall = document.getElementById("navBoxSmall");
//曲线运动
var cont2 = document.getElementById("cont2");
var qx1 = document.getElementById("qx1");
var qx2 = document.getElementById("qx2");
//手机
var cont3 = document.getElementById("cont3");
var cont3Right = document.getElementById("cont3Right");
//cont4
var cont4 = document.getElementById("cont4");
var cont4Title = document.getElementById("cont4Title");
var cont4Even = document.getElementById("cont4Even");
//cont5
var cont5 = document.getElementById("cont5");
var cont5Center = document.getElementById("cont5Center");
//cont6
var cont6 = document.getElementById("cont6");
var cont6Center = document.getElementById("cont6Center");
//cont7
var cont7 = document.getElementById("cont7");
window.onscroll = function () {
    //浮动
    var navBoxTop = navBox.getBoundingClientRect().top;
    if (navBoxTop <= 0) {
        navBoxSmall.style.display = "block";
    } else {
        navBoxSmall.style.display = "none";
    }
    //曲线
    var cont2Top = cont2.getBoundingClientRect().top;
    if (cont2Top <= 300) {
        cont2.className = "cont2 play";
        qx1.style.display = "block";
        qx2.style.display = "block";
    }
    /*else if(cont2Top>=600){
        cont2.className = "cont2";
        qx1.style.display = "none";
        qx2.style.display = "none";
    }*/
    //手机运动
    var cont3Top = cont3.getBoundingClientRect().top;
    if (cont3Top <= 300) {
        cont3Right.style.display = "block";
        cont3.className = "cont3 play";
    }
    /*else{
        cont3Right.style.display = "none";
        cont3.className = "cont3";
    }*/
    //cont4
    var cont4Top = cont4.getBoundingClientRect().top;
    if (cont4Top <= 500) {
        cont4.className = "cont4 play";
        cont4Title.style.display = "block";
        cont4Even.style.display = "block";
    }
    /*else{
        cont4.className = "cont4";
        cont4Title.style.display = "none";
        cont4Even.style.display = "none";
    }*/
    //cont5
    var cont5Top = cont5.getBoundingClientRect().top;
    if (cont5Top <= 400) {
        cont5.className = "cont5 play";
        cont5Center.style.display = "block";
    }
    /*else{
        cont5.className = "cont5";
        cont5Center.style.display = "none";
    }*/
    //cont6
    var cont6Top = cont6.getBoundingClientRect().top;
    if (cont6Top <= 500) {
        cont6.className = "cont6 play";
        cont6Center.style.display = "block";
    }
    /*else{
        cont6.className = "cont6";
        cont6Center.style.display = "none";
    }*/
    //数字加载
    var cont7Top = cont7.getBoundingClientRect().top;

    if (cont7Top <= 400) {
        if (cont7Off) {
            changeNumber(); //装载数据
            numAdd1.moveup();
            numAdd2.moveup();
        }
        cont7Off = false;
    }
};

// 鼠标滚轮事件---------------------------------E   
// cont1轮播
var cont1TabText = document.getElementById("cont1TabText");
var cont1TabTextList = cont1TabText.getElementsByTagName("span");
//↑轮播时切换的文字

var cont1TabList = document.getElementById("cont1TabList");
var cont1TabListLi = cont1TabList.getElementsByTagName("li");
var cont1Tab = null;
var cont1Num = 0;
setInterval(function () {
    if (cont1Num >= cont1TabListLi.length - 1) {
        cont1Num = 0;
    } else {
        cont1Num++;
    }
    for (var i = 0; i < cont1TabTextList.length; i++) {
        cont1TabTextList[i].className = "cont1_tab_text";
        cont1TabListLi[i].style.display = "none";
        cont1TabListLi[i].className = "cont1_tab_list_li";
    }
    cont1TabTextList[cont1Num].className = "cont1_tab_text_h";
    cont1TabListLi[cont1Num].style.display = "block";
    cont1TabListLi[cont1Num].className = "cont1_tab_list_li_show";
    setTimeout(function () {
        cont1TabListLi[cont1Num].className = "cont1_tab_list_li_hide";
    }, 2000);
}, 3000);

// footer轮播
var flag = "left";

function DY_scroll(wraper, prev, next, img, imga, speed, or) {
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var imga = $(imga).find('ul li');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function () {
        img.animate({
            'margin-left': -w
        } /*,1500,'easeOutBounce'*/ , function () {
            img.find('li').eq(0).appendTo(img);
            img.css({
                'margin-left': 0
            });
        });
        flag = "left";
    });
    prev.click(function () {
        img.find('li:last').prependTo(img);
        img.css({
            'margin-left': -w
        });
        img.animate({
            'margin-left': 0
        } /*,1500,'easeOutBounce'*/ );
        flag = "right";
    });
    if (imga.length > 4) {
        if (or == true) {
            ad = setInterval(function () {
                flag == "left" ? next.click() : prev.click()
            }, s * 1000);
            wraper.hover(function () {
                clearInterval(ad);
            }, function () {
                ad = setInterval(function () {
                    flag == "left" ? next.click() : prev.click()
                }, s * 1000);
            });
        }
    }

}
DY_scroll('.hl_main5_content', '.hl_scrool_leftbtn', '.hl_scrool_rightbtn', '.hl_main5_content1', '.hl_main5_content1', 2, true); // true为自动播放，不加此参数或false就默认不自动 

function changeNumber() {
    //Auto数量增加
    var days = 0;
    var order = 1; // 初始值为 1
    var shop = 1 // 初始值为 1
    var iNum = 10; //每服务站每天增长人数
    var iShopOfDay = 7; //每个服务站的建立天数 
    var startTime = (new Date("2020/06/4 0:0:0")).getTime(); // 初始时间为 2016年06月4号 0点0分0秒  可以修改
    var currentTime = new Date().getTime(); // 获取当前时间的秒数 毫秒数
    days = (currentTime - startTime) / (3600000 * 24); //计算过去的天数

    shop = days / iShopOfDay;
    shop = Math.floor(shop); // 四舍转化为整数
    if (shop < 11) shop = 11;

    order = shop * days * iNum;
    if (order < 500) order = 523;

    $("#ordersNumberText").text(order);
    $("#brandNumberText").text(shop);

}