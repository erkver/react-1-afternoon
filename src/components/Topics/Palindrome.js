import React, { Component } from "react";

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.isPalindrome = this.isPalindrome.bind(this);
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    isPalindrome(shape) {
        let status = false;
        let reverseShape = shape.split('').reverse().join('');
        shape === reverseShape ? status = true : status;
        this.setState({palindrome: status, userInput:""})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.handleChange(e)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}> Check </button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        );
    }
}

export default Palindrome;