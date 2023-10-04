document.addEventListener("DOMContentLoaded", function () {
    const userInputs = document.querySelectorAll(".userAnswer");
    const submitButton = document.getElementById("submitButton");
    const infoCard = document.getElementById("infoCard");
    const nameText = document.getElementById("nameText");
    const gradeText = document.getElementById("gradeText");
    const subjectText = document.getElementById("subjectText");

    submitButton.addEventListener("click", function () {
       
        const nameValue = document.getElementById("nameInput").value;
        const gradeValue = document.getElementById("gradeInput").value;
        const subjectValue = document.getElementById("subjectInput").value;

    
        nameText.textContent = nameValue;
        gradeText.textContent = gradeValue;
        subjectText.textContent = subjectValue;

   
        infoCard.style.display = "block";

       
        userInputs.forEach(function (input) {
            input.value = "";
        });
    });
});


