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
        shareLinkElement.innerText = "Link";
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
