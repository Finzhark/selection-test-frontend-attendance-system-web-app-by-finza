import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router'


export default function HomePage () {
    const navigate = useNavigate();

    const coffeeIcon = <FontAwesomeIcon icon={faMugSaucer} size="xl" color="green"/>

    const [isHidden, setIsHidden] = useState(false)

    const onButtonHide = () => {
        setIsHidden(!isHidden)    
    }

    const onButtonNavigate = () => {
        setIsHidden(true);

        setTimeout(() => {
        navigate('/login');
        }, 300);
    }

    const onClickHandler = () => {
        onButtonHide()
        onButtonNavigate()
    };

    // const plate = () => {isHidden ? 'opacity-0' : 'opacity-50'}

    return (
        <div className={`flex justify-center items-center flex-col h-screen transition-all duration-10000 ${isHidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} `}>
            
            <div class={`w-96 h-96 bg-none bg-stone-500 opacity-40 rounded-full absolute transition-all duration-500 ${isHidden ? 'scale-0' : 'scale-100'}`}>  </div>

            <div className={`h-1 w-1 z-10 hover:animate-waving-hand border rounded-full bg-stone-300 outline-7 outline-green-800 outline-offset-0 flex justify-center items-center p-7 transition-all duration-500 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
                {coffeeIcon}
            </div>
            <h1 className={`z-10 justify-center items-center mt-5 mb-5 text-3xl font-bold text-green-600 transition-all duration-500 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
            Welcome to Cozy Office
            </h1>

            <button
            onClick={onClickHandler}
            type="submit"
            className={`z-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-500 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
            >
            Click here to record attendance
            </button>
        </div>
    )
}