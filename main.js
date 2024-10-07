document.getElementById("cvForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const references = document.getElementById("references").value;
    document.getElementById("message").innerText = `Thank you, ${fullName}. Your CV has been submitted successfully!`;
});

document.getElementById("downloadPdf").addEventListener("click", function() {
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const references = document.getElementById("references").value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Curriculum Vitae", 20, 20);
    doc.setFontSize(12);
    
    doc.text("Full Name: " + fullName, 20, 40);
    doc.text("Cellphone Number: " + phoneNumber, 20, 50);
    doc.text("Email Address: " + email, 20, 60);
    doc.text("Date of Birth: " + dob, 20, 70);
    doc.text("Education: " + education, 20, 80);
    doc.text("Skills: " + skills, 20, 100);
    doc.text("References: " + references, 20, 120);

    // Save the generated PDF
    doc.save(`${fullName}_CV.pdf`);
});
