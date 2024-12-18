const surveyButtons = document.querySelectorAll("a[onclick*='loadSurvey']");
surveyButtons.forEach((button, index) => {
    button.click();
    function autofill(stars) {
        const tableCells = document.querySelectorAll('td');

        tableCells.forEach((cell) => {
            // Find all <input> elements inside the current <td>
            const inputs = cell.querySelectorAll('input[type="radio"]');
            if (inputs.length > 0) {

            // Select the last <input> element and check it
            const lastInput = inputs[stars - 1];
            lastInput.checked = true; // Auto-check the last radio button
        }
        })
    }

    let stars = 5;
    stars = prompt("Ban muon danh gia giang vien may sao?: ");
    autofill(stars)

    // Next to 8 pages
    for (let i = 0; i < 8; i++) {
        nextSection()
    }

    // Submit the form
    const saveButton = document.getElementById("btnSave");
    saveButton.click();

    // Back to main page
    showSurveyForm(false);
    loadDefault(loai);
    loadDSDanhGia();
});

