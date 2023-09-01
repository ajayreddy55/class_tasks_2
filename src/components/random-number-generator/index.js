import { Component } from "react";
import "./index.css";

class RandomNumberGen extends Component {

    state = { randomNum: 0 };

    generateRandomNum = () => {
        const randomNumber = Math.ceil(Math.random() * 100);
        this.setState({ randomNum: randomNumber });
    }

    render() {

        const { randomNum } = this.state;

        return (
            <div className="random-number-bg">
                <div className="random-number-card shadow">
                    <h1 className="random-number-heading">Random Number</h1>
                    <p className="random-number-text">Generate a random number in the range of 0 to 100</p>
                    <button className="btn btn-primary mt-3 mb-3" type="button" onClick={this.generateRandomNum}>Generate</button>
                    <p className="generated-random-number">{ randomNum }</p>
                </div>
            </div>
        );
    }
}

export default RandomNumberGen;

