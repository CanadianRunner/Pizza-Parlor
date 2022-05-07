//Business Logic

class Pizza {
  constructor(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
}

Pizza.prototype.costCalculation = () => {
const pizzaToppings = ['pepperoni', 'cheese','pineapple', 'bacon', 'mushrooms', 'peppers'];
let startingPrice = 12;
this.toppings.forEach(function(topping) {
  if(pizzaToppings.includes(topping)) {
    startingPrice += 3;
  }
})
if(this.crust === "thin") {
  startingPrice += 2;
}else if(this.crust === "cheese-stuffed") {
  startingPrice += 8;
}else if(this.crust === "new-york") {
  startingPrice  += 2;
}else if(this.crust === "chicago") {
  startingPrice += 7;
}
if(this.size === 'medium') {
  startingPrice += 5;
}else if(this.size === 'large') {
  startingPrice += 6;
}else if(this.size === 'extra-large') {
  startingPrice += 7;
}
return startingPrice;
}

//UI Logic

$(document).ready(function() {
  $('form#customers-order').submit(function(e) {
    e.preventDefault();
    let pizzaCrust = $('#crust').val();
    let pizzaSize = $('#size').val();
    let pizzaToppingsArray = [];
    let pushedToppingsArray = $('input[type=checkbox][name=toppings]:checked').each(function() {let topping = $(this).val();
    pizzaToppingsArray.push(topping);});
    let newPizzaOrder = new Pizza(pizzaToppingsArray, pizzaCrust, pizzaSize);
    let totalCost = newPizzaOrder.costCalculation()


    
  }
}
