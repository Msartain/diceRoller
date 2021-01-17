import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
        };

    constructor() {
        super();
        this.state = {
            num1: 'one',
            num2: 'one',
            isRolling: false,
        }
    }


    roll = () =>  {
        let die1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        let die2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({num1: die1, num2: die2, isRolling: true});

        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000)
    }

    render() {
        return(
            <div className="RollDice">
                <div className="dice-container">
                    <Die num={this.state.num1} rolling={this.state.isRolling}/>
                    <Die num={this.state.num2} rolling={this.state.isRolling}/>
                </div>
                <button 
                    onClick={this.roll}
                    disabled={this.isRolling}>
                        {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;
