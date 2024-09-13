// interface ResumeData {
//     fullName: string;
//     aboutMe: string;
//     degree: string;
//     matricSchool: string;
//     matricYear: number;
//     currentEducation: string;
//     currentInstitute: string;
//     skills: string[];
//     experience: string;
//     email: string;
//     phone: string;
//     location: string;
// }
function generateUniqueIdentifier(fullName) {
    return fullName.toLowerCase().replace(/ /g, '-') + '-' + Date.now();
}
function saveResumeData(resumeData) {
    var uniqueId = generateUniqueIdentifier(resumeData.fullName);
    localStorage.setItem(uniqueId, JSON.stringify(resumeData));
    return uniqueId;
}
function loadResumeData(uniqueId) {
    var data = localStorage.getItem(uniqueId);
    return data ? JSON.parse(data) : null;
}
window.addEventListener('load', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeId = urlParams.get('id');
    var resumeData;
    if (resumeId) {
        resumeData = loadResumeData(resumeId) || {};
    }
    else {
        resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    }
    if (resumeData) {
        document.getElementById('fullName').innerText = resumeData.fullName.toUpperCase();
        document.getElementById('aboutMe').innerText = resumeData.aboutMe;
        document.getElementById('degree').innerText = resumeData.degree.toUpperCase();
        document.getElementById('matricSchool').innerText = resumeData.matricSchool.toUpperCase();
        document.getElementById('matricYear').innerText = resumeData.matricYear.toString();
        document.getElementById('currentEducation').innerText = resumeData.currentEducation;
        document.getElementById('currentInstitute').innerText = resumeData.currentInstitute;
        document.getElementById('experience').innerText = resumeData.experience;
        document.getElementById('email').innerText = resumeData.email;
        document.getElementById('phone').innerText = resumeData.phone;
        document.getElementById('location').innerText = resumeData.location;
        var skillsList_1 = document.getElementById('skillsList');
        skillsList_1.innerHTML = '';
        resumeData.skills.forEach(function (skill) {
            var li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList_1.appendChild(li);
        });
        var uniqueId = saveResumeData(resumeData);
        var sharableUrl_1 = "".concat(window.location.origin).concat(window.location.pathname, "?id=").concat(uniqueId);
        var shareLinkElement = document.getElementById('sharableLink');
        shareLinkElement.innerText = sharableUrl_1;
        shareLinkElement.href = sharableUrl_1;
        var copyButton = document.getElementById('copyLinkButton');
        if (copyButton) {
            copyButton.addEventListener('click', function () {
                navigator.clipboard.writeText(sharableUrl_1).then(function () {
                    alert('Link copied to clipboard!');
                }).catch(function (err) {
                    console.error('Failed to copy the link: ', err);
                });
            });
        }
    }
    var editButton = document.getElementById('editButton');
    if (editButton) {
        editButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
    var downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', function () {
            window.print();
        });
    }
});
// interface ResumeData {
//     fullName: string;
//     aboutMe: string;
//     degree: string;
//     matricSchool: string;
//     matricYear: number;
//     currentEducation: string;
//     currentInstitute: string;
//     skills: string[];
//     experience: string;
//     email: string;
//     phone: string;
//     location: string;
// }
// window.addEventListener('load', () => {
//     // Extract the resume ID from the URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const resumeId = urlParams.get('id');  // The unique identifier in the URL
//     if (resumeId) {
//         // Attempt to load the resume data from localStorage using the resumeId
//         const resumeData: ResumeData | null = JSON.parse(localStorage.getItem(resumeId) || 'null');
//         if (resumeData) {
//             // Populate the HTML with the resume data
//             (document.getElementById('fullName') as HTMLElement).innerText = resumeData.fullName.toUpperCase();
//             (document.getElementById('aboutMe') as HTMLElement).innerText = resumeData.aboutMe;
//             (document.getElementById('degree') as HTMLElement).innerText = resumeData.degree.toUpperCase();
//             (document.getElementById('matricSchool') as HTMLElement).innerText = resumeData.matricSchool.toUpperCase();
//             (document.getElementById('matricYear') as HTMLElement).innerText = resumeData.matricYear.toString();
//             (document.getElementById('currentEducation') as HTMLElement).innerText = resumeData.currentEducation;
//             (document.getElementById('currentInstitute') as HTMLElement).innerText = resumeData.currentInstitute;
//             (document.getElementById('experience') as HTMLElement).innerText = resumeData.experience;
//             (document.getElementById('email') as HTMLElement).innerText = resumeData.email;
//             (document.getElementById('phone') as HTMLElement).innerText = resumeData.phone;
//             (document.getElementById('location') as HTMLElement).innerText = resumeData.location;
//             const skillsList = document.getElementById('skillsList') as HTMLElement;
//             skillsList.innerHTML = ''; // Clear any existing skills
//             resumeData.skills.forEach(skill => {
//                 const li = document.createElement('li');
//                 li.innerText = skill.trim();
//                 skillsList.appendChild(li);
//             });
//         } else {
//             console.error('No resume data found for the given ID.');
//         }
//     } else {
//         console.error('No ID found in the URL.');
//     }
//     // Add functionality for the Edit button
//     const editButton = document.getElementById('editButton');
//     if (editButton) {
//         editButton.addEventListener('click', () => {
//             window.location.href = 'index.html'; // Redirect to the form page
//         });
//     }
//     // Add functionality for the Download Resume button
//     const downloadButton = document.getElementById('downloadButton');
//     if (downloadButton) {
//         downloadButton.addEventListener('click', () => {
//             window.print();
//         });
//     }
// });
