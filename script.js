const icecream={
    vennila:{
        flavour:"vennila",
        price:40,
        quantity:10
    },
    stawberry:{
        flavour:"strawberry",
        price:50,
        quantity:15  
    },
    butterscotch:{
        flavour:"butterscotch",
        price:70,
        quantity:20
    }
}
icecream.chocolate={flavour:"chocolate",price:100,quantity:30}
console.log(icecream)
let totalquantity=icecream.vennila.quantity+icecream.stawberry.quantity+icecream.butterscotch.quantity+icecream.chocolate.quantity;
console.log(totalquantity)
let totalcost=icecream.vennila.price+icecream.stawberry.price+icecream.butterscotch.price+icecream.chocolate.price;
console.log(totalcost)


