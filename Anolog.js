function show_clock()
{
    var monthName=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let h=document.getElementsByClassName('hr')[0];
    let m=document.getElementsByClassName('mn')[0];
    let s=document.getElementsByClassName('ss')[0];
    let min=document.getElementsByClassName('mi')[0];
    
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
    let d=date.getDay();
    let month=date.getMonth();
    let ampm=hours>12?'PM':'AM';
    hours=hours%12;
    hours=hours?hours:12;
    minutes=minutes<10 ? '0'|+minutes:minutes;
    h.style.transform=`rotate(${30*hours+minutes/2})`;
    m.style.transform=`rotate(${6*minutes}deg)`;
    s.style.transform=`rotate(${6*second}deg)`;


    let h1=document.getElementsByClassName('hr1')[0];
    let m1=document.getElementsByClassName('mn1')[0];
    let s1=document.getElementsByClassName('ss1')[0];
    let min1=document.getElementsByClassName('mi1')[0];

    
    h1.style.transform=`rotate(${30*hours+minutes/2})`;
    m1.style.transform=`rotate(${6*minutes}deg)`;
    s1.style.transform=`rotate(${6*second}deg)`;

    document.getElementById('display').innerHTML=d+ " " + monthName[month]+ ",   "+hours+ ":" +minutes+ "  "+ampm;
    document.getElementById('display1').innerHTML=d+ " " + monthName[month]+ ",   "+hours+ ":" +minutes+ "  "+ampm;

}

setInterval(show_clock, 1000);