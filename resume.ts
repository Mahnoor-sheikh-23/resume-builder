interface ResumeData {
    fullName: string;
    aboutMe: string;
    degree: string;
    matricSchool: string;
    matricYear: number;
    currentEducation: string;
    currentInstitute: string;
    skills: string[];
    experience: string;
    email: string;
    phone: string;
    location: string;
}

function generateUniqueIdentifier(fullName: string): string {
    return fullName.toLowerCase().replace(/ /g, '-') + '-' + Date.now();
}

function saveResumeData(resumeData: ResumeData): string {
    const uniqueId = generateUniqueIdentifier(resumeData.fullName);
    localStorage.setItem(uniqueId, JSON.stringify(resumeData));
    return uniqueId;
}

function loadResumeData(uniqueId: string): ResumeData | null {
    const data = localStorage.getItem(uniqueId);
    return data ? JSON.parse(data) : null;
}

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('id');

    let resumeData: ResumeData;

    if (resumeId) {
        resumeData = loadResumeData(resumeId) || {} as ResumeData;
    } else {
        resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    }

    if (resumeData) {
        (document.getElementById('fullName') as HTMLElement).innerText = resumeData.fullName.toUpperCase();
        (document.getElementById('aboutMe') as HTMLElement).innerText = resumeData.aboutMe;
        (document.getElementById('degree') as HTMLElement).innerText = resumeData.degree.toUpperCase();
        (document.getElementById('matricSchool') as HTMLElement).innerText = resumeData.matricSchool.toUpperCase();
        (document.getElementById('matricYear') as HTMLElement).innerText = resumeData.matricYear.toString();
        (document.getElementById('currentEducation') as HTMLElement).innerText = resumeData.currentEducation;
        (document.getElementById('currentInstitute') as HTMLElement).innerText = resumeData.currentInstitute;
        (document.getElementById('experience') as HTMLElement).innerText = resumeData.experience;
        (document.getElementById('email') as HTMLElement).innerText = resumeData.email;
        (document.getElementById('phone') as HTMLElement).innerText = resumeData.phone;
        (document.getElementById('location') as HTMLElement).innerText = resumeData.location;

        const skillsList = document.getElementById('skillsList') as HTMLElement;
        skillsList.innerHTML = ''; 
        resumeData.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        });

        const uniqueId = saveResumeData(resumeData);
        const sharableUrl = `${window.location.origin}${window.location.pathname}?id=${uniqueId}`;
        const shareLinkElement = document.getElementById('sharableLink') as HTMLAnchorElement;
        shareLinkElement.innerText = sharableUrl;
        shareLinkElement.href = sharableUrl;

        const copyButton = document.getElementById('copyLinkButton');
        if (copyButton) {
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(sharableUrl).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy the link: ', err);
                });
            });
        }
    }

    const editButton = document.getElementById('editButton');
    if (editButton) {
        editButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            window.print();
        });
    }
});

