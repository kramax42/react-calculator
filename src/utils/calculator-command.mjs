export class Calculator {
    execute(command) {
        this.value = command.execute();
        return this.value;
    }
}

// abstract class in javasscript
// https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript
export class CalculatorCommand {
    constructor(leftOperand, rightOperand) {
        if (this.constructor == CalculatorCommand) {
            throw new Error("Abstract class 'CalculatorCommand' can't be instantiated.");
        }
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
    }

    execute() {
        throw new Error('CalculatorCommand.execute() is not implemented');
    }
}

export class AddCommand extends CalculatorCommand {
    execute() {
        return this.leftOperand + this.rightOperand;
    }
}

export class SubtractCommand extends CalculatorCommand {
    execute() {
        return this.leftOperand - this.rightOperand;
    }
}

export class MultiplyCommand extends CalculatorCommand {
    execute() {
        return this.leftOperand * this.rightOperand;
    }
}

export class DivideCommand extends CalculatorCommand {
    execute() {
        if (this.rightOperand === 0) {
            return 0;
        }
        return this.leftOperand / this.rightOperand;
    }
}

export class PowerCommand extends CalculatorCommand {
    execute() {
        if(Number.isInteger(this.leftOperand) && Number.isInteger(this.rightOperand)) {
            return Number(BigInt(this.leftOperand) ** BigInt(this.rightOperand));
        }
        return this.leftOperand ** this.rightOperand;
    }
}

export class ModCommand extends CalculatorCommand {
    execute() {
        return this.leftOperand % this.rightOperand;
    }
}

