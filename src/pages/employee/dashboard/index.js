// import { useSelector, useDispatch } from "react-redux";

import ClockInButton from '../../../components/attendance/clock-in'
import LiveTimeCard from '../../../components/attendance/live-time'
import MiniProfileCard from '../../../components/attendance/mini-profile-card/index'

function EmployeeDashboard () {
    // const dispatch = useDispatch()

    return (
        <div className='h-screen'>
            <MiniProfileCard/>
            <LiveTimeCard/>

            <div className='flex flex-row items-center justify-center pt-6 pb-6 gap-6'>
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Clock In
                </button>
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Clock Out 
                </button>
            </div>

            <div>
                <div class="flex flex-col justify-center items-center relative">
                    <table class="w-9/12 text-sm text-left text-gray-500 dark:text-gray-400 shadow-md">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 rounded-tl-lg">
                                    Clock In
                                </th>
                                <th scope="col" class="px-6 py-3 rounded-tr-lg">
                                    Clock Out
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4 rounded-bl-lg">
                                    Silver
                                </td>
                                <td class="px-6 py-4 rounded-br-lg">
                                    Silver
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default EmployeeDashboard