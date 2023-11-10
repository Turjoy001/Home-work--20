function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
      alert('Please enter both weight and height.');
      return;
    }

    let bmi = (weight / ((height / 100) * (height / 100)));
    
    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      result = 'Overweight';
    } else if (bmi >= 30 && bmi < 34.9) {
        result = 'Obesity';
    } else if (bmi >= 35) {
        result = 'Extremely Obesity';
    } else {
      result = 'Wrong';
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi}. You are ${result}.`;
  }