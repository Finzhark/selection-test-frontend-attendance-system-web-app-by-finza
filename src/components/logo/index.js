import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'

export default function Logo () {
    const coffeeIcon = <FontAwesomeIcon icon={faMugSaucer} size="xl" color="green"/>

    return (
        <div className="">
            <div className="h-1 w-1 border rounded-full outline-dashed outline-7 outline-green-800 outline-offset-0 flex justify-center items-center p-7">
                {coffeeIcon}
            </div>
        </div>
    )
}