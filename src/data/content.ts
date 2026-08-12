// Central content for AD Solution — keeps section components lean and consistent.

export type Service = {
  icon: string; // lucide icon name
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: 'Briefcase',
    title: 'Contract Staffing',
    description:
      'Flexible IT talent on demand. Scale your teams up or down with pre-screened contract professionals for short-term projects, critical deadlines, and specialized skill gaps.',
  },
  {
    icon: 'GitMerge',
    title: 'Contract-to-Hire',
    description:
      'Try before you commit. Evaluate a contractor on the job and convert them to a permanent hire with confidence — no surprise, no retraining curve.',
  },
  {
    icon: 'UserCheck',
    title: 'Direct Hire / Permanent Placement',
    description:
      'Find the right long-term fit. We source, screen, and deliver permanent IT professionals aligned to your culture, stack, and strategic roadmap.',
  },
  {
    icon: 'Crown',
    title: 'Executive Search',
    description:
      'Leadership that moves the needle. Our retained search practice places CIOs, CTOs, VP of Engineering, and senior IT leaders who drive transformation.',
  },
  {
    icon: 'Globe',
    title: 'Offshore Recruitment',
    description:
      'Global talent, local standards. We source skilled IT professionals from offshore markets to extend capacity and optimize cost without compromising quality.',
  },
  {
    icon: 'Network',
    title: 'Recruitment Process Outsourcing',
    description:
      'End-to-end recruitment on autopilot. We embed as your talent function — managing sourcing, screening, scheduling, and offer management at scale.',
  },
];

export type TalentArea = {
  icon: string;
  title: string;
  roles: string[];
};

