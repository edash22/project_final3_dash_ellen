// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {

}

function updateOrderMsg() {
    var nameValue = document.getElementById("name").value;
    var itemValue = document.getElementById("items").value;
    var qtyValue = document.getElementById("quantity").value;

    // parse out price information from itemValue; create item string
    var price = "tbd";
    var item = "";
    if (itemValue != "") {
        var itemStrings = itemValue.split(" ");
        var price = parseFloat(itemStrings[itemStrings.length - 1]);
        for (i=0; i< itemStrings.length -1; i++) {
            item += itemStrings[i] + " ";
        }
    }

    // convert quantity to an integer
    var qty = -1;
    if (qtyValue != "") {
        var qty = parseInt(qtyValue);
    }

    var orderMsg = "";
    if (nameValue != "") {
        orderMsg += nameValue + ", your";
    }
    else {
        orderMsg = "Your";
    }

    if (itemValue != "") {
        if (qty > 0) {
            orderMsg += " order consists of " + 
                         qty + " " +
                         item + 
                         "for a total of $" + 
                         (qty * price).toFixed(2);
        }
        else {
            orderMsg += " order currently contains no items. Please indicate how many.";
        }
    }

    document.getElementById("order-msg").innerHTML = orderMsg;

    console.log(orderMsg);
}

/******************************
*  Event Listeners
******************************/

// Items: Name field, Items field, Quantity field
// Trigger: change
// Action: Modify the order message

var nameField = document.getElementById("name");
nameField.addEventListener("input", updateOrderMsg);

var itemField = document.getElementById("items");
itemField.addEventListener("input", updateOrderMsg);

var qtyField = document.getElementById("quantity");
qtyField.addEventListener("input", updateOrderMsg);

