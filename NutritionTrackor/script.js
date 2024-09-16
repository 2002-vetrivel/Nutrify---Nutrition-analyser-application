document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    const issue = document.getElementById("issue");
    const result = document.getElementById("result");

    search.addEventListener("click", () => {
        const input = document.getElementById("input").value;
        const API_KEY = "c+Co9lwHhXjtw+hUGd8opg==fmdyks0h26S4DUNb";

        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const third = document.getElementById("third");
        const fourth = document.getElementById("fourth");
        const fifth = document.getElementById("fifth");
        const sixth = document.getElementById("sixth");
        const seven = document.getElementById("seven");
        const eight = document.getElementById("eight");
        const nine = document.getElementById("nine");

        issue.innerHTML = ""; 
        first.innerHTML = "";
        second.innerHTML = "";
        third.innerHTML = "";
        fourth.innerHTML = "";
        fifth.innerHTML = "";
        sixth.innerHTML = "";
        seven.innerHTML = "";
        eight.innerHTML = "";
        nine.innerHTML = "";

        result.style.backgroundColor = "transparent";  // Set the background to transparent or nothing
        
        if (input.trim() === "") {
            issue.innerHTML = "Input field is empty!";
            return;
        }

        issue.innerHTML = `<img src="loader.gif" alt="Loading..." style ="width:100px">`;

        fetch(`https://api.calorieninjas.com/v1/nutrition?query=${input}`, {
            method: "GET",
            headers: {
                "X-Api-Key": API_KEY
            }
        })
        .then((response) => response.json())
        .then((data) => {
            issue.innerHTML = "";

            if (data.items.length === 0) {
                issue.innerHTML = "No data found!";
                return;
            }

            first.innerHTML = `Food:<br> ${data.items[0].name}`;
            second.innerHTML = `Calories:<br> ${data.items[0].calories} kcal`;
            third.innerHTML = `Protein:<br> ${data.items[0].protein_g} g`;
            fourth.innerHTML = `Carbs:<br> ${data.items[0].carbohydrates_total_g} g`;
            fifth.innerHTML = `Fat:<br> ${data.items[0].fat_total_g} g`;
            sixth.innerHTML = `Sugar:<br> ${data.items[0].sugar_g} g`;
            seven.innerHTML = `Cholesterol:<br> ${data.items[0].cholesterol_mg} mg`;
            eight.innerHTML = `Saturated fat:<br> ${data.items[0].fat_saturated_g} g`;
            nine.innerHTML = `Fiber:<br> ${data.items[0].fiber_g} g`;

            result.style.backgroundColor = "#E9EEF7"; 
        })
        .catch((error) => {
            issue.innerHTML = "An error occurred. Please try again.";
        });
    });
    const button = document.getElementById("button");
    const popup = document.getElementById("popup");

    button.addEventListener("click", () => {
        if (popup.style.display === "none" || popup.style.display === "") {
            popup.style.display = "block";
        } else {
            popup.style.display = "none";
        }
    });

    // Optionally, you can hide the popup if the user clicks anywhere else on the page
    document.addEventListener("click", function (event) {
        if (!button.contains(event.target) && !popup.contains(event.target)) {
            popup.style.display = "none";
        }
    });
});