export const talentAreas: TalentArea[] = [
  {
    icon: 'Code2',
    title: 'Software Engineering & Java Development',
    roles: ['Java Developer', 'Full Stack Engineer', 'Frontend Developer', 'DevOps Engineer', 'Cloud Architect'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Cybersecurity',
    roles: [' Cyber Security Engineer','Security Analyst', 'SOC Engineer', 'Cloud Security Engineer', 'IAM Engineer'],
  },
  {
    icon: 'Server',
    title: 'Network Engineering & Infrastructure',
    roles: ['Network Engineer', 'Network Security Engineer', 'Cloud Network Engineer', 'Infrastructure Lead', 'System Admin'],
  },
  {
    icon: 'Workflow',
    title: 'ServiceNow',
    roles: ['ServiceNow Developer', 'ServiceNow Admin', 'ITSM Consultant', 'ITOM Consultant','CMDB Specialist' ],
  },
  {
    icon: 'ClipboardList',
    title: 'Business Analysis & Product Delivery',
    roles: ['Business Analyst', 'Product Owner', 'Scrum Master', 'Product Manager', 'Program Manager'],
  },
  {
    icon: 'BrainCircuit',
    title: 'AI, Machine Learning & Data Science',
    roles: ['Data Scientist','AI/ML Engineer', 'MLOps Engineer', 'AI Researcher', 'Data Engineer'],
  },
];

export type Job = {
  id: string;
  title: string;
  location: string;
  experience: string;
  type: string;
  skills: string[];
  featured?: boolean;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
};

const DEFAULT_RESPONSIBILITIES = [
  'Collaborate with cross-functional teams to design, build, and ship reliable solutions.',
  'Participate in code/design reviews and uphold engineering best practices.',
  'Troubleshoot and resolve production issues in a timely manner.',
  'Document technical decisions and contribute to team knowledge sharing.',
];

const DEFAULT_REQUIREMENTS = [
  'Proven experience in a similar role, with strong communication skills.',
  'Comfortable working in a fast-paced, client-facing environment.',
  'Must be authorized to work in the United States.',
];

export const featuredJobs: Job[] = [
  {
    id: 'senior-java-developer-dallas',
    title: 'Senior Java Developer',
    location: 'Dallas, TX (Hybrid)',
    experience: '6-9 Years',
    type: 'Contract',
    skills: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Kafka'],
    featured: true,
    description:
      'We are looking for a Senior Java Developer to design and build scalable microservices for a fast-growing FinTech platform. You will work closely with architecture and DevOps teams to modernize legacy systems and ship new features on a modern Java 17 / Spring Boot stack.',
    responsibilities: [
      'Design, develop, and maintain microservices using Java 17 and Spring Boot.',
      'Build and optimize event-driven pipelines using Kafka.',
      'Deploy and manage services on AWS infrastructure.',
      'Partner with QA and DevOps to ensure high-quality, reliable releases.',
    ],
    requirements: [
      '6-9 years of professional Java development experience.',
      'Strong hands-on experience with Spring Boot and microservices architecture.',
      'Experience with AWS (ECS/EKS, S3, RDS) and Kafka.',
      'Must be authorized to work in the United States.',
    ],
  },
  {
    id: 'servicenow-developer-remote',
    title: 'ServiceNow Developer',
    location: 'Remote, US',
    experience: '4-7 Years',
    type: 'Contract-to-Hire',
    skills: ['ServiceNow', 'ITSM', 'Service Portal', 'JavaScript', 'REST API'],
    featured: true,
    description:
      'Join a growing enterprise IT team as a ServiceNow Developer, building and customizing ITSM workflows, Service Portal experiences, and REST integrations for a large-scale ServiceNow instance.',
    responsibilities: [
      'Configure and customize ServiceNow modules including ITSM and Service Portal.',
      'Develop REST/SOAP integrations between ServiceNow and third-party systems.',
      'Write client/server-side scripts using JavaScript and Glide APIs.',
      'Support release upgrades and platform health checks.',
    ],
    requirements: [
      '4-7 years of ServiceNow development experience.',
      'Strong JavaScript and REST API integration skills.',
      'ServiceNow CSA certification preferred.',
      'Must be authorized to work in the United States.',
    ],
  },
  {
    id: 'lead-cybersecurity-analyst-charlotte',
    title: 'Lead Cybersecurity Analyst',
    location: 'Charlotte, NC',
    experience: '8-12 Years',
    type: 'Permanent',
    skills: ['SIEM', 'Threat Hunting', 'NIST', 'Cloud Security', 'Incident Response'],
    featured: true,
    description:
      'A leading healthcare systems client is hiring a Lead Cybersecurity Analyst to head threat detection and incident response, mentor a growing SOC team, and mature the organization\'s NIST-aligned security posture.',
    responsibilities: [
      'Lead threat hunting and incident response efforts across the enterprise.',
      'Own and tune SIEM detection rules and playbooks.',
      'Mentor junior SOC analysts and lead post-incident reviews.',
      'Drive alignment to NIST and cloud security frameworks.',
    ],
    requirements: [
      '8-12 years of cybersecurity experience, including SOC leadership.',
      'Deep SIEM and threat-hunting expertise.',
      'Strong understanding of NIST frameworks and cloud security controls.',
      'Must be authorized to work in the United States.',
    ],
  },


  {
  id: 'ai-automation-engineer-nj-nyc',
  title: 'AI Engineer',
  location: 'NJ/NYC (Hybrid)',
  experience: '5-8 Years',
  type: 'Contract to Hire',
  skills: ['LLMs', 'GPT', 'Claude', 'Azure OpenAI', 'Microsoft Copilot', 'AI Workflows', 'Automation'],
  featured: true,
  description:
    'We’re hiring an AI Automation Engineer to design, build, and deploy production-ready AI solutions that automate workflows, improve decision-making, and deliver measurable business impact.',
  responsibilities: [
    'Design and deploy end-to-end AI solutions for business use cases.',
    'Build AI workflows using LLMs such as GPT, Claude, Azure OpenAI, and Copilot.',
    'Integrate AI capabilities into existing business tools and processes.',
    'Partner directly with stakeholders to scope, build, test, and deploy solutions.',
    'Develop production-ready AI tools with measurable business impact.',
  ],
  requirements: [
    '5-8 years of experience delivering technology or AI solutions.',
    'Proven experience deploying AI solutions into production environments.',
    'Hands-on experience with LLMs, automation, and AI workflows.',
    'Strong understanding of AI workflow design from input to model to output and user adoption.',
    'Ability to own delivery end-to-end, including scoping, design, development, testing, and deployment.',
    'Must be able to work hybrid in the NJ/NYC area.',
  ],
},

  {
    id: 'network-engineer-chicago',
    title: 'Network Engineer',
    location: 'Chicago, IL',
    experience: '4-6 Years',
    type: 'Contract',
    skills: ['Cisco', 'BGP/OSPF', 'Firewalls', 'VPN', 'Network Automation'],
    featured: true,
    description:
      'We are seeking a Network Engineer to support and evolve enterprise network infrastructure, including routing, firewalls, and VPN, with a growing focus on network automation.',
    responsibilities: [
      'Configure and maintain Cisco routing/switching infrastructure.',
      'Manage firewall policies and site-to-site/VPN connectivity.',
      'Troubleshoot complex network issues across BGP/OSPF environments.',
      'Build automation scripts to streamline network operations.',
    ],
    requirements: [
      '4-6 years of enterprise network engineering experience.',
      'Strong knowledge of BGP/OSPF routing protocols.',
      'Experience with firewall and VPN administration.',
      'Must be authorized to work in the United States.',
    ],
  },
  {
    id: 'business-analyst-banking-nyc',
    title: 'Business Analyst — Banking',
    location: 'New York, NY (Hybrid)',
    experience: '5-8 Years',
    type: 'Contract-to-Hire',
    skills: ['Requirements', 'Agile', 'SQL', 'JIRA', 'Stakeholder Mgmt'],
    featured: true,
    description:
      'A top banking client is looking for a Business Analyst to gather and document requirements, work across Agile teams, and drive delivery of key initiatives within a regulated financial environment.',
    responsibilities: [
      'Elicit and document business and functional requirements.',
      'Work within Agile ceremonies alongside product and engineering teams.',
      'Write SQL queries to validate data and support analysis.',
      'Manage stakeholder communication and expectations throughout delivery.',
    ],
    requirements: [
      '5-8 years of business analysis experience, ideally in banking/financial services.',
      'Strong Agile/JIRA experience.',
      'Working SQL proficiency.',
      'Must be authorized to work in the United States.',
    ],
  },
];


export const allJobs: Job[] = [...featuredJobs];//...additionalJobs];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: 'Successful Placements', value: 1000, suffix: '+' },
  { label: 'Hiring Partners', value: 100, suffix: '+' },
  { label: 'Vendor Network', value: 250, suffix: '+' },
  { label: 'Years of Experience', value: 10, suffix: '+' },
  { label: 'Candidate Database', value: 10000, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

// export type Testimonial = {
//   quote: string;
//   name: string;
//   title: string;
//   company: string;
//   variant: 'employer' | 'candidate';
// };

// export const testimonials: Testimonial[] = [
//   {
//     quote:
//       'AD Solution became an extension of our IT org. They filled three critical Java roles in under three weeks — all pre-screened, all strong. The quality of candidates is consistently above what we see from larger vendors.',
//     name: 'Michael Torres',
//     title: 'VP of Engineering',
//     company: 'FinTech Platform',
//     variant: 'employer',
//   },
//   {
//     quote:
//       'As a candidate, I never felt like just another resume. My recruiter understood my ServiceNow career goals, prepped me for every interview, and negotiated an offer I was genuinely happy with. Landmark moment in my career.',
//     name: 'Priya Sharma',
//     title: 'Senior ServiceNow Developer',
//     company: 'Placed Candidate',
//     variant: 'candidate',
//   },
//   {
//     quote:
//       'We engaged AD Solution for RPO on a 40-seat cloud migration program. They scaled sourcing overnight and maintained a 90%+ interview show-rate. Reliable, transparent, and genuinely embedded with our team.',
//     name: 'David Chen',
//     title: 'Director of Talent Acquisition',
//     company: 'Healthcare Systems',
//     variant: 'employer',
//   },
//   {
//     quote:
//       'I was returning to the US market after years abroad. AD Solution marketed my resume to the right employers, scheduled five interviews in two weeks, and I landed a permanent role with a top employer. Truly career-changing support.',
//     name: 'Rahul Verma',
//     title: 'Lead Data Engineer',
//     company: 'Placed Candidate',
//     variant: 'candidate',
//   },
// ];

export type Client = { name: string; tag: string; logo: string };
 
export const clients: Client[] = [
  { name: 'JPMorganChase', tag: 'Financial Services', logo: '/clients/jpmorganchase.png' },
  { name: 'UnitedHealth Group', tag: 'Healthcare', logo: '/clients/unitedhealthcare.png' },
  { name: 'Microsoft', tag: 'Technology', logo: '/clients/microsoft.webp' },
  { name: 'Walmart', tag: 'Retail', logo: '/clients/walmart.png' },
  { name: 'The Home Depot', tag: 'Retail / Home Improvement', logo: '/clients/home-depot.webp' },
  { name: 'Cigna', tag: 'Healthcare', logo: '/clients/cigna.png' },
  { name: 'ExxonMobil', tag: 'Energy', logo: '/clients/exxonmobil.png' },
  { name: 'Nike', tag: 'Apparel / Footwear', logo: '/clients/nike.png' },
];
