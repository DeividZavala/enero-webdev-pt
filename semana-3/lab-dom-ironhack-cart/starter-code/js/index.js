var items = document.getElementsByClassName("unit_price");

var inputs = document.getElementsByTagName("input");

// otro approach
var containers = document.getElementsByClassName("item-container");

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var total = 0;

  //Otro approach
  for(var r = 0; r < containers.length; r++){
    let u = parseInt(containers[r].childNodes[3].firstElementChild.innerText.slice(1));
    let qty = parseInt(containers[r].childNodes[5].childNodes[3].value)
    // agregando total por producto
    containers[r].childNodes[7].firstElementChild.innerText = `$${(u * qty).toFixed(2)}`
  }



  for(var i = 0; i < items.length; i++){
    let u = parseInt(items[i].innerText.slice(1));
    let qty = parseInt(inputs[i].value);
    // en este código falta editar el total por producto
    total = total + ( u * qty)
  }
  // agregando el total al carrito
  document.querySelector("h2").innerText = `Total: $${total.toFixed(2)}`
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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};