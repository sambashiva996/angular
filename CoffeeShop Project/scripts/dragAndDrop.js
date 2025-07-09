function addDragAndDropHandlers(){
    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropZone = document.getElementById("shoppingcart");
   var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

   var Cart = (function(){
    this.coffees = new Array();
   });

   var Coffee = (function(id, price){
    this.coffeeId = id;
    this.price = price;
   });

   var currentCart = null;

   currentCart = JSON.parse(localStorage.getItem("cart"));
   if(!currentCart){
       createEmptyCart();
    }

    updateShoppingCartUI();

    currentCart.addCoffee = function(coffee){
        currentCart.coffees.push(coffee);
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function(event) {
            event.dataTransfer.effectAllowed = "copy";
            event.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }
    shoppingCartDropZone.addEventListener("dragover", function(event) {
        if (event.preventDefault) {
            event.preventDefault(); // Necessary to allow dropping
        }
        event.dataTransfer.dropEffect = "copy";
        return false;
    }, false);
    shoppingCartDropZone.addEventListener("drop", function(event) {
        if (event.stopPropagation) {
            event.stopPropagation(); // Prevent default behavior
        }
        var coffeeId = event.dataTransfer.getData("Text");
        var coffeeElement = document.getElementById(coffeeId);
        addCoffeeToShoppingCart(coffeeElement, coffeeId);
        event.stopPropagation();
        return false;
    }, false);
    function addCoffeeToShoppingCart(coffeeElement, coffeeId) {
        // var html = coffeeId+" "+coffeeElement.getAttribute("data-price");
        // var liElement = document.createElement("li");
        // liElement.innerHTML = html;
        // shoppingcart.appendChild(liElement);
        var price = coffeeElement.getAttribute("data-price");
        var coffee = new Coffee(coffeeId, price);
        currentCart.addCoffee(coffee);
        updateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function updateShoppingCartUI(){
        shoppingcart.innerHTML = "";
        for (var i = 0; i < currentCart.coffees.length; i++) {
            var liElement = document.createElement("li");
            var coffee = currentCart.coffees[i];
            liElement.innerHTML = coffee.coffeeId + " " + coffee.price;
            var removeButton = document.createElement("button");
            // removeButton.textContent = "Remove";
            removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            removeButton.onclick = function() {
                deleteCoffeeFromCart(coffee);
                updateShoppingCartUI();
            }
            liElement.appendChild(removeButton);
            shoppingcart.appendChild(liElement);
        }
    }
    function deleteCoffeeFromCart(coffee) {
        var index = currentCart.coffees.indexOf(coffee);
        if (index > -1) {
            currentCart.coffees.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(currentCart));
        }
    }
}