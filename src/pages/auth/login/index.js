import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

function LoginPage () {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="xs" color="chocolate"/>
    const emailIconDark = <FontAwesomeIcon icon={faEnvelope} size="xs" color="white"/>
    const passwordIcon = <FontAwesomeIcon icon={faKey} size="xs" color="chocolate"/>

    const [isHidden, setIsHidden] = useState(true)

    // const onButtonHide = () => {
    //     setIsHidden(!isHidden)    
    // }

    return (
        <div>
            <div class='flex flex-col justify-center items-center h-screen overflow-y-scroll transition-all duration-2000 ease-in delay-500'>
                <h2 className='text-3xl font-medium text-green-700 mb-6 dark:text-white'>Login</h2>


                <form>
                    <div class="mb-6">
                        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">{emailIcon}</div>
                            <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" placeholder="name@domain.tld"/>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-green-700 dark:text-white text-left">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">{emailIcon}</div>
                            <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-stone-600 dark:border-stone-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-300 dark:focus:border-stone-500" placeholder="password" required/>
                        </div>
                        <label for="remember" class="text-sm font-medium text-green-700 dark:text-gray-300">Forget password? </label>
                    </div>

                    <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>

                    <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Green</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage