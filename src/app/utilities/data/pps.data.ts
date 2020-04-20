import { IProject } from '../IProject';

export const PPSData: IProject = {
  id: '4',
  name: 'PPS  🚚 ',
  description:
    'The PPS project was introduced in order to deal with smaller clients for WebOps to order, track and deliver the products.',
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    'Created a RESTful Web API service using ASP.NET Core Web API to process various incoming json requests and interacting with database to validate, generate the data and to return the adequate response.',
    'Used the code first from database approach with the Entity Framework to generate models and the dbcontext.',
    'Wrote LINQ expressions for access to filtered data from the database',
    'Used Log4Net to log the necessary details and exceptions in the database.',
    'Used Agile/Scrum software development methodology.'

  ],
  tags: ['asp.net', 'asp.net core'],
  techStuff: [
    'C#', 
    'ASP.NET Core WEB API',
    'Entity Framework Core', 
    'SQL', 
    'JSON', 
    'Postman', 
    'SQL', 
    'IIS',
    'Jenkins',
    'Git',
    'JIRA', 
    'Visual Studio 2017', 
    'SSMS 2016'
  ],
  additionalData: []
};
