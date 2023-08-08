import moment from "moment";
import { useState, useEffect } from "react";


function MiniProfileCard () {

    return (
        <div className="flex flex-col justify-center items-center pt-6 pb-6">
            <div class="bg-myBgGreen w-4/12">A</div>
            <div class="w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Hand Sanitizer</h5>
                <p class="font-normal text-center text-gray-700 dark:text-gray-400">Staff Normal</p>
            </div>
        </div>
    )
}

export default MiniProfileCard