let pizza = [
  "mozzarella",
  "asiago",
  "parmesean",
  "chicken",
  "pineapple",
  "tomatoes",
  "marinara",
];

function ucPizza() {
  return pizza.map(function (ingredients) {
    return ingredients.toUpperCase();
  });
}
