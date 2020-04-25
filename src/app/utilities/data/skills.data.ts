import { ISkill } from '../ISkill';

export const SKILLS_DATA: ISkill[] = [
  {
    type: 'Programming Language',
    names: [
      'C', 'C#', 'JavaScript', 'TypeScript', 'Python'
    ]
  },
  {
    type: 'Backend',
    names: [
      'Node.js & Express.js', 'ASP.NET Core/MVC/WebAPI'
    ]
  },
  {
    type: 'Frontend',
    names: [
      'Angular', 'React.js', 'CSS', 'HTML', 'jQuery'
    ]
  },
  {
    type: 'Database & ORM',
    names: [
      'SQL Server','Oracle', 'Entity Framework','MongoDB'
    ]
  },
  {
    type: 'Cloud',
    names: [
      'AWS::','EBS','ALB','S3','SNS', 'SQS','Lambda','WAF','CloudFront','Azure PaaS'
    ]
  },
  {
    type: 'Testing',
    names: [
      'NUnit','Jest', 'Karma','Jasmine'
    ]
  },
  {
    type: 'Others',
    names: [
      'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Intercom','JIRA',
    ]
  },
];
