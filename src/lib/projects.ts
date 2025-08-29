export type Project = {
  id: string; // 一意のID
  title: string;
  category: string; // 例: Web Development, Mobile App, Game
  shortDescription: string; // カードに表示する短い説明
  image?: string; // プロジェクトの代表画像パス (例: /images/project-alpha.png)

  longDescription: string;
  technologies: string[];
  role?: string; // 担当した役割
  githubLink?: string;
  demoLink?: string;
  features?: string[];
};

const projects: Project[] = [
  {
    id: 'project-horizon',
    title: 'Kernel of Horizon',
    category: 'Portfolio',
    shortDescription: 'horizon2k38.com',
    longDescription: `
このWebsite自体もProjectの1つです．
    `,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX', 'Cloudflare Pages'],
    role: 'Frontend Development, UI/UX Design',
    githubLink: 'https://github.com/horizon2038/horizon2k38.com', // 実際のURLに置き換えてください
    demoLink: 'https://horizon2k38.com',
    features: [
      'Static Site Generation (SSG)',
      'Responsive Design with Tailwind CSS',
      'Markdown-based Blog with Syntax Highlighting',
      'Pagination and Tagging System',
      'Custom Design Tokens',
    ],
  },
  {
    id: 'a9n-microkernel',
    title: 'A9N Microkernel',
    category: 'Capability-based Microkernel',
    shortDescription: '3rd-generation Capability-based Microkernel',
    longDescription: `
A9N Microkernelは，
    `,
    image: '/images/projects/a9n-project.png',
    technologies: ['C++20', 'x86_64 Assembly'],
    githubLink: 'https://github.com/horizon2038/A9N',
    demoLink: 'https://a9n-project.org',
    features: [
    ],
  },
  {
    id: 'nun',
    title: 'Nun',
    category: 'OS Framework/Runtime',
    shortDescription: 'User-mode OS framework and runtime for A9N Microkernel',
    longDescription: ``,
    technologies: ['Rust'],
    githubLink: 'https://github.com/horizon2038/Nun',
    demoLink: 'https://a9n-project.org',
    features: [
    ],
  },
  {
    id: 'a9nloader',
    title: 'A9NLoader',
    category: 'Bootloader',
    shortDescription: 'Bootloader for A9N Microkernel',
    longDescription: ``,
    technologies: ['C', 'EDK2'],
    githubLink: 'https://github.com/horizon2038/A9NLoader',
    demoLink: 'https://a9n-project.org',
    features: [
    ],
  },
  {
    id: 'a9nloader-rs',
    title: 'A9NLoader-rs',
    category: 'Rust-based Bootloader',
    shortDescription: 'Rust-based Bootloader for A9N Microkernel',
    longDescription: ``,
    image: '/images/projects/a9nloader-rs.png',
    technologies: ['Rust', 'UEFI'],
    githubLink: 'https://github.com/horizon2038/A9NLoader-rs',
    features: [
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
