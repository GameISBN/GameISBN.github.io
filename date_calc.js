var hzWeek = new Array("日", "一", "二", "三", "四", "五", "六", "日");

//获取星期
function cweekday(wday) { return hzWeek[wday]; }

var date = new Date();

function calb() {

    y2 = 2022;
    m2 = 4;
    d2 = 11;


    y3 = date.getFullYear();
    m3 = date.getMonth() + 1;
    d3 = date.getDate();


    day2 = new Date(y2, m2 - 1, d2);
    day3 = new Date(y3, m3 - 1, d3);

    document.getElementById("result2").innerHTML = (day3 - day2) / 86400000;


}
