import { useParams ,Link} from "react-router-dom"
import PedestrianIcon from "~icons/carbon/pedestrian"
import styleConstants from "@utils/styleConstants"
import { FormattedMessage } from "react-intl"

function Component() {
    const { name } = useParams()
    return (
    <div className="flex flex-col items-center p-10">
        <PedestrianIcon className="text-4xl opacity-75 dark:text-white" />
        <h5 className="text-center dark:text-white mt-2">
            <FormattedMessage
            id="hi"
            defaultMessage="Hi {changingName}"
            values={{changingName: name}}
            />
        </h5>
        <p className="text-center text-sm mt-2 opacity-75 dark:text-white">Demo of dynamic route</p>
        <Link to="/" className={styleConstants.buttonClass}>Back</Link>
    </div>
    )
}

export default Component