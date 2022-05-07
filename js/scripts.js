//Business Logic

class Pizza {
  constructor(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
}

Pizza.prototype.costCalculation = () => {
const pizzaCrusts =  ['thin', 'cheese-stuffed', 'new-york', 'chicago'];
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
}else if(this.size)
}
