import pptxgen from 'pptxgenjs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Bridgette Lesedi Gaotlhaelwe';
pptx.subject = 'Professional portfolio presentation';
pptx.title = 'Bridgette Lesedi Gaotlhaelwe — Professional Portfolio';
pptx.company = 'Bridgette Lesedi Gaotlhaelwe';
pptx.lang = 'en-ZA';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'en-ZA',
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: '0A0F1E' },
  objects: [
    { rect: { x: 0, y: 7.25, w: 13.333, h: 0.25, fill: { color: '0EA5E9' }, line: { color: '0EA5E9' } } },
    { text: { text: 'BRIDGETTE LESEDI GAOTLHAELWE', options: { x: 0.55, y: 7.05, w: 5, h: 0.16, fontFace: 'Aptos', fontSize: 7, color: '94A3B8', margin: 0, breakLine: false } } },
  ],
  slideNumber: { x: 12.55, y: 7.04, color: '94A3B8', fontFace: 'Aptos', fontSize: 8 },
});

const white = 'F8FAFC';
const muted = 'CBD5E1';
const dim = '94A3B8';
const blue = '38BDF8';
const cyan = '06B6D4';
const card = '111827';

function addTitle(slide, eyebrow, title, subtitle) {
  slide.addText(eyebrow.toUpperCase(), { x: 0.7, y: 0.55, w: 5.5, h: 0.25, fontSize: 10, bold: true, color: blue, charSpacing: 1.5, margin: 0 });
  slide.addText(title, { x: 0.7, y: 0.9, w: 11.9, h: 0.58, fontSize: 28, bold: true, color: white, margin: 0, breakLine: false });
  if (subtitle) slide.addText(subtitle, { x: 0.7, y: 1.58, w: 11.5, h: 0.35, fontSize: 12, color: muted, margin: 0 });
}

function addCard(slide, x, y, w, h, heading, body) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: card, transparency: 4 }, line: { color: '1E293B', pt: 1 } });
  slide.addText(heading, { x: x + 0.22, y: y + 0.2, w: w - 0.44, h: 0.28, fontSize: 14, bold: true, color: blue, margin: 0 });
  slide.addText(body, { x: x + 0.22, y: y + 0.62, w: w - 0.44, h: h - 0.8, fontSize: 11, color: muted, breakLine: false, valign: 'top', margin: 0.02, fit: 'shrink' });
}

