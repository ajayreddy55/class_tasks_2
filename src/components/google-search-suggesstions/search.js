import "./index.css";
import {FiArrowUpLeft} from "react-icons/fi"

const GoogleSearchList = (props) => {

    const { eachResult, buttonClickValue } = props;
    const { result } = eachResult;

    const changeTheValue = () => {
        buttonClickValue(result);
    }

    return (
        <li className="google-search-list-item">
            <p className="google-search-result-text">{result}</p>
            <button className="google-search-arrow-button" type="button" onClick={changeTheValue}>
                <FiArrowUpLeft className="google-arrow-icon" />
            </button>
        </li>
    );
} 

export default GoogleSearchList;

