

let moneyInserted = 0
let change = 0

let totalPaid = 0

let sodas = [{ name: 'Coke', price: 1.30 },
             { name: 'Moxie', price: 1.5 },
             { name:'Fresca', price:3.2 },
             { name: 'Sprite', price: 2.25 }]


const currency_one = 1
const currency_five = 5
const currency_nickel = 0.05
const currency_dime = 0.1
const currency_quarter = 0.25

function getTotal() {
    let currency_ones = Number(document.getElementById('Ones').value)  
    let currency_fives = Number(document.getElementById('Fives').value)
    let currency_nickels = Number(document.getElementById('Nickels').value)
    let currency_dimes = Number(document.getElementById('Dimes').value)
    let currency_quarters = Number(document.getElementById('Quarters').value)


    if (currency_ones > 0) {   
        currency_ones = currency_one * currency_ones   
    }
    if (currency_fives > 0) {
        currency_fives = currency_five * currency_fives
    }
    if (currency_dimes > 0) {
        currency_dimes = currency_dime * currency_dimes
    }
    if (currency_quarters > 0) {
        currency_quarters = currency_quarter * currency_quarters
    }
    if (currency_nickels > 0) {
        currency_nickels = currency_nickel * currency_nickels
    }

    totalPaid = currency_nickels + currency_quarters + currency_dimes +
        currency_fives + currency_ones

    return totalPaid.toFixed(2) 
}

function updatingMoney() {
    moneyInserted = getTotal()   
    document.getElementById('paid').innerHTML = moneyInserted
}

function clearMoney() {
    moneyInserted = 0
    document.getElementById('paid').innerHTML = moneyInserted

}

function clearForm() {
    document.getElementById('Ones').value = 0
    document.getElementById('Dimes').value = 0
    document.getElementById('Nickels').value = 0
    document.getElementById('Fives').value = 0
    document.getElementById('Quarters').value = 0

}

function cancel() {
    let a = getTotal()
    clearForm()
    clearMoney()

    if (a != 0) {
        document.getElementById('info').innerHTML = 'Transcation Cancalled. ' + a + ' has been returned to the coin return'
    }
    else
        document.getElementById('info').innerHTML = 'Insert money first. Select a soda'

}

function buySoda(index) {

    let selected = sodas[index]

    if(getTotal()<selected.price){
        document.getElementById('info').innerHTML='insufficient balance'
        clearForm()
        clearMoney()
        totalPaid=0
    }
    if(getTotal()>selected.price){
        document.getElementById('info').innerHTML='Here is your change: ' + String(getTotal()-selected.price) 
        clearForm()
        clearMoney()
        totalPaid=0
    }
}




