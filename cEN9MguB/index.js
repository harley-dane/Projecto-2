//imports the items array
import { menuArray } from './data.js'

// random consts
const menuItems = document.getElementById('menu-items')
const paymentModal = document.getElementById('payment-modal')
const boughtItems = document.getElementById('bought-items')

const submitOrderBtn = document.getElementById('submit-order-btn')
const userDetailsModal = document.getElementById('user-details-modal')


document.addEventListener('click', function(e) {
// add items, taking id from click and adds it to array
    if (e.target.dataset.addPizza) {
        addItemToBoughtItemsArray(e.target.dataset.addPizza)
    }
    
    else if (e.target.dataset.addHamburger) {
        addItemToBoughtItemsArray(e.target.dataset.addHamburger)
    }
    
    else if (e.target.dataset.addBeer) {
        addItemToBoughtItemsArray(e.target.dataset.addBeer)
    }

// removes items, taking id from click and removes it from array
    else if (e.target.dataset.removePizza) {
        removeItemFromBoughtItemsArray(e.target.dataset.removePizza)
    }
    
    else if (e.target.dataset.removeHamburger) {
        removeItemFromBoughtItemsArray(e.target.dataset.removeHamburger)
    }
    
    else if (e.target.dataset.removeBeer) {
        removeItemFromBoughtItemsArray(e.target.dataset.removeBeer)
    }
})
//can make function later then here make it neater
submitOrderBtn.addEventListener('click', function() {
    userDetailsModal.style.display = 'flex'
})

const payBtn = document.getElementById('pay-btn')

//renders the whole starting page to the screen
let foodItems = ''
function createMenuScreen() {
    menuArray.map(function(item) {
    
    foodItems += `
        <div class="menu-item">
            <h1 class="item-emoji">${item.emoji}</h1>
            <div class="food-item-details">
                <h2 class="item-name">${item.name}</h2>
                    <p class="item-ingredients">${item.ingredients}</p>
                <h4 class="item-price">$${item.price}</h4>
            </div>
            <div>
                <p class="add-item" data-add-${item.name}="${item.id}">+</p>
            </div>
        </div>
        <div class="line"></div>`
    })
    
    menuItems.innerHTML = foodItems
}
// renders
createMenuScreen()



// adds selected item to payment modal

let boughtItemsArray = []

function addItemToBoughtItemsArray(itemId) {
    const targetItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    
    boughtItemsArray.push(targetItem)
    
    renderBoughtItems(boughtItemsArray)
}

// removes selected item from payment modal

function removeItemFromBoughtItemsArray(itemId) {
    const targetItem = menuArray.filter(function(item) {
        return item.id == itemId
    })[0]
    
    if (boughtItemsArray.length > 1) {
        boughtItemsArray.splice(JSON.parse(itemId), 1)
    } else {
        boughtItemsArray.pop()
        paymentModal.style.display = 'none'
        totalPriceNumber.value = ''
    }
    
    
    renderBoughtItems(boughtItemsArray)
}

const totalPriceNumber = document.getElementById('total-price-number')

// Adding item to the payment
function renderBoughtItems(array) {
    
    let itemsHTML = []
    let totalPrice = 0
    let index = 0
    array.forEach(function(item) {
        
        totalPrice += item.price
        totalPriceNumber.textContent = '$' + totalPrice

        itemsHTML.push(`
        <div class="food-items" id="${index}">
            <div class="food-item">
                <h3 class="paid-item-name">${item.name}</h3>
                <button class="remove-btn" data-remove-${item.name}="${item.id}">REMOVE</button>
                <h4 class="paid-item-price">$${item.price}<h4>
            </div>
            
        </div>
        `)
    index += 1

    })

    boughtItems.innerHTML = itemsHTML.join('')
    // makes the payent modal visible
    paymentModal.style.display = 'flex'
}

// makes it so the "required" status will work on the submit button
const userDetailForm = document.getElementById('user-detail-form')

userDetailForm.addEventListener('submit', function(e) {
    e.preventDefault()

    // removes the payment modal, creates the scare message, renders thank you message
    // function calls and setTimeout
    manageDisplays()
    setTimeout(scareMessage, 2000)
    setTimeout(scareText2Display, 4000)
    setTimeout(scareText3Display, 6000)
    setTimeout(thankYouMessageDisplay, 9000)
    
})


const scareMessageDiv = document.getElementById('scare-message-div')
const scareText1 = document.getElementById('scare-text1')
const scareText2 = document.getElementById('scare-text2')
const scareText3 = document.getElementById('scare-text3')

function manageDisplays() {
    userDetailsModal.style.display = 'none'
    paymentModal.style.display = 'none'
}
    
    // const manageDisplaysTimeout = manageDisplays

function scareMessage() {
    scareMessageDiv.style.display = 'flex'
    scareText1.style.display = 'block'
}
    
function scareText2Display() {
    scareText1.style.display = 'none'
    scareText2.style.display = 'block'
}
    
function scareText3Display() {
    scareText2.style.display = 'none'
    scareText3.style.display = 'block'
}


const thankYouMessage = document.getElementById('thank-you-message')
const userName = document.getElementById('name').value

function thankYouMessageDisplay() {
    scareMessageDiv.style.display = 'none'
    scareText1.style.display = 'none'
    scareText2.style.display = 'none'
    scareText3.style.display = 'none'
    thankYouMessage.textContent = `Thanks, ${userName}! Your order is on its way!`
    thankYouMessage.style.display = 'block'
}

// slide show for headr image
var i = 0;
var images = [];
var slideTime = 2000; // 3 seconds

images[0] = 'Buger.1';
images[1] = 'Pitzza-2.jpg';
images[2] = 'bear-3.jpg';

function changePicture() {
    document.body. style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}



