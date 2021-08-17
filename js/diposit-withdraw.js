// Balance Diposit
function getInputValueByIdI(idName) {
  const inputField = document.getElementById(idName);
  const inputAmount = parseFloat(inputField.value);
  inputField.value = "";
  return inputAmount;
}

function getAmountById(idName) {
  const amountField = document.getElementById(idName);
  const Amount = parseFloat(amountField.innerText);
  return Amount;
}

function getSumValue(idName, amount) {
  const amountField = document.getElementById(idName);
  const previousAmount = parseFloat(amountField.innerText);
  const currentAmount = amount + previousAmount;
  amountField.innerText = currentAmount;
}
function errorMessage(idName, errorText) {
  const errorToId = document.getElementById(idName);
  errorToId.innerText = errorText;
  errorToId.style.color = "red";
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  // debugger;
  const inputDipositAmount = getInputValueByIdI("input-diposit");
  if (inputDipositAmount > 0) {
    getSumValue("diposit-balance", inputDipositAmount);
    getSumValue("total-balance", inputDipositAmount);
    errorMessage("error-text-diposit", "");
    alert(
      "You have deposited $" +
        inputDipositAmount +
        "\r\n" +
        "Please check your email."
    );
  } else {
    errorMessage("error-text-diposit", "*Wrong input! Please input number.");
  }
});
// Balance Withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputWithdrawAmount = getInputValueByIdI("input-withdraw");
  const totalBalance = getAmountById("total-balance");
  if (inputWithdrawAmount <= totalBalance && inputWithdrawAmount > 0) {
    getSumValue("withdraw-balance", inputWithdrawAmount);
    getSumValue("total-balance", -inputWithdrawAmount);
    errorMessage("error-text-withdraw", "");
    alert(
      "You have withdrawn $" +
        inputWithdrawAmount +
        "\r\n" +
        "Please check your email."
    );
  } else {
    if (inputWithdrawAmount > totalBalance) {
      errorMessage("error-text-withdraw", "*Insufficient balance!");
    } else {
      errorMessage("error-text-withdraw", "*Wrong input!");
    }
  }
});

// Without Function
/* document.getElementById("diposit-btn").addEventListener("click", function () {
  const inputDiposit = document.getElementById("input-diposit");
  if (
    typeof inputDiposit.value != "number" &&
    inputDiposit.value >= 0 &&
    inputDiposit.value != ""
  ) {
    const dipositBalance = document.getElementById("diposit-balance");
    dipositBalance.innerText =
      parseInt(inputDiposit.value) + parseInt(dipositBalance.textContent);
    //   chaning balance
    const totalBalance = document.getElementById("total-balance");
    totalBalance.innerText =
      parseInt(inputDiposit.value) + parseInt(totalBalance.textContent);
    document.getElementById("error-text-diposit").style.display = "none";

    inputDiposit.value = "";
  } else {
    document.getElementById("error-text-diposit").style.display = "block";
    document.getElementById("error-text-diposit").innerText =
      "Wrong input! Please input number.";
  }
});
// Balance Withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputWithdraw = document.getElementById("input-withdraw");
  if (typeof inputWithdraw.value != "number") {
    const withdrawBalance = document.getElementById("withdraw-balance");
    console.log(withdrawBalance);

    //   chaning balance
    const totalBalance = document.getElementById("total-balance");
    if (parseInt(totalBalance.textContent) >= parseInt(inputWithdraw.value)) {
      withdrawBalance.innerText =
        parseInt(inputWithdraw.value) + parseInt(withdrawBalance.textContent);
      totalBalance.innerText =
        parseInt(totalBalance.textContent) - parseInt(inputWithdraw.value);
      inputWithdraw.value = "";
      document.getElementById("error-text-withdraw").style.display = "none";
    } else {
      document.getElementById("error-text-withdraw").style.display = "block";
      document.getElementById("error-text-withdraw").innerText =
        "You dont have sufficient balance!";
    }
  } else {
    document.getElementById("error-text-withdraw").innerText =
      "Wrong input! Please input number.";
  }
});
 */
