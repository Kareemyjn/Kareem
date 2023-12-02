function calculateSquareRoot() {
    var inputNumber = document.getElementById("number").value;
    var result = Math.sqrt(inputNumber);

    if (!isNaN(result)) {
        document.getElementById("result").innerText = "الجذر التربيعي: " + result;
    } else {
        document.getElementById("result").innerText = "الرجاء إدخال رقم صحيح.";
    }
}
