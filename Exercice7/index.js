function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const isNumeric = /^\d+$/;

    if (!isNumeric.test(decimalInput)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);

    if (decimalNumber < 0) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    const binaryString = decimalNumber.toString(2);
    document.getElementById('binaryResult').textContent = `Représentation binaire: ${binaryString}`;
}