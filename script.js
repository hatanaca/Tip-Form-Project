function calculateTip() {
	const billAmount = parseFloat(document.getElementById('billAmount').value);
	const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

	if (isNaN(billAmount) || isNaN(tipPercentage)) {
		alert("Pleass enter a valid number for both fields");
		return;
	}
	

	const tipAmount = (billAmount * tipPercentage) / 100;
	const totalBill = billAmount + tipAmount;

	document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
	document.getElementById('totalBill').textContent = totalBill.toFixed(2);
}
