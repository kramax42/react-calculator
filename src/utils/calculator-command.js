export class Calculator {
  execute(command) {
    this.value = command.execute();
    return this.value;
  }
}

export class CalculatorCommand {
  constructor(leftOperand, rightOperand) {
    if (this.constructor === CalculatorCommand) {
      throw new Error(
        "Abstract class 'CalculatorCommand' can't be instantiated.",
      );
    }
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
  }

  execute() {
    throw new Error('CalculatorCommand.execute() is not implemented', this);
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
    return this.leftOperand ** this.rightOperand;
  }
}

export class ModCommand extends CalculatorCommand {
  execute() {
    return this.leftOperand % this.rightOperand;
  }
}
