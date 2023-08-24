        const clockStyle = document.getElementsByTagName("h1")[0];
        clockStyle.style.wordSpacing ="20px";
        clockStyle.style.letterSpacing="6px";
        clockStyle.style.fontSize="58px";
        clockStyle.style.fontWeight="500px";
        clockStyle.style.fontFamily="arial";

       
        function mytime(){
            var time = new Date();
            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();
            var am_pm = "AM";

            if(hours === 0){
                hours = 12;
            }
            if (hours > 12){
                hours = hours-12;
                am_pm = "PM";
            }
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var runTime = `${hours}:${minutes}:${seconds} ${am_pm}`;
            document.getElementsByTagName("h1")[0].innerText = runTime;
            setTimeout(mytime,1000);              
        }
        mytime();
   