let slide = pptx.addSlide('MASTER');
slide.addText('BRIDGETTE\nLESEDI\nGAOTLHAELWE', { x: 0.8, y: 1.25, w: 6.5, h: 2.1, fontSize: 34, bold: true, color: white, breakLine: false, margin: 0, fit: 'shrink' });
slide.addText('IT Support & Administration Professional', { x: 0.85, y: 3.6, w: 6.5, h: 0.4, fontSize: 18, bold: true, color: blue, margin: 0 });
slide.addText('Professional Portfolio Presentation', { x: 0.85, y: 4.18, w: 5.5, h: 0.3, fontSize: 14, color: muted, margin: 0 });
slide.addShape(pptx.ShapeType.line, { x: 0.85, y: 4.75, w: 2.2, h: 0, line: { color: cyan, pt: 2 } });
slide.addText('Riverlea, Johannesburg, 2093\ngaotlhaelwe@gmail.com\n081 533 3115 / 078 196 6493', { x: 0.85, y: 5.05, w: 5.5, h: 0.8, fontSize: 12, color: muted, breakLine: false, margin: 0, fit: 'shrink' });
slide.addShape(pptx.ShapeType.ellipse, { x: 8.35, y: 1.6, w: 3.4, h: 3.4, fill: { color: '0EA5E9', transparency: 84 }, line: { color: blue, transparency: 25, pt: 2 } });
slide.addText('BLG', { x: 8.8, y: 2.5, w: 2.5, h: 0.8, fontSize: 40, bold: true, color: blue, align: 'center', margin: 0 });
slide.addText('Reliable support.\nOrganised administration.\nReady to learn.', { x: 7.85, y: 5.2, w: 4.4, h: 0.9, fontSize: 16, bold: true, color: white, align: 'center', breakLine: false, margin: 0 });

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Profile', 'About Bridgette', 'A dependable professional combining ICT training with practical administration experience.');
addCard(slide, 0.7, 2.25, 3.85, 3.55, 'Professional Summary', 'Administrator and IT-trained support professional with a CCNA networking qualification and more than a year of experience in a fast-paced school administration and learner support environment.');
addCard(slide, 4.75, 2.25, 3.85, 3.55, 'What I Bring', 'Comfortable with computer hardware, software, systems analysis, record-keeping, and daily administrative support. Known for reliability, clear communication, and adaptability.');
addCard(slide, 8.8, 2.25, 3.85, 3.55, 'Career Direction', 'Seeking an entry-level IT support, data capturing, or office administration opportunity where dependable technical support and organised service can make a difference.');

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Capabilities', 'Skills & Expertise', 'Technical foundations and people-focused strengths for support environments.');
addCard(slide, 0.7, 2.05, 2.9, 3.95, 'IT Support', 'Computer hardware troubleshooting\nComputer software troubleshooting\nSystems analysis\nProgramming basics');
addCard(slide, 3.8, 2.05, 2.9, 3.95, 'Networking', 'CCNA networking fundamentals\nNetwork concepts\nSystems and connectivity support\nIT troubleshooting');
addCard(slide, 6.9, 2.05, 2.9, 3.95, 'Administration', 'Administrative support\nData capturing\nFiling and record-keeping\nDocument maintenance');
addCard(slide, 10.0, 2.05, 2.9, 3.95, 'Soft Skills', 'Communication\nReliability\nTeamwork\nAdaptability\nAttention to detail\nLearner support');

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Experience', 'Work Experience', 'Practical experience supporting learners, staff, parents, and school operations.');
slide.addShape(pptx.ShapeType.line, { x: 1.2, y: 2.2, w: 0, h: 3.35, line: { color: blue, pt: 2 } });
slide.addShape(pptx.ShapeType.ellipse, { x: 1.02, y: 2.27, w: 0.36, h: 0.36, fill: { color: blue }, line: { color: blue } });
slide.addText('FEB 2023 — JUL 2024', { x: 1.7, y: 2.2, w: 2.2, h: 0.25, fontSize: 10, bold: true, color: blue, margin: 0 });
slide.addText('Assistant Teacher and Administrator', { x: 1.7, y: 2.58, w: 6.5, h: 0.35, fontSize: 20, bold: true, color: white, margin: 0 });
slide.addText('Department of Education', { x: 1.7, y: 3.05, w: 4, h: 0.25, fontSize: 13, italic: true, color: dim, margin: 0 });
slide.addText('• Provided day-to-day administrative support, including filing and record-keeping\n• Assisted teaching staff with classroom supervision and learner support\n• Acted as a point of contact between staff, parents, and the HOD\n• Helped keep daily department operations running smoothly\n• Completed a 17-month fixed-term contract', { x: 1.7, y: 3.55, w: 9.8, h: 1.6, fontSize: 13, color: muted, breakLine: false, margin: 0.02, paraSpaceAfterPt: 10, fit: 'shrink' });

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Qualifications', 'Education & Training', 'A progressive ICT learning path supported by practical workplace experience.');
const qualifications = [
  ['2023', 'National Certificate (Vocational) Level 4 — ICT', 'South West Gauteng College'],
  ['2022', 'CCNA7 (Networking)', 'South West Gauteng College'],
  ['2021', 'National Certificate (Vocational) Level 3 — ICT', 'Hardware & Software · Systems Analysis & Design · Programming'],
  ['2021', 'Fourth Industrial Revolution short course', 'Robotics · 3D Printing · Coding · Programming'],
  ['2019', 'National Certificate (Vocational) Level 2 — ICT', 'South West Gauteng College'],
  ['2017', 'Matric (National Senior Certificate)', 'Riverlea Secondary School'],
];
qualifications.forEach(([year, title, institution], i) => {
  const y = 2.0 + i * 0.72;
  slide.addText(year, { x: 0.85, y, w: 0.7, h: 0.25, fontSize: 11, bold: true, color: blue, margin: 0 });
  slide.addText(title, { x: 1.75, y, w: 6.8, h: 0.26, fontSize: 14, bold: true, color: white, margin: 0 });
  slide.addText(institution, { x: 8.7, y, w: 3.8, h: 0.26, fontSize: 11, color: muted, margin: 0, fit: 'shrink' });
  slide.addShape(pptx.ShapeType.line, { x: 1.75, y: y + 0.42, w: 10.7, h: 0, line: { color: '1E293B', pt: 1 } });
});

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Portfolio', 'Professional Work Areas', 'Examples of the capabilities represented in Bridgette’s portfolio website.');
addCard(slide, 0.7, 2.2, 3.85, 3.6, 'School Administration Support', 'Filing, record-keeping, learner documentation, and daily department operations during a 17-month fixed-term contract.');
addCard(slide, 4.75, 2.2, 3.85, 3.6, 'Learner & Classroom Support', 'Classroom assistance, learner-focused support, staff collaboration, and communication with parents and the HOD.');
addCard(slide, 8.8, 2.2, 3.85, 3.6, 'IT Support Foundation', 'CCNA networking training supported by knowledge of computer hardware, software, systems analysis, and programming basics.');

slide = pptx.addSlide('MASTER');
addTitle(slide, 'Next Steps', 'Portfolio Deliverables', 'A polished online presence for internship, IT support, data capturing, and administration opportunities.');
addCard(slide, 0.7, 2.2, 3.85, 2.8, 'Live Website', 'Publish the project through Bolt’s Publish button to receive the public portfolio URL.');
addCard(slide, 4.75, 2.2, 3.85, 2.8, 'Source Code', 'Download the project from Bolt or connect it to a GitHub repository for sharing with employers.');
addCard(slide, 8.8, 2.2, 3.85, 2.8, 'Presentation', 'This PowerPoint summarises Bridgette’s profile, qualifications, experience, skills, and career direction.');
slide.addText('Thank you', { x: 0.7, y: 5.65, w: 5, h: 0.45, fontSize: 24, bold: true, color: blue, margin: 0 });
slide.addText('Contact: gaotlhaelwe@gmail.com  |  081 533 3115 / 078 196 6493', { x: 0.7, y: 6.18, w: 8.5, h: 0.3, fontSize: 12, color: muted, margin: 0 });

await pptx.writeFile({ fileName: 'public/Bridgette_Gaotlhaelwe_Portfolio_Presentation.pptx' });
