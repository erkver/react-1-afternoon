import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {
                    make: "VW",
                    model: "GTI",
                    year: 2017,
                    color: "white"
                }, 
                {
                    make: "Dodge",
                    model: "Ram",
                    year: 2014,
                    bodyStyle: "truck"
                },
                {
                    make: "Toyota",
                    model: "Rav",
                    year: 2007,
                    wheels: 4,
                    color: "blue"
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange = e => {
        this.setState({userInput: e.target.value});
    }

    newObj = key => {
        const { unfilteredArray } = this.state;
        let unfiltered = unfilteredArray;
        let arr = [];
        unfiltered.map(e => e.hasOwnProperty(key) ? arr.push(e) : arr);
        this.setState({filteredArray: arr, userInput: ""});
    }

    render() {
        const { filteredArray, unfilteredArray, userInput } = this.state;
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e)}></input>
                <button className="confirmationButton" onClick={() => this.newObj(userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray, null, 10)}</span>
            </div>
        );
    }
}

export default FilterObject;
