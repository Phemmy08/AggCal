// Function to calculate aggregate
function calculateAggregate() {
    const jambScore = parseFloat(document.getElementById('jamb').value);
    const maths = parseFloat(document.getElementById('maths').value);
    const english = parseFloat(document.getElementById('english').value);
    const others1 = parseFloat(document.getElementById('others1').value);
    const others2 = parseFloat(document.getElementById('others2').value);
    const others4 = parseFloat(document.getElementById('others4').value);

    // Check if jamb score is within valid range
    if (jambScore < 0 || jambScore > 400) {
        document.getElementById("error").textContent = "Please enter a valid UTME score (0 - 400).";
        return;
    }

    // O'Level Calculation
    const oLevelTotal = (maths + english + others1 + others2 + others4) / 5;
    const oLevelScore = (oLevelTotal / 100) * 25;

    // UTME Calculation
    const jambScorePercent = (jambScore / 400) * 75;

    // Aggregate
    const aggregate = oLevelScore + jambScorePercent;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Aggregate Score is: ${aggregate.toFixed(2)}%`;

    // Add option to contact via WhatsApp
    const whatsappLink = document.createElement('a');
    whatsappLink.href = `https://wa.me/2348109972243?text=Hi, I calculated my aggregate and would like to get more information.`;
    whatsappLink.textContent = "Click here to contact us on WhatsApp.";
    whatsappLink.target = "_blank";
    resultElement.appendChild(document.createElement('br'));
    resultElement.appendChild(whatsappLink);
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateAggregate);
