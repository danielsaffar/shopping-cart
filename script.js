// an array with all of our cart items
var cart = [];

var updateCart = function () {

var source = $('#store-template').html();
var template = Handlebars.compile(source);


for (i=0; i<cart.length;i++) {
    var newHTML = template(cart[i]);
 $('.shopping-cart').append(newHTML);
  
}}





var clearCart = function () {
  // TODO: finish
}

$('.view-cart').on('click', function () {

	$('.shopping-cart').toggle();
	
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
 console.log("LEt's add Stuff!!")
 var $item = $(this).closest(".item"); 
 var itemData = $item.data();
 console.log(itemData);

 // TODO: get the "item" object from the page
 addItem(itemData);
 updateCart();
});

var addItem = function (item) {
  // TODO: finish
  cart.push(item);
  console.log("item should be pushed by now");
};



// $('.clear-cart').on('click', function () {
//   clearCart();
// });

// update the cart as soon as the page loads!
// updateCart();