var _a;
document.addEventListener('DOMContentLoaded', function () {
    // Check if there is data in localStorage
    var storedData = localStorage.getItem('resumeData');
    if (storedData) {
        var resumeData = JSON.parse(storedData);
        // Populate form fields with data
        document.getElementById('fullName').value = resumeData.fullName;
        document.getElementById('aboutMe').value = resumeData.aboutMe;
        document.getElementById('degree').value = resumeData.degree;
        document.getElementById('matricSchool').value = resumeData.matricSchool;
        document.getElementById('matricYear').value = resumeData.matricYear.toString();
        document.getElementById('currentEducation').value = resumeData.currentEducation;
        document.getElementById('currentInstitute').value = resumeData.currentInstitute;
        document.getElementById('skills').value = resumeData.skills.join(', ');
        document.getElementById('experience').value = resumeData.experience;
        document.getElementById('email').value = resumeData.email;
        document.getElementById('phone').value = resumeData.phone;
        document.getElementById('location').value = resumeData.location;
    }
});
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        fullName: document.getElementById('fullName').value,
        aboutMe: document.getElementById('aboutMe').value,
        degree: document.getElementById('degree').value,
        matricSchool: document.getElementById('matricSchool').value,
        matricYear: +document.getElementById('matricYear').value,
        currentEducation: document.getElementById('currentEducation').value,
        currentInstitute: document.getElementById('currentInstitute').value,
        skills: document.getElementById('skills').value.split(','),
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
    };
    localStorage.setItem('resumeData', JSON.stringify(formData));
    window.location.href = 'resume.html';
});
