import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

function RegisterEmployeePage () {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="xs" color="green"/>
    const passwordIcon = <FontAwesomeIcon icon={faKey} size="xs" color="green"/>

    const [isHidden, setIsHidden] = useState(true)

    // const onButtonHide = () => {
    //     setIsHidden(!isHidden)    
    // }

    return (
        <div className='items-center flex flex-col h-screen'>

                <h2 className='pt-6 text-2xl font-medium text-green-700 mb-6'>Register Employee</h2>

            <div class=''>

                <div class='flex flex-row gap-6'>
                    <form class='flex-1'>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">NIK</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500"/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Fullname</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>


                        <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>


                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Password</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        
                    </form>
                    <form class="flex-1">
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Birthdate</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Join Date</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Gender</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Phone</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>
                        <div class="mb-6">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Salary</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" required/>
                        </div>


                        <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default RegisterEmployeePage