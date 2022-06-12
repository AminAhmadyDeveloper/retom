import { useParams ,Link} from "react-router-dom"
import PedestrianIcon from "~icons/carbon/pedestrian"

function Component() {
    const { name } = useParams()
    return (
    <div className="flex flex-col items-center p-10">
        <PedestrianIcon className="text-4xl opacity-75 dark:text-white" />
        <h5 className="text-center dark:text-white mt-2">Hi, {name}!</h5>
        <p className="text-center text-sm mt-2 opacity-75 dark:text-white">Demo of dynamic route</p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-1 rounded mt-2">Back</Link>
    </div>
    )
}

export default Component