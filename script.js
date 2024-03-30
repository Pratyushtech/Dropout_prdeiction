document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionnaireForm');
    const predictionResult = document.getElementById('predictionResult');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const prediction = predictDropout(formData);
        displayPrediction(prediction);
    });
});

function predictDropout(formData) {
    const personality = parseInt(formData.get('personality'));
    const thinking = parseInt(formData.get('thinking'));
    const ideology = parseInt(formData.get('ideology'));
    const marks = parseInt(formData.get('marks'));
    const attendance = parseInt(formData.get('attendance'));
    const familySupport = formData.get('familySupport');
    const extracurricular = formData.get('extracurricular');
    const stressLevel = parseInt(formData.get('stressLevel'));

    // Dummy prediction logic, replace with your actual prediction algorithm
    const totalScore = personality + thinking + ideology + marks + attendance + stressLevel;
    let prediction = "Low risk of dropout";
    if (totalScore <= 120 || familySupport === "No" || extracurricular === "No") {
        prediction = "High risk of dropout";
    } else if (totalScore >= 120) {
        prediction = "Moderate risk of dropout";
    }
    return prediction;
}

function displayPrediction(prediction) {
    const resultDiv = document.getElementById('predictionResult');
    resultDiv.innerHTML = `<p>Prediction Result: ${prediction}</p>`;
}
