const yDate = new Date("2016-10-30T02:10:26"),
music = ['ido', 'noinaycoanh', 'nguoiamphu','nhungbuctranhmau'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yDate.getDate()>9)?yDate.getDate():"0"+yDate.getDate()}-${(yDate.getMonth()>8)?(yDate.getMonth()+1):"0"+(yDate.getMonth()+1)}-${yDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);