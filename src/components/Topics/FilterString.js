import React, { Component } from "react";

class FilterStrings extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ["Hello", "my", "name", "is", "Eric", "and", "I", "like", "to", "code"],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange = e => {
        this.setState({userInput: e.target.value});
    }

    newStr = str => {
        const { unfilteredArray } = this.state;
        let unfilteredCopy = unfilteredArray;
        let newArr = [];
        unfilteredCopy.filter(e => e.toString().includes(str) ? newArr.push(e) : e)
        this.setState({filteredArray: newArr, userInput: ""})
    }

    render() {
        const { unfilteredArray, userInput, filteredArray } = this.state;
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e)}></input>
                <button className="confirmationButton" onClick={() => {this.newStr(userInput)}}> Filter </button>
                <span className="resultsBox filterStringRB">{JSON.stringify(filteredArray, null, 10)}</span>
            </div>
        );
    }
}

export default FilterStrings;