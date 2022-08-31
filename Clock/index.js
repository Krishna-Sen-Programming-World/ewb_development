var sec=document.getElementById('sec');
var min=document.getElementById('min');
var hr=document.getElementById('hr');
var hrupdate=document.getElementById('hrupdate');
var minupdate=document.getElementById('minupdate');
var secupdate=document.getElementById('secupdate');
var dayupdate=document.getElementById('dayupdate');
setInterval(() => {
    var date=new Date();
    var secr=date.getSeconds();
    var minr=date.getMinutes();
    var hrr=date.getHours();
    var hrrotation=(30*hrr)+(0.5*minr);
    var minrotation=(6*minr)+(0.1*secr);
    var secrotation=(6*secr);
    sec.style.transform=`rotate(${secrotation}deg)`;
    min.style.transform=`rotate(${minrotation}deg)`;
    hr.style.transform=`rotate(${hrrotation}deg)`;
    var hrinformat=hrr<13?(hrr):(hrr-12);
    hrupdate.innerHTML=hrinformat<10?' 0'+hrinformat+' ':' '+hrinformat+' ';
    minupdate.innerHTML=minr<10?' 0'+minr+' ':minr+' ';
    secupdate.innerHTML=secr<10?' 0'+secr+' ':' '+secr;
    dayupdate.innerHTML=hrr>11?'&nbsp;PM':'&nbsp; AM';
}, 100);