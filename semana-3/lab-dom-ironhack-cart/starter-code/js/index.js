var items = document.getElementsByClassName("unit_price");
console.log(items);
var inputs = document.getElementsByTagName("input");
console.log(inputs)
var total = 0;


function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  for(var i = 0; i < items.length; i++){
    let u = parseInt(items[i].innerText.slice(1));
    let qty = parseInt(inputs[i].value);
    total = total + ( u * qty)
    console.log(u, qty)
  }
  console.log(total);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};