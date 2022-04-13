import ResumePDF from './items/resume-pdf.png';
import DownloadPDF from './items/Eric_Heinmiller_resume.pdf';
import ResumeTEXT from './items/resume-text.png';
import DownloadTEXT from './items/Eric_Heinmiller_resume.txt';
import ResumeWORD from './items/resume-word.png';
import DownloadWORD from './items/Eric_Heinmiller_resume.docx';
import Webpage from './items/webpage.png';
import Email from './items/email.png';
import Phone from './items/phone.png';
import Windows from './items/Windows-icon.png';

export default {
  Resume: [
    {
      icon: ResumePDF,
      title: 'resume.pdf',
      file: DownloadPDF,
    },
    {
      icon: ResumeTEXT,
      title: 'resume.txt',
      file: DownloadTEXT,
    },
    {
      icon: ResumeWORD,
      title: 'resume.word',
      file: DownloadWORD,
    },
  ],
  Social: [
    {
      icon: Webpage,
      title: 'Github.com',
      url: 'https://www.github.com/ericheinmiller',
    },
    {
      icon: Webpage,
      title: 'Linkedin.com',
      url: 'https://www.linkedin.com/in/ericheinmiller',
    },
  ],
  Contact: [
    {
      icon: Email,
      title: 'Email me',
      url: 'mailto:ericheinmiller@gmail.com',
    },
    {
      icon: Phone,
      title: '408-660-9990',
    },
  ],
  Apps: [
    {
      icon: Windows,
      title: 'The Wall',
      url: 'http://localhost:8080',
    },
  ],
  Iterm: [
    {
      icon: Windows,
      title: 'Mini posts',
      url: 'http://localhost:8080',
    },
  ],
};
