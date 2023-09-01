import "./index.css";

const CashList = (props) => {

    const { eachItem, clickedButton } = props;
    const { cash } = eachItem;

    const decreaseAmount = () => {
        clickedButton(cash);
    }

    return (
        <li className="list-container-cash">
            <button className="cash-button" type="button" onClick={decreaseAmount}>{ cash }</button>
        </li>
    );
}

export default CashList;

