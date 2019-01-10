import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange = e => {
        this.setState({userInput: e.target.value});
    }

    solveArray = userInput => {
        const { evenArray, oddArray } = this.state;
        let odd = oddArray;
        let even = evenArray;
        userInput.split(',').filter(e => e % 2 === 0 ? even.push(parseInt(e)) : odd.push(parseInt(e)));
        this.setState({evenArray: even, oddArray: odd, userInput: ""});
    }

    render() {
        const { userInput, evenArray, oddArray } = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e)}></input>
                <button className="confirmationButton" onClick={() => {this.solveArray(userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(oddArray)}</span>
            </div>
        );
    }
}

export default EvenAndOdd;