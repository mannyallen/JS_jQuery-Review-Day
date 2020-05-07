let slicesOfBread = 10;
let slicesOfCheese = 5;

function sandwichCalc(slicesOfBread) {
  if(slicesOfBread%2 == 0 && slicesOfCheese%1 == 0) {
    console.log(slicesOfBread/2);
  } else if(slicesOfBread%2 != 0 && slicesOfCheese%2 == 0){
    console.log(`You will have ${slicesOfBread%2} of bread left over, and ${slicesOfCheese%1} left over`)
  }
let pizza = [mozzarella, pineapple, chicken, basil, onions, tomatoes]

function advertForPizza (pizza){
    return(console.log(`This pizza mouth-watering pizza comes with zesty ${pizza.chicken}, ${pizza.pineapple}, ${pizza.basil}, ${pizza.onions}, and ${pizza.tomatoes} topped on our ripe ${pizza.mozzarella}. Get yours today!`));
}
