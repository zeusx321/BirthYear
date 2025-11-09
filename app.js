let inputAge = document.getElementById("age");
let calAge1 = document.getElementById("calAge1");
let calAge2 = document.getElementById("calAge2");

document.getElementById("but1").addEventListener("click", function() {
    let age = inputAge.value;
    if (age.trim() === "" || isNaN(age)) {
        window.alert("Enter a valid number!");
    } else {
        let currentYear = new Date().getFullYear();
        let birthYear1 = currentYear - age;
        let birthYear2 = Math.floor((birthYear1 - 622) * 33 / 32) + 1;

        calAge1.innerHTML = birthYear1;
        calAge2.innerHTML = birthYear2;
    }
});

document.getElementById("but2").addEventListener("click", function() {
    calAge1.innerHTML = "";
    calAge2.innerHTML = "";
    inputAge.value = "";
});
