import { Component } from "react";
import CashList from "./cash";
import "./index.css";

const denominationList = [
    {
        id: 1,
        cash: 50,
    },
    {
        id: 2,
        cash: 100,
    },
    {
        id: 3,
        cash: 200,
    },
    {
        id: 4,
        cash: 500,
    },
]

class CashWithdrawal extends Component {

    state = { remainingAmount: 2000 };

    clickedButton = (amount) => {
        const { remainingAmount } = this.state;
        const cashAfterWithdrawal = remainingAmount - amount;
        if (cashAfterWithdrawal >= 0) {
            this.setState(prevState => ({ remainingAmount: prevState.remainingAmount - amount }))
        }
    }

    render() {

        const { remainingAmount } = this.state;

        return (
            <div className="cash-withdrawal-bg">
                <div className="cash-withdrawal-card">
                    <div className="cash-name-container">
                        <div className="cash-name-icon-container">
                            <h1 className="cash-name-icon">S</h1>
                        </div>
                        <h1 className="cash-name">Sarah Williams</h1>
                    </div>
                    <div className="cash-balance-container">
                        <h2 className="cash-your-balance-text">Your Balance</h2>
                        <div className="cash-in-rupees-container">
                            <h1 className="cash-in-rupees">{ remainingAmount }</h1>
                            <p className="cash-in-rupees-text">In Rupees</p>
                        </div>
                    </div>
                    <h1 className="cash-withdraw-heading">Withdraw</h1>
                    <h3 className="cash-choose-text">CHOOSE SUM (IN RUPEES)</h3>
                    <ul className="cash-list-main-container">
                        {denominationList.map(eachItem => (
                            <CashList eachItem={eachItem} key={eachItem.id} clickedButton={this.clickedButton} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CashWithdrawal;

