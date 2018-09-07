import React, { Component } from "react";

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.handleChange = this.handleChange1.bind(this);
        this.handleChange = this.handleChange2.bind(this);
        this.total = this.total.bind(this);
    }

    handleChange1(e) {
        this.setState({number1: parseInt(e.target.value, 10)});
    }

    handleChange2(e) {
        this.setState({number2: parseInt(e.target.value, 10)});
    }

    total(num1, num2) {
        const { number1 } = this.state;
        const { number2 } = this.state;
        let finalSum = number1 + number2;
        // let finalSum = number1 + number2;
        this.setState({sum: finalSum, number1: 0, number2: 0})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.handleChange1(e)}></input>
                <input className="inputLine" onChange={e => this.handleChange2(e)}></input>
                <button className="confirmationButton" onClick={() => this.total(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum, null, 10)}</span>
            </div>
        );
    }
}

export default Sum;