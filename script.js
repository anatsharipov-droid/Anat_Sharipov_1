function calculate() {
    // Получаем имя и значения из формы
    const name = document.getElementById('name').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    // Проверка на корректность ввода
    if (!name || isNaN(input1) || isNaN(input2)) {
        document.getElementById('output').innerHTML = "Please enter a valid name and numbers.";
        return;
    }

    // Пример формулы (можно заменить на любую)
    const result = input1 * input2;

    // Классификация результата
    let category = "";
    if (result < 10) {
        category = "Low";
    } else if (result < 50) {
        category = "Medium";
    } else {
        category = "High";
    }

    // Вывод результата с персонализированным сообщением
    document.getElementById('output').innerHTML = 
        `Hello, ${name}! Your result is: ${result} <br> Category: ${category}`;
}
