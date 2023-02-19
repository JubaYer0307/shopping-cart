function updatePhoneNumber(isIncrease){
   
    const phoneNumberFields = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFields.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIncrease ===true){

        newPhoneNumber = previousPhoneNumber +1;
        
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;

    }
   
    phoneNumberFields.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');

    phoneTotalElement.innerText = phoneTotalPrice;

}

function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal
    ;

}

document.getElementById('btn-phone-plus').addEventListener('click',function(){

    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    const currentPhoneTotal = getElementValueById('phone-total');


    const currentCaseTotal = getElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = currentSubTotal;



    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    setTextElementValueById('tax',taxAmount);
    const finalAmount = currentSubTotal + parseInt(taxAmount);
    setTextElementValueById('final-total', finalAmount);


})
// document.getElementById('btn-phone-plus').addEventListener('click', function(){



//     // const phoneNumberFields = document.getElementById('phone-number-field');
//     // const phoneNumberString = phoneNumberFields.value;
//     // const previousPhoneNumber = parseInt(phoneNumberString);
    
//     // const newPhoneNumber = previousPhoneNumber +1;
//     // phoneNumberFields.value = newPhoneNumber;


// });

document.getElementById('btn-phone-minus').addEventListener('click', function(){

    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    updatePhoneTotalPrice(newPhoneNumber);


    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = currentSubTotal;




    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    setTextElementValueById('tax',taxAmount);
    const finalAmount = currentSubTotal + parseInt(taxAmount);
    setTextElementValueById('final-total', finalAmount);


    

    // const phoneNumberFields = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberFields.value;
    // const previousPhoneNumber = parseInt(phoneNumberString);
    
    // const newPhoneNumber = previousPhoneNumber -1;
    // phoneNumberFields.value = newPhoneNumber;

    
});