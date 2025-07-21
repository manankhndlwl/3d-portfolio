export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
}

export const skills: Skill[] = [
  { skill_name: 'HTML5', Image: '/html.png', width: 80, height: 80 },
  { skill_name: 'CSS', Image: '/css.png', width: 80, height: 80 },
  { skill_name: 'JavaScript', Image: '/js.png', width: 65, height: 65 },
  { skill_name: 'TypeScript', Image: '/ts.png', width: 80, height: 80 },
  { skill_name: 'React', Image: '/react.png', width: 80, height: 80 },
  { skill_name: 'React Native', Image: '/react.png', width: 80, height: 80 },
  { skill_name: 'Next.js', Image: '/next.png', width: 80, height: 80 },
  { skill_name: 'Redux', Image: '/redux.png', width: 80, height: 80 },
  { skill_name: 'Node.js', Image: '/node-js.png', width: 80, height: 80 },
  { skill_name: 'Express.js', Image: '/express.png', width: 80, height: 80 },
  { skill_name: 'PostgreSQL', Image: '/postger.png', width: 70, height: 70 },
  { skill_name: 'MongoDB', Image: '/mongo.png', width: 70, height: 70 },
  { skill_name: 'GraphQL', Image: '/graphql.png', width: 80, height: 80 },
  { skill_name: 'Hasura', Image: '/graphql.png', width: 80, height: 80 },
  { skill_name: 'Docker', Image: '/docker.webp', width: 70, height: 70 },
  { skill_name: 'AWS SQS', Image: '/aws.png', width: 70, height: 70 },
  { skill_name: 'Firebase', Image: '/firebase.png', width: 70, height: 70 },
  { skill_name: 'Material UI', Image: '/tailwind.png', width: 80, height: 80 },
  { skill_name: 'Git', Image: '/gitlab.png', width: 80, height: 80 },
]

export const Socials = [
  {
    name: 'LinkedIn',
    src: '/linkedin.svg',
    link: 'https://linkedin.com/in/mnnkhndlwl',
  },
  {
    name: 'GitHub',
    src: '/github.svg',
    link: 'https://github.com/mnnkhndlwl',
  },
  {
    name: 'LeetCode',
    src: '/leetcode.svg',
    link: 'https://leetcode.com/u/Grx_9/',
  },
]

// Personal Information
export const PersonalInfo = {
  name: 'Manan Khandelwal',
  title: 'Full Stack Developer',
  email: 'khandelwalmanan05@gmail.com',
  phone: '+919810585686',
  location: 'Delhi, India',
  linkedin: 'https://linkedin.com/in/mnnkhndlwl',
  github: 'https://github.com/mnnkhndlwl',
  leetcode: 'https://leetcode.com/u/Grx_9/',
}
