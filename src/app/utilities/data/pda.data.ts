import { IProject } from '../IProject';

export const PdaData: IProject = {
  id: '1',
  name: 'PDA Application ⌨️',
  description:
    'A WinForm Application which will automate the Vessel Arrival and Departure at the port and track the activities which will be intern controlled by the Vessel Supervisor',
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    'Individual Contribution towards understanding requirement and developing the functionality.',
    'Direct communication with client to understand the requirement and estimation for the project.',
    'Working on Designing the layouts and developing the functionality in WinForms.',
    'Implemented an SOA using WCF Rest services in order to have a two-way communication with Oracle DB.',
    'Login through either Username or Email'
  ],
  tags: ['asp.net', 'asp.net core', 'WinForms'],
  techStuff: [
    'WinForms',
    'Oracle',
    'C#',
    'WCF',
    'Visual Studio 2010', 
    'Toad for Oracle', 
    'SVN'
  ],
  additionalData: []
};
