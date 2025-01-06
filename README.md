# Fizz Demo Website

A dynamic, interactive website built with Next.js and Three.js, featuring smooth animations and content management through Prismic. This project showcases modern web development practices with a focus on performance and user experience.

## Technologies Used

- **Next.js** - React framework for production-grade applications
- **Prismic CMS** - Headless Content Management System for dynamic content
- **Three.js** - 3D graphics library for creating immersive web experiences
- **GSAP** - Professional-grade animation library
- **TypeScript** - Strongly typed programming language built on JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management solution

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Set up Prismic:
   - Create a Prismic account and project
   - Configure your slice machine
   - Set up your environment variables

4. Start the development environment:
```bash
npm run dev
```

This command will concurrently run:
- Next.js development server on `http://localhost:3000`
- Slice Machine for Prismic on `http://localhost:9999`

## Available Scripts

- `npm run dev` - Starts both Next.js and Slice Machine in development mode
- `npm run build` - Creates a production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint for code quality
- `npm run format` - Formats code using Prettier
- `npm run slicemachine` - Runs Prismic Slice Machine independently

## Project Structure

```
├── components/        # React components
├── pages/            # Next.js pages
├── public/           # Static assets
├── slices/           # Prismic slice components
├── styles/           # Global styles and Tailwind configuration
├── types/            # TypeScript type definitions
└── utils/            # Utility functions and helpers
```

## Features

- Responsive design with Tailwind CSS
- 3D graphics and animations using Three.js and GSAP
- Dynamic content management through Prismic CMS
- TypeScript for enhanced development experience
- Modern development tooling with ESLint and Prettier
- Optimized performance with Next.js

## Deployment

This project is configured for deployment on Vercel. The live demo can be viewed at: [https://fizz-demo.vercel.app/](https://fizz-demo.vercel.app/)

To deploy your own instance:
1. Create a Vercel account
2. Connect your repository
3. Configure your environment variables
4. Deploy

## Contributing

While this project was created for learning purposes, contributions are welcome:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Acknowledgments

- Original tutorial creator (Please add the specific credit)
- Prismic for the starter template and CMS functionality
- Three.js community for 3D graphics resources
- GSAP for animation capabilities

## Support

For questions or issues, please open an issue in the repository.