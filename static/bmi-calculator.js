function calculateBMI(event) {
    event.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let resultText = document.getElementById('bmiResult');

    if (height > 0 && weight > 0) {
        let bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';

        resultText.innerText = `${bmi.toFixed(2)} (${category})`;
    } else {
        alert("Please enter valid values for height and weight.");
    }
}
