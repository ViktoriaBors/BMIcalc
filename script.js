let button = document.getElementById("submit")
button.addEventListener("click", calculateBMI)

function calculateBMI() {
    let weight = parseInt(document.getElementById("weightInKg").value);
    let height = parseInt(document.getElementById("heightInCm").value);
    let result = document.getElementById("result");
    let bmi = Math.round(weight / (height / 100) ** 2);
    if (weight === "" || height == "" || isNaN(weight) || isNaN(height)) {
        result.style.display = "flex"
        result.innerHTML = "Provide your height and weight"
        result.style.backgroundColor = "#630606";
        result.style.color = "white";
    } else if (bmi < 18.5) {
        result.style.display = "flex"
        result.innerHTML = "Your BMI is " + bmi + " - Falls in the range of Underweight. Speak with a doctor.";
        result.style.backgroundColor = "#630606";
        result.style.color = "white";
    } else if (bmi < 25) {
        result.style.display = "flex"
        result.innerHTML = "Your BMI is " + bmi + " - Falls in the range of Normal weight";
        result.style.backgroundColor = "#	D6FDFF";
        result.style.color = "black";
    } else if (bmi < 30) {
        result.style.display = "flex"
        result.innerHTML = "Your BMI is " + bmi + " - Falls in the range of Pre-obesity";
        result.style.backgroundColor = "#E83A14";
        result.style.color = "white";
    } else {
        result.style.display = "flex"
        result.innerHTML = "Your BMI is " + bmi + " - Falls in the range of Obesity. Speak with a doctor.";
        result.style.backgroundColor = "#630606";
        result.style.color = "white";
    }
}


let reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    document.getElementById("calculateBMIForm").reset();
    result.style.display = "none"
})