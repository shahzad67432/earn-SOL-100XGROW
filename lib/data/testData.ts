// data.ts




export const basicTestQuestions = [
    {
      question: "What is Solana?",
      options: ["A blockchain platform", "A programming language", "A browser", "An app"],
      correctAnswer: 0,
    },
    {
      question: "What is the consensus mechanism of Solana?",
      options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of History"],
      correctAnswer: 3,
    },
    // Add more questions as needed
];
export const premiumTestQuestions = [
  {
    question: "What is Solana?",
    options: ["A blockchain platform", "A programming language", "A browser", "An app"],
    correctAnswer: 0,
  },
  {
    question: "What is the consensus mechanism of Solana?",
    options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of History"],
    correctAnswer: 3,
  },
  // Add more questions as needed
];
export const ContestQuestion = [
  {
    question: "What is Solana?",
    options: ["A blockchain platform", "A programming language", "A browser", "An app"],
    correctAnswer: 0,
  },
  {
    question: "What is the consensus mechanism of Solana?",
    options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of History"],
    correctAnswer: 3,
  },
  // Add more questions as needed
];
  
export const tests = [{
  id: 1,
  title: "Test Your Solana Knowledge",
  description: "test description",
  duration: 10,
  type: "basic",
  questions: basicTestQuestions,
},{
  id: 2,
  title: "Test Your Solana Knowledge",
  description: "test description",
  duration: 10,
  type: "premium",
  questions: premiumTestQuestions,
},{
  id: 3,
  title: "Solana Contest",
  description: "test description",
  duration: 10,
  type: "premium",
  questions: ContestQuestion,
},{
  id: 4,
  title: "Solana Contest",
  description: "test description",
  duration: 10,
  type: "premium",
  questions: ContestQuestion,
},{
  id: 5,
  title: "Solana Contest",
  description: "test description",
  duration: 10,
  type: "basic",
  questions: ContestQuestion,
},{
  id: 6,
  title: "Solana Contest",
  description: "test description",
  duration: 10,
  type: "contest",
  questions: ContestQuestion,
}]


export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      {label: 'About 100XSOL', link: '/'},
      {label: 'community', link:'/blogs'},
      {label: 'Solana Ecosystem', link: 'https://solana.com/'},
      {label:'Solana Careers', link:'https://jobs.solana.com/jobs'},
    ],
  },
  {
    title: 'Our Community',
    links: [
      {label: 'linkedIn page', link: 'https://www.linkedin.com/in/shahzad-ali-225893298/?lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3B1whunz1BRe%2B5qYy6FtRTXQ%3D%3D'},
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Support', value: '+92-312-762964' },
    { label: 'Email Support', value: 'shaa1891640@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook-solana.svg',
    '/instagram-solana.svg',
    '/twitter-solana.svg',
    '/youtube-solana.svg',
    '/medium-solana.svg',
  ],
};
