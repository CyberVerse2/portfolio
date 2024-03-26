export const info = {
  baseUrl: 'chinaza.vercel.app',
  name: 'Ejiofor Celestine',
  jobDescription: 'Backend Engineer',
  about: `I'm a Backend Engineer based in Enugu, Nigeria.
   I enjoy building applications that solves real-world problems and are of value to people and buisnesses.
   I have been working for 2 years, with experience in NodeJS, Express, Nestjs, Typescript, MongoDB, MySQL, PostgresSQL and GraphQL.
   With time, I have also gained knowledge of cloud services like Microsoft Azure and Amazon Web Services, frontend frameworks like ReactJS, TailwindCSS and languages like Python.
  `,

  experience: [
    {
      name: 'DMS',
      location: 'Lagos, Nigeria',
      startDate: '0ct 2023',
      endDate: 'Present',
      description: [
        '· Using the module design pattern, I refactor the codebase, removing redundant functions and writing efficient code leading to a removal of 600 lines compared to the previous codebase.',
        '· Integrate the Nabla API, which allows doctors to generate clinical notes in real time during patient consultations, allowing us to land more clients and stand out from our competitors',
        '· Create a CI/CD workflow with GitHub Actions to run unit tests on the API before deployment which reduced frequent downtimes and customer complaints by 70%, which earned me a salary bonus.',
        '· Document the API endpoints with Postman to enable easier integration with the frontend, saving hours of zoom meetings.'
      ]
    },

    {
      name: 'Paatee',
      location: 'Lagos, Nigeria',
      startDate: 'Sept 2023',
      endDate: 'Nov 2023',
      description: [
        '- Outlined the project requirements and created a design plan for the company’s backend.',
        '- Built a robust authentication system for the E-commerce App, which allowed us to save costs on third party authentication services.',
        '- Implemented the API leveraging GraphQL schema, resulting in a 30% reduction in development time.',
        '- Contributed to the documentation of endpoints and processes for easier integration and future reference.'
      ]
    }
  ],

  education: [
    {
      name: 'University of Nigeria, Nsukka',
      location: 'Nsukka, Enugu, Nigeria',
      startDate: '2023',
      endDate: 'Present',
      description: ['Bsc. Computer Science']
    },
    {
      name: 'Future Academy Africa',
      location: 'Lagos, Nigeria',
      startDate: 'June 2023',
      endDate: 'August 2023',
      description: ['Backend Development']
    }
  ],

  socialMedia: {
    twitter: 'https://twitter.com/TheCyberverse1',
    github: 'https://github.com/Cyberverse2',
    email: 'mailto:ejioforcelestine77@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ejiofor-celestine-740b90251/',
    reddit: 'https://www.reddit.com/u/ejioforcelestine77'
  },

  projects: [
    {
      title: 'Reefa',
      description:
        'Reefa is a marketing app that helps sellers promote their products using campaigns eg Giveaways and rewards referrers with cash or discounts',
      tools: ['Express', 'PostgresSQL', 'Typescript', 'Bloc'],
      isFeatured: true,
      thumbnail:
        'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1706390070/fvf9o20sl4zelltf6uks.png',
      githubUrl: 'https://github.com/Cyberverse2/reefa-backend',
      liveUrl: 'https://reefa.webflow.io'
    },
    {
      title: 'DMS',
      description:
        'DMS is a hospital management system that allows hospitals to digitally manage patients, appointments, doctors, labs results, pharmacy drugs and invoices.',
      tools: ['Express', 'MongoDB', 'Javascript', 'Docker', 'S3', 'Nabla'],
      isFeatured: true,
      thumbnail:
        'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1706390059/a7ouifsurgyu00tltylq.png',
      liveUrl: 'https://mydms.bio'
    },
    {
      title: 'Squid',
      description:
        ' It provides a unified environment where developers can collaborate, discuss code, manage GitHub issues, and streamline development workflows in real time. ',
      tools: ['React', 'Typescript', 'Convex'],
      isFeatured: true,
      thumbnail:
        'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1711453957/zdan6zvs2tp9xy7noneb.png',
      liveUrl: 'https://squid-seven.vercel.app',
      githubUrl: 'https://github.com/Cyberverse2/squid'
    }
  ]
};
