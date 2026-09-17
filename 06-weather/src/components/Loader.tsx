import { Image } from "react-bootstrap";
import loader from "../assets/loader.svg"

const Loader = () => {
    return (
        <Image src={loader} fluid className="py-5 w-25" alt="loader" aria-label="loading" />
    )
}

export default Loader;