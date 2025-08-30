export type Project = {
  id: string;
  title: string;
  year?: number;
  category: string;
  shortDescription: string;
  image?: string;

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
    year: 2025,
    category: 'Portfolio',
    shortDescription: 'horizon2k38.com',
    longDescription: `
This is my personal portfolio website, built with Next.js and Tailwind CSS, and deployed on Cloudflare Pages.
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

This project was supported by the 2023 Mitou Jr Program. The video of the final presentation is available [here](https://youtu.be/VJOOFltOJJk?si=TGLMjtME0t7FvCNH).

Additionally, this project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).

<iframe width="560" height="315" src="https://www.youtube.com/embed/YG5ikc-X_Kg?si=XNVUfqXj8AKbQrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `,
    image: '/images/projects/a9n-project.png',
    technologies: ['C++20', 'x86_64 Assembly'],
    githubLink: 'https://github.com/horizon2038/A9N',
    features: [
    ],
  },
  {
    id: 'a9nloader-rs',
    title: 'A9NLoader-rs',
    category: 'Rust-based Bootloader',
    shortDescription: 'Rust-based Bootloader for A9N Microkernel',
    longDescription: `
A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the *A9N Boot Protocol (x86_64)*.

It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using \`uefi-rs\`.
`,
    image: '/images/projects/a9nloader-rs.png',
    technologies: ['Rust', 'uefi-rs'],
    githubLink: 'https://github.com/horizon2038/A9NLoader-rs',
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

This project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).
`,
    image: '/images/projects/nun.png',
    technologies: ['Rust'],
    githubLink: 'https://github.com/horizon2038/Nun',
    features: [
    ],
  },
  {
    id: 'a9nloader',
    title: 'A9NLoader',
    category: 'Bootloader',
    shortDescription: 'Bootloader for A9N Microkernel',
    longDescription: `
A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the *A9N Boot Protocol (x86_64)*.

It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using EDK2.

This project was supported by the 2023 Mitou Jr Program. The video of the final presentation is available [here](https://youtu.be/VJOOFltOJJk?si=TGLMjtME0t7FvCNH).

Additionally, this project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).
`,
    image: '/images/projects/a9nloader.png',
    technologies: ['C', 'EDK2'],
    githubLink: 'https://github.com/horizon2038/A9NLoader',
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
