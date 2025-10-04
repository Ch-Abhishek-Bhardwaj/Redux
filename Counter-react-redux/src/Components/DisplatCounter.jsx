
import { useSelector } from "react-redux";
const DisplatCounter = () => {
    const counter = useSelector((store)=>store.counter);
    return (
        <div>
            <p className="lead mb-4">
                Counter Current Value:
                </p> {counter}
        </div>
    )
}
export default DisplatCounter;