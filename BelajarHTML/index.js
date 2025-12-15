const carts = [
  { product: { name: "Notebook", price: 50000 }, qty: 2 },
  { product: { name: "Pen", price: 30000 }, qty: 6 },
  { product: { name: "Bag", price: 150000 }, qty: 1 },
];

const newItem = {
  product: { name: "Sticker", price: 20000 },
  qty: 10
};
const labelWidth = 10;
const labelHeight = 4
const rectangleArea = (width, height) =>  width * height;
const labelArea = rectangleArea (labelWidth,labelHeight)

// console.log(rectangleArea(10,4));

const calcSubtotals = (datas) => {
    const newData = []
    
    datas.forEach(element => {
        newData.push(element.product)
    });
    console.log(newData);
    console.log(datas);
}

const addItem = (cart, newItem) => {
    const addNewItem = [...cart, newItem]
    return addNewItem
}

const cartCalculator = (carts) => {
    let totalItem = 0
    let totalPrice = 0
    let allItem = []
    carts.forEach(element => {
        if ((element.qty) < 0 || typeof(element.qty) !== "number"){
            console.log("Quantity under 0");
        } else if ((element.product.price < 0) || typeof(element.qty) !== "number"){
            console.log("Price below zero, please fix");
        }
        totalItem += element.qty
        totalPrice += element.product.price
        allItem.push(element.product)
       
    });
    return {
        labelArea: labelArea,
        items: allItem,
        totalQty: totalItem,
        totalPrice: totalPrice,
    }
}

console.log(cartCalculator(addItem(carts, newItem)));
// console.log(addItem(carts,newItem));



