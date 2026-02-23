function calculate() {
    const name = document.getElementById('name').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    if (!name || isNaN(input1) || isNaN(input2)) {
        document.getElementById('output').innerHTML = "Please enter a valid name and numbers.";
        return;
    }

    const result = input1 * input2;

    // Более описательные категории
    let category = "";
    if (result < 10) {
        category = "Small value";
    } else if (result < 50) {
        category = "Moderate value";
    } else {
        category = "Large value";
    }

    // Понятный вывод
    document.getElementById('output').innerHTML = 
        `Hello, ${name}!<br>
        You multiplied ${input1} × ${input2} = <strong>${result}</strong>.<br>
        Category: <strong>${category}</strong>`;
}
