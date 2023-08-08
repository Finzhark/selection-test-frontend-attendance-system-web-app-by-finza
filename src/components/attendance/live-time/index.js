import moment from "moment";
import { useState, useEffect } from "react";


function LiveTimeCard () {
    const [currentTime, setCurrentTime] = useState()

    const clockFormat = "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    const dateFormat = "dddd, DD MMMM YYYY"
    const clock = moment().format(clockFormat)
    const date = moment().format(dateFormat)

    useEffect(() => {
        const interval = setInterval(() => {
          let time = new Date().toLocaleTimeString();
          setCurrentTime(time);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div class="w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{currentTime}</h5>
                <p class="font-normal text-center text-gray-700 dark:text-gray-400">{date}</p>
            </div>
        </div>
    )
}

export default LiveTimeCard