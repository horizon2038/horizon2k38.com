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

## Acknowledgments

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

## Acknowledgments

This project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).
`,
    image: '/images/projects/nun.png',
    technologies: ['Rust'],
    githubLink: 'https://github.com/horizon2038/Nun',
    features: [
    ],
  },
  {
    id: 'koito',
    title: 'KOITO',
    category: 'Microkernel-based OS',
    shortDescription: 'Microkernel-based OS using A9N Microkernel and Nun',
    longDescription: `
*INFO: This project is currently private and will be made public in the future.*

KOITO is an OS written in Rust, implemented on top of the A9N Microkernel using Nun.
It features a user-level memory manager with a Buddy System and SLAB Allocator.

## Acknowledgments

This project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).
  `,
    image: '/images/projects/koito.png',
    technologies: ['Rust'],
  },
  {
    id: 'a9nloader',
    title: 'A9NLoader',
    category: 'Bootloader',
    shortDescription: 'Bootloader for A9N Microkernel',
    longDescription: `
A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the *A9N Boot Protocol (x86_64)*.

It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using EDK2.

## Acknowledgments

This project was supported by the 2023 Mitou Jr Program. The video of the final presentation is available [here](https://youtu.be/VJOOFltOJJk?si=TGLMjtME0t7FvCNH).

Additionally, this project was supported by the 2024 Mitou IT Program. The video of the final presentation is available [here](https://youtu.be/YG5ikc-X_Kg?si=_lui-6JyiUlO3mpV).
`,
    image: '/images/projects/a9nloader.png',
    technologies: ['C', 'EDK2'],
    githubLink: 'https://github.com/horizon2038/A9NLoader',
    features: [
    ],
  },
  {
    id: 'liba9n::variant',
    title: 'liba9n::variant',
    category: 'C++ Library',
    shortDescription: 'C++20 type-safe union (like std::variant) implementation',
    longDescription: `
A C++20 implementation of a type-safe union, similar to \`std::variant\`.
It supports features like pattern matching and visitor patterns, making it a versatile tool for managing multiple types in a single variable.
    `,
    image: '/images/projects/liba9n-variant.png',
    technologies: ['C++'],
    githubLink: 'https://github.com/horizon2038/liba9n-variant',
  },
  {
    id: 'shizukesa-server',
    title: 'Shizukesa Server',
    category: 'Protocol Server',
    shortDescription: 'Mini-project for a university course',
    longDescription: `
This is the Shizukesa Protocol Server, a mini-project implemented as part of a university course.

The Shizukesa Server collects a client's location and noise level. In response to a request, it provides a summary generated by a GPT.
This helps measure concentration potential and assists users in finding an optimal workspace.
    `,
    technologies: ['C++'],
    githubLink: 'https://github.com/horizon2038/shizukesa-server',
  },
  {
    id: 'h5n-printf',
    title: 'h5n-printf',
    category: 'C Library',
    shortDescription: 'Simple and educational printf implementation',
    longDescription: `
A simple and educational implementation of the \`printf\` function in C.
It supports basic format specifiers and is designed for learning purposes.
    `,
    image: '/images/projects/h5n-printf.png',
    technologies: ['C'],
    githubLink: 'https://github.com/horizon2038/h5n-printf',
  },
  {
    id: 'td4-emulator',
    title: 'TD4 Emulator',
    category: 'CPU Emulator',
    shortDescription: 'TD4(4-bit CPU) Emulator',
    longDescription: `
This is an emulator for TD4, a 4-bit CPU described in the book "How to Build a CPU. (Japanese: CPUの作り方)".
    `,
    image: '/images/projects/td4-emulator.png',
    technologies: ['C++'],
    githubLink: 'https://github.com/horizon2038/td4-emulator',
  },
  {
    id: 'b7k-interpreter',
    title: 'B7K Interpreter',
    category: 'Interpreter',
    shortDescription: 'Interpreter for the brainfuck programming language',
    longDescription: `
This is an extremely simple interpreter for the Brainfuck programming language. The code was implemented in about 30 minutes.
    `,
    image: '/images/projects/b7k-interpreter.png',
    technologies: ['C++'],
    githubLink: 'https://github.com/horizon2038/b7k-interpreter',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
