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
A9N is a capability-based microkernel, primarily implemented in C++20. It features a highly portable Hardware Abstraction Layer (HAL) and leverages the object-capability model to ensure strong security.

The kernel also achieves exceptionally high performance in inter-process communication (IPC).
Achieved world-leading IPC performance in cross-domain round-trip IPC benchmarks (590 cycles: Intel N150@3.6GHz).
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
    longDescription: `
Designed and implemented Nun, a framework and runtime for building user-mode operating systems on top of A9N Microkernel.

Demonstrated the rapid development of a functional user-mode OS in under 3 minutes during a live demo [in this video](https://youtu.be/YG5ikc-X_Kg?si=Y2bl2xmjPRgs90_p&t=856).
`,
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
    longDescription: `
A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the A9N Boot Protocol (x86_64).

It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using EDK2.
`,
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
    longDescription: `
A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the A9N Boot Protocol (x86_64).

It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using \`uefi-rs\`.
`,
    image: '/images/projects/a9nloader-rs.png',
    technologies: ['Rust', 'uefi-rs'],
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
