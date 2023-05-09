

        // set the starting time of the countdown (in seconds)
        let time = 4500; // 1:15hours // 

        // get the timer element
        const timer = document.getElementById("timer");

        // update the timer every second
        const countdown = setInterval(updateTimer, 1000);

        function updateTimer() {
            // calculate the remaining time
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            const remainingTime = `${hours.toString().padStart(1, "0")}:${minutes.toString().padStart(1, "0")}:${seconds.toString().padStart(1, "0")}`;

            // document.getElementById('hours').innerHTML = hours;
            // document.getElementById('minutes').innerHTML = minutes;
            // document.getElementById('seconds').innerHTML = seconds;

            if (time <= 0) {
                // reset the timer when the time is up
                clearInterval(countdown);
                time = 4500; //1:15hours
                countdown = setInterval(updateTimer, 1000);
            } else {
                // update the timer display
                timer.textContent = remainingTime;
                time--;
            }
        }