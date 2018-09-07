import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterStrings from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <div>
                    <EvenAndOdd />
                </div>
                <div>
                    <FilterObject />
                </div>
                <div>
                    <FilterStrings />
                </div>
                <div>
                    <Palindrome />
                </div>
                <div>
                    <Sum />
                </div>
            </div>
        );
    }
}

export default TopicBrowser;