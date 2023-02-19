function updateCaseNumber(isIncrease){
   
    const caseNumberFields = document.getElementById('case-number-field');
    const caseNumberString = caseNumberFields.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease ===true){

        newCaseNumber = previousCaseNumber +1;
        
    }
    else{
        newCaseNumber = previousCaseNumber -1;

    }
   
    caseNumberFields.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');

    caseTotalElement.innerText = caseTotalPrice;

}


function getElementValueById(elementId){
    const caseTotalElement = document.getElementById(elementId);
    const currentCaseTotalString = caseTotalElement.innerText;
    const currentCaseTotal = parseInt(currentCaseTotalString);
    return currentCaseTotal;

}

function setTextElementValueById(elementId,value){

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText =value;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){

    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = currentSubTotal;

    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    setTextElementValueById('tax',taxAmount);

    const finalAmount = currentSubTotal + parseInt(taxAmount);

    setTextElementValueById('final-total', finalAmount);


    

    // const tax= document.getElementById('tax');
    // const taxAmountString = tax.value;
    // const previousTaxAmount = parseInt(taxAmountString);
    // const newTaxAmount = previousTaxAmount + (currentSubTotal * 0.1);
    // const taxAmount = newTaxAmount.innerText;
    // return taxAmount;


    // const caseNumberFields = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberFields.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    
    // const newCaseNumber = previousCaseNumber +1;
    // caseNumberFields.value = newCaseNumber;


});

document.getElementById('btn-case-minus').addEventListener('click', function(){

    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    
    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = currentSubTotal;

    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    setTextElementValueById('tax',taxAmount);

    const finalAmount = currentSubTotal + parseInt(taxAmount);

    setTextElementValueById('final-total', finalAmount);

    

    // const caseNumberFields = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberFields.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    
    // const newCaseNumber = previousCaseNumber -1;
    // caseNumberFields.value = newCaseNumber;

    
});