document.getElementById("survey").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll("input[name='gender']:checked")).map(e => e.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const results = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("popup-results").innerHTML = results;
    document.getElementById("popup").style.display = "block";
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey").reset();
}

function resetForm() {
    document.getElementById("survey").reset();
}
