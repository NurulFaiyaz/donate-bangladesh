function getValueById(id){
    return parseFloat(document.getElementById(id).value)
}
function getInnerTextById(id){
    return parseFloat(document.getElementById(id).innerText)
}


// Noakhali Flood Card Section


const donationButton = document.getElementById("donation-btn")

donationButton.addEventListener('click', function(){
    const accountBalance = getInnerTextById("balance")
    const donationAmount = getValueById("donate-amount")
    const donatedAmount = getInnerTextById("donated-amount")

    if(donationAmount <=0 || donationAmount == "" || isNaN(donationAmount)){
        alert("Invalid Input!")
        return;
    }
    if( accountBalance < donationAmount ){
        alert("Insufficient balance.")
    }

    const currentDonatedBalance = donationAmount + donatedAmount;
    const currentAccountBalance = accountBalance - donationAmount

    const donatedAmountElement = document.getElementById("donated-amount")
    donatedAmountElement.innerText = currentDonatedBalance;

    const currentAccountBalanceElement = document.getElementById("balance")
    currentAccountBalanceElement.innerText = currentAccountBalance;

    

// Donation History Section for History Button

    const historyList = document.createElement("div");
    historyList.className = "bg-white border rounded-lg p-5 mb-10";

    historyList.innerHTML=`
    <p class="text-xl font-bold text-gray-600">${donationAmount} Taka is Donated for Flood at Noakhali, Bangladesh</p>
    <p class="text-lg font-bold text-gray-600">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyList, historyContainer.firstChild);

    
});


// Feni Flood Bangladesh

const feniDonationButton = document.getElementById("feni-donation-btn")

feniDonationButton.addEventListener('click', function(){
    const accountBalance = getInnerTextById("balance")
    const donationAmount = getValueById("feni-donation-amount")
    const donatedAmount = getInnerTextById("feni-donated-amount")

    if(donationAmount <=0|| donationAmount == "" || isNaN(donationAmount)){
        alert("Invalid Input!")
        return
    }
    if( accountBalance < donationAmount ){
        alert("Insufficient balance.")
    }

    const currentDonatedBalance = donationAmount + donatedAmount;
    const currentAccountBalance = accountBalance - donationAmount

    const donatedAmountElement = document.getElementById("feni-donated-amount")
    donatedAmountElement.innerText = currentDonatedBalance;

    const currentAccountBalanceElement = document.getElementById("balance")
    currentAccountBalanceElement.innerText = currentAccountBalance;



// Donation History Section for History Button

    const historyList = document.createElement("div");
    historyList.className = "bg-white border rounded-lg p-5 mb-10";

    historyList.innerHTML=`
    <p class="text-xl font-bold text-gray-600">${donationAmount} Taka is Donated for Flood at Feni, Bangladesh</p>
    <p class="text-lg font-bold text-gray-600">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyList, historyContainer.firstChild);

     
});


// Quota Donation Section

const quotaDonationButton = document.getElementById("quota-donation-btn")

quotaDonationButton.addEventListener('click', function(){
    const accountBalance = getInnerTextById("balance")
    const donationAmount = getValueById("quota-donation-amount")
    const donatedAmount = getInnerTextById("quota-donated-amount")

    if(donationAmount <=0|| donationAmount == "" || isNaN(donationAmount)){
        alert("Invalid Input!")
        return
    }
    if( accountBalance < donationAmount ){
        alert("Insufficient balance.")
        return
    }

    const currentDonatedBalance = donationAmount + donatedAmount;
    const currentAccountBalance = accountBalance - donationAmount

    const donatedAmountElement = document.getElementById("quota-donated-amount")
    donatedAmountElement.innerText = currentDonatedBalance;

    const currentAccountBalanceElement = document.getElementById("balance")
    currentAccountBalanceElement.innerText = currentAccountBalance;



// Donation History Section for History Button

    const historyList = document.createElement("div");
    historyList.className = "bg-white border rounded-lg p-5 mb-10";

    historyList.innerHTML=`
    <p class="text-xl font-bold text-gray-600">${donationAmount} Taka is Donated for Quota Movement, Bangladesh</p>
    <p class="text-lg font-bold text-gray-600">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyList, historyContainer.firstChild);

     
});




// Special Button Donation & Donation History

const donationMainBtn = document.getElementById("donation-main-btn")
const historyMainBtn = document.getElementById("history-main-btn")

// History

historyMainBtn.addEventListener('click', function(){
    historyMainBtn.classList.add(
        "bg-green-300",
        "text-white"
    )

    historyMainBtn.classList.remove(
        "hidden"
    )

    donationMainBtn.classList.remove(
        "bg-green-300",
        "text-white",
    )

    document.getElementById("donation-card-section").classList.add("hidden")
    document.getElementById("history-list").classList.remove("hidden")

})

// Donation

donationMainBtn.addEventListener('click', function(){
    
    donationMainBtn.classList.add(
        "bg-green-300",
        "text-white"
    )

    donationMainBtn.classList.remove(
        "hidden"
    )

    historyMainBtn.classList.remove(
        "bg-green-300",
        "text-white",
    )

    document.getElementById("donation-card-section").classList.remove("hidden")
    document.getElementById("history-list").classList.add("hidden")

})
