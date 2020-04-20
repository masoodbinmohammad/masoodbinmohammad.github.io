import { IProject } from '../IProject';

export const WebOpsData: IProject = {
  id: '3',
  name: 'WebOps  🚚 ',
  description:
    'WebOps Logistics platform is a nSAAS solution that provides Medical Device Manufacturers, Distributors and Providers with accurate tracking and ordering for a broad range of medical devices.',
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    'Created a RESTful Web API service using ASP.NET Web API to process various incoming json requests and interacting with database to validate, generate the data and to return the adequate response.',
    'Used the code first approach with the Entity Framework to generate models and the dbcontext.',
    'Created stored procedure, trigger on the database to provide/insert specific data from multiple tables for Web API services.',
    'Used the unit of work and repository pattern for access to database data.',
    'Used Log4Net to log the necessary details and exceptions in the database.',
    'Used Agile/Scrum software development methodology.'
  ],
  tags: ['asp.net', 'asp.net MVC', 'WebAPI'],
  techStuff: [
    'C#',
    'ASP.NET Web API',
    'Entity Framework',
    'SQL',
    'JSON',
    'Jenkins', 
    'Git',
    'Postman',
    'Visual Studio 2017',
    'SSMS 2014',
    'JIRA'
  ],
  additionalData: []
};
