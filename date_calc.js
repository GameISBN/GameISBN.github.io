var myVar = setInterval(function () {
    myTimer()
}, 1000);

function myTimer() {
    var time = new Date();
    var d = time.toLocaleDateString('zh-CN');
    var c = time.toLocaleTimeString('zh-CN');
    document.getElementById("TimeDay").innerHTML = d;
    document.getElementById("TimeClock").innerHTML = c;
}

var hzWeek = new Array("日", "一", "二", "三", "四", "五", "六", "日");

//获取星期
function cweekday(wday) { return hzWeek[wday]; }

var date = new Date();

function calb() {

    y2 = 2022;
    m2 = 6;
    d2 = 7;


    y3 = date.getFullYear();
    m3 = date.getMonth() + 1;
    d3 = date.getDate();


    day2 = new Date(y2, m2 - 1, d2);
    day3 = new Date(y3, m3 - 1, d3);

    document.getElementById("result2").innerHTML = (day3 - day2) / 86400000;


}
