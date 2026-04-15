function generateInputs() {
    let subjects = document.getElementById("subjects").value;
    let container = document.getElementById("marksContainer");

    container.innerHTML = "";

    for (let i = 1; i <= subjects; i++) {
        container.innerHTML += 
            `<input type="number" class="marks" placeholder="Enter marks for subject ${i}"><br>`;
    }
}

function calculateResult() {
    let marks = document.getElementsByClassName("marks");
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += Number(marks[i].value);
    }

    let percentage = total / marks.length;

    let grade = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML =
        `Total: ${total} <br> Percentage: ${percentage.toFixed(2)}% <br> Grade: ${grade}`;
}