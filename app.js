let birthDate = document.querySelector("#date");
let luckyNumber = document.querySelector("#lucky");
let checkButton = document.querySelector("#check-luck");
let showDisplay = document.querySelector("#display");


function checkButtonHandler() {

    let dateOfBirth = birthDate.value;
    let userLuck = Number(luckyNumber.value)

    const total = calculateBirthdayLuck(dateOfBirth);

    checkLuck(total, userLuck)

}

function calculateBirthdayLuck(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-", "");

    let sum = 0;

    for (let i = 0; i < dateOfBirth.length; i++) {

        sum = sum + Number(dateOfBirth.charAt(i));
    }

    return sum

}

function checkLuck(total, userLuck) {

    if (birthDate.value == "" || luckyNumber.value == "") {

        showDisplay.innerText = "You must fill both the input field"

    } else if (total % userLuck === 0) {

        showDisplay.innerText = "Yay! your birthdate is lucky 🎉"
        showDisplay.style.color = "blueviolet"


    } else {

        showDisplay.innerText = "Your birthdate is not lucky"

    }
 
}

checkButton.addEventListener("click", checkButtonHandler);