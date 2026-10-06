# Bridgette Lesedi Gaotlhaelwe Portfolio

Professional portfolio website for Bridgette Lesedi Gaotlhaelwe, an IT support and administration professional.

## Included

- Responsive portfolio website
- Bridgette's professional summary, skills, experience, education, and training
- Contact section with email and phone details
- Downloadable PowerPoint presentation at `public/Bridgette_Gaotlhaelwe_Portfolio_Presentation.pptx`
- Presentation generator at `scripts/create-presentation.mjs`

## Important files

- `src/data/portfolio.ts` — portfolio content
- `src/components/` — page sections and interactions
- `public/Bridgette_Gaotlhaelwe_Portfolio_Presentation.pptx` — PowerPoint presentation
- `public/cv/Bridgette_Gaotlhaelwe_CV.pdf` — reserved filename for the CV download

## Publishing

Use Bolt's **Publish** button to create the public live website URL. After publishing, copy the generated URL into your application, CV, and presentation if you want to share it with employers.

For a GitHub repository, download the project from Bolt and upload the complete project folder to a new repository. The project is ready for deployment to Vercel, Netlify, GitHub Pages, or another static hosting service.

## Presentation

To regenerate the PowerPoint after changing the portfolio information, run:

```text
npm run presentation
```

The generated file is written to `public/Bridgette_Gaotlhaelwe_Portfolio_Presentation.pptx`.
