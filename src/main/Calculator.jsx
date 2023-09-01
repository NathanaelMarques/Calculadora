import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'
class Calculator extends Component {

    state = {
        value: '0',
        valueBefore: '0',
        operation: null,
        isThenewValue: false
    }
    clearMemory() {
        this.setState({ value: '0' })
        this.setState({ valueBefore: '0' })
        this.setState({ operation: null })
        this.setState({ isThenewValue: false })
    }

    setOperation(operation) {
        this.setState({ valueBefore: operation !== '=' ? this.state.value : this.state.valueBefore })
        this.setState({ value: '0' })

        switch (operation) {
            case '+':
                this.setState({ operation: function (a, b) { return a + b } })
                break
            case '-':
                this.setState({ operation: function (a, b) { return a - b } })
                break
            case '*':
                this.setState({ operation: function (a, b) { return a * b } })
                break
            case '/':
                this.setState({ operation: function (a, b) { return a / b } })
                break
            case '=':
                this.setState({ isThenewValue: true })
                this.setState({ value: this.state.operation != null ? this.state.operation(+this.state.valueBefore, +this.state.value) : this.state.value })
                break
            default:
                break
        }
    }

    addDigit(n) {
        if (this.state.isThenewValue === true) {
            this.clearMemory()
            this.setState({ value: n })
            return
        }
        if (n === '.' && this.state.value.toString().includes('.')) {
            return
        }
        this.setState({ value: this.state.value === '0' && n !== '.' ? n : (this.state.value + n) })
    }



    render() {
        return (
            <div className="calculator">
                <Display value={this.state.value} />
                <Button label='AC' click={this.clearMemory.bind(this)} />
                <Button label='+/-' />
                <Button label='%' />
                <Button operation label='/' click={this.setOperation.bind(this)} />
                <Button label='7' click={this.addDigit.bind(this)} />
                <Button label='8' click={this.addDigit.bind(this)} />
                <Button label='9' click={this.addDigit.bind(this)} />
                <Button operation label='*' click={this.setOperation.bind(this)} />
                <Button label='4' click={this.addDigit.bind(this)} />
                <Button label='5' click={this.addDigit.bind(this)} />
                <Button label='6' click={this.addDigit.bind(this)} />
                <Button operation label='-' click={this.setOperation.bind(this)} />
                <Button label='1' click={this.addDigit.bind(this)} />
                <Button label='2' click={this.addDigit.bind(this)} />
                <Button label='3' click={this.addDigit.bind(this)} />
                <Button operation label='+' click={this.setOperation.bind(this)} />
                <Button double label='0' click={this.addDigit.bind(this)} />
                <Button label='.' click={this.addDigit.bind(this)} />
                <Button operation label='=' click={this.setOperation.bind(this)} />
            </div>
        )
    }
}

export default Calculator