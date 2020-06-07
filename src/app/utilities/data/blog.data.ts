import { IProject } from '../IProject';

export const BlogData: IProject = {
  id: '2',
  name: 'Personal Blog Website 📝 ',
  description:
    'A place where i write',
  isFeatured: true,
  projectLink: 'https://github.com/masoodbinmohammad/blog',
  liveUrl: 'https://blog-masoodbinmohammad.netlify.app',
  features: [
    'A simple blog website built using Gatsby and hosted using Netlify',
    'Group posts by tags',
    'Reuseable Components & Responsive UI',
    'Display posts from markdown files using GraphQL query'
  ],
  tags: ['react.js', 'css'],
  techStuff: ['ReactJS', 'GraphQL', 'CSS', 'TypeScript'],
  additionalData: []
};
