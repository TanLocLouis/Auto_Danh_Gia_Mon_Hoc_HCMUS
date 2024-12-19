function Rating() {
    const numberOfPages = 8;

    const surveyButtons = document.querySelectorAll("a[onclick*='loadSurvey']");
    if (surveyButtons.length === 7) {
        alert("Cac mon hoc da duoc danh gia :))");
        return;
    }
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
        
        // Set the number of stars
        let stars = 5;
        stars = prompt("Ban muon danh gia giang vien may sao?: ");
        autofill(stars)

        // Next to 8 pages
        for (let i = 0; i < numberOfPages; i++) {
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
}

// Call main funtion
Rating()
