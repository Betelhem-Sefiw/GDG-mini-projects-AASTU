document.getElementById("check").onclick= function(){
    let budget=prompt("Enter your budget amount: ");
budget= Number(budget);
let itemPrice= prompt(" Enter item price: ");
itemPrice= Number(itemPrice);
savings=prompt("Enter savings(opetional) if none press 0: ");
savings= Number(savings);
let total= savings + itemPrice;

if(budget>=total){
    console.log("you can buy the item");
    alert("you can buy the item");
}
else{
    console.log("you can't buy the item ");
    alert("you can't buy the item");
}
}

