import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo/index'
import './index.css'
import { useState } from 'react'

export default function HomePage () {
    const coffeeIcon = <FontAwesomeIcon icon={faMugSaucer} size="xl" color="green"/>

    const [isHidden, setIsHidden] = useState(false)

    const onButtonHide = () => {
        setIsHidden(!isHidden)    
    }

    return (
        <div className="flex justify-center items-center flex-col h-screen ">
            <div className={`h-1 w-1 border rounded-full outline-dashed outline-7 outline-green-800 outline-offset-0 flex justify-center items-center p-7 transition-all duration-200 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
                {coffeeIcon}
            </div>
            <h1 className={`justify-center items-center mt-5 mb-5 text-3xl text-green-600 transition-all duration-200 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
            Welcome to Cozy Office
            </h1>
            <button
            onClick={onButtonHide}
            type="submit"
            className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-200 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
            >
            Click here to record attendance
            </button>
        </div>
    )
}