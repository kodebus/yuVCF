/* eslint-disable radix */
import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    firstNumber;
    secondNumber;
    result;

    handleFirstNumberChange(event) {
        this.firstNumber = event.target.value;
    }

    handleSecondNumberChange(event) {
        this.secondNumber = event.target.value;
    }

    handleAddition() {
        // eslint-disable-next-line radix
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }

    handleSubtraction() {
        this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }

    handleMultiplication() {
        this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }

    handleDivision() {
        this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }

    handleClear() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.result = '';
    }

}