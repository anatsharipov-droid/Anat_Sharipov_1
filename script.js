function calculate() {
    // Получаем значения из формы
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    // Проверка на корректность ввода
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById('output').innerHTML = "Please enter valid numbers.";
        return;
    }

    // Здесь вставь свою формулу, например:
    // const result = input1 + input2; // пример простого вычисления
    const result = input1 * input2; // пока умножение как пример

    // Простейшая классификация результата
    let category = "";
    if (result < 10) {
        category = "Low";
    } else if (result < 50) {
        category = "Medium";
    } else {
        category = "High";
    }

    // Вывод результата
    document.getElementById('output').innerHTML = 
        `Hello! Your result is: ${result} <br> Category: ${category}`;
}
