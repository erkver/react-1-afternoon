import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.solveArray = this.solveArray.bind(this)
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
    }

    solveArray(userInput) {
        const { evenArray, oddArray } = this.state;
        let odd = oddArray.slice();
        let even = evenArray.slice();
        userInput.split(',').filter(e => e % 2 === 0 ? even.push(parseInt(e)) : odd.push(parseInt(e)));
        this.setState({evenArray: even, oddArray: odd, userInput: ""});
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event)}></input>
                <button className="confirmationButton" onClick={() => {this.solveArray(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}

export default EvenAndOdd;