function bmi(weight, height) {

    let bmiCalculated = weight / height**2;

    if (bmiCalculated <= 18.5) {
    return 'Underweight';

    } else if (bmiCalculated <= 25.0) {
        return 'Normal';

    } else if (bmiCalculated <= 30.0) {
        return 'Overweight';

    } else if (bmiCalculated > 30.0) {
        return 'Obese';
    }

}

let pesoMarcos = bmi(71, 1.68);
console.log('Peso de Marcos: ', pesoMarcos);

