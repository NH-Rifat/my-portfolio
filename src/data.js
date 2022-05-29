//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
// import Project2 from './assets/img/projects/p4.webp';
// import Project3 from './assets/img/projects/g-1.jpg';
// import Project4 from './assets/img/projects/p3.webp';
// import Project5 from './assets/img/projects/p4.webp';
// import Project6 from './assets/img/projects/p5.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
// import SkillImg9 from './assets/img/skills/nodejs.png';
// import SkillImg10 from './assets/img/skills/git.png';
// import SkillImg11 from './assets/img/skills/figma.png';
// import SkillImg12 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'car dealer warehouse',
    category: 'React/node js',
    repo_link: 'https://github.com/NH-Rifat/car_warehouse_management',
    live_link: 'https://car-dealer-407f1.web.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Doctors portal',
    category: 'React/node js',
    repo_link: 'https://github.com/NH-Rifat/car_warehouse_management',
    live_link: 'https://car-dealer-407f1.web.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'car parts inventory',
    category: 'React/node js',
    repo_link: 'https://github.com/NH-Rifat/car_warehouse_management',
    live_link: 'https://car-dealer-407f1.web.app/',
  },
  {
    id: '10',
    image: Project3,
    name: 'Todo App',
    category: 'React/node js',
    repo_link: 'https://github.com/NH-Rifat/React-todo-App',
    live_link: 'https://todo-app-20b59.web.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Travel Guide',
    category: 'React',
    repo_link: 'https://github.com/NH-Rifat/Travel-Guide-Application',
    live_link: 'https://travel-guide-4388b.web.app/',
  },
  {
    id: '5',
    image: Project5,
    name: 'Book shopping',
    category: 'React',
    repo_link:
      'https://github.com/NH-Rifat/javascript-book-shopping-application',
    live_link: 'https://javascrip-book-shopping.netlify.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'Ema-jhon simple',
    category: 'React',
    repo_link: 'https://github.com/NH-Rifat/Travel-Guide-Application',
    live_link: 'https://travel-guide-4388b.web.app/',
  },
  {
    id: '7',
    image: Project1,
    name: 'Smart phone Garage',
    category: 'JS/API',
    repo_link: 'https://github.com/NH-Rifat/smart__phone__garage-using-api',
    live_link: 'https://phone-garage-with-api.netlify.app/',
  },
  {
    id: '8',
    image: Project2,
    name: 'Panda Ecommerce',
    category: 'UI/UX design',
    repo_link: 'https://github.com/NH-Rifat/panad-ecommerce',
    live_link: 'https://travel-guide-4388b.web.app/',
  },
  {
    id: '9',
    image: Project3,
    name: 'Hot Gadget',
    category: 'UI/UX design',
    repo_link: 'https://github.com/NH-Rifat/Hot-gadget-using-bootstrap',
    live_link: 'https://panda-ecommerce-design.netlify.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React/node js',
  },
  {
    name: 'React',
  },

  {
    name: 'JS/API',
  },
  {
    name: 'UI/UX Design',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
