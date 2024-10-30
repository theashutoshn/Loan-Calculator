const loanAmouuntInput = document.querySelector(".loan-amount");
const loanInterestRateInput = document.querySelector(".loan-interest-rate");
const loanDurationInput = document.querySelector(".loan-duration");

const loanEMIValue = document.querySelector(".loan-emi .value");
const loanTotalInterestValue = document.querySelector(".loan-interest-payable .value");
const loanTotalAmountValue = document.querySelector(".loan-total-amount .value");

const calculateBtn = document.querySelector(".calculate-button");

let loanAmount = parseFloat(loanAmouuntInput.value);
let loanInterestRate = parseFloat(loanInterestRateInput.value);
let loanDuration = parseFloat(loanDurationInput.value);

let interest = loanInterestRate/ 12 / 100;

const calculateEMI = () =>{
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanDuration)/(Math.pow(1 + interest, loanDuration)-1));

    return emi;
};

const updateData = (emi) =>{
    loanEMIValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(loanDuration * emi);
    loanTotalAmountValue.innerHTML = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    loanTotalInterestValue.innerHTML = totalInterestPayable;
};

const refreshValues = () =>{
    loanAmount = parseFloat(loanAmouuntInput.value);
    loanInterestRate = parseFloat(loanInterestRateInput.value);
    loanDuration = parseFloat(loanDurationInput.value);
    
    interest = loanInterestRate/ 12 / 100;
};


const init = () =>{
    refreshValues();
    let emi = calculateEMI();
    updateData(emi);
};

init();


calculateBtn.addEventListener("click", init);