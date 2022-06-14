import { useParams ,Link} from "react-router-dom"
import PedestrianIcon from "~icons/carbon/pedestrian"
import styleConstants from "@utils/styleConstants"
import { useIntl } from "react-intl"
import { useDispatch } from "react-redux"
import { setName } from "@store/userStore"

function Component() {
    const { name } = useParams()
    const intl = useIntl()
    const dispatch = useDispatch()

    return (
    <div className="flex flex-col items-center p-10">
        <PedestrianIcon className="text-4xl opacity-75 dark:text-white" />
        <h5 className="text-center dark:text-white mt-2">
            {`${intl.messages.hi} ${name}`}
        </h5>
        <p className="text-center text-sm mt-2 opacity-75 dark:text-white">{intl.messages.dynamicRoute}</p>
        <Link onClick={resetName} to="/" className={styleConstants.buttonClass}>Back</Link>
    </div>
    )

    function resetName() {
        dispatch(setName(""))
    }
}

export default Component