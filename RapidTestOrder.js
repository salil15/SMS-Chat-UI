class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.CHOICE;
        aReturn.push("Welcome to Tim Hortons.");
        aReturn.push("Would you like Coffee or Tea today?");
        return aReturn;
      },
      CHOICE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("What size would you like? We have small, medium, and large.");
        return aReturn;
      },
      SIZE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPING;
        aReturn.push("What toppings would you like? We have whipped cream and chocolate shavings.");
        return aReturn;
      },
      TOPPING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.UPSELL;
        aReturn.push("Would you like to add a cream cheese bagel to your order for only $2.50? Yes or No");
        return aReturn;
      },
      UPSELL: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push("You've added a cream cheese bagel to your order.");
        }
        aReturn.push("Thank you for your order at Tim Hortons.");
        aReturn.push("Please proceed to the pickup counter.");
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder };
