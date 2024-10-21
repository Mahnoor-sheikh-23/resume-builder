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

document.addEventListener('DOMContentLoaded', () => {
    
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
        const resumeData: ResumeData = JSON.parse(storedData);

        // Populate form fields with data
        (document.getElementById('fullName') as HTMLInputElement).value = resumeData.fullName;
        (document.getElementById('aboutMe') as HTMLTextAreaElement).value = resumeData.aboutMe;
        (document.getElementById('degree') as HTMLInputElement).value = resumeData.degree;
        (document.getElementById('matricSchool') as HTMLInputElement).value = resumeData.matricSchool;
        (document.getElementById('matricYear') as HTMLInputElement).value = resumeData.matricYear.toString();
        (document.getElementById('currentEducation') as HTMLInputElement).value = resumeData.currentEducation;
        (document.getElementById('currentInstitute') as HTMLInputElement).value = resumeData.currentInstitute;
        (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills.join(', ');
        (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
        (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
        (document.getElementById('location') as HTMLInputElement).value = resumeData.location;
    }});

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData: ResumeData = {
        fullName: (document.getElementById('fullName') as HTMLInputElement).value,
        aboutMe: (document.getElementById('aboutMe') as HTMLTextAreaElement).value,
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        matricSchool: (document.getElementById('matricSchool') as HTMLInputElement).value,
        matricYear: +(document.getElementById('matricYear') as HTMLInputElement).value,
        currentEducation: (document.getElementById('currentEducation') as HTMLInputElement).value,
        currentInstitute: (document.getElementById('currentInstitute') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(','),
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        location: (document.getElementById('location') as HTMLInputElement).value,
    };

    localStorage.setItem('resumeData', JSON.stringify(formData));

    window.location.href = 'resume.html';
});

