import { Project } from "./interface";

export const links = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Works",
    path: "#works",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Services",
    path: "#services",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    path: "#"
  },
  {
    name: "X",
    path: "#"
  }
]

export const services = [
  "Photography",
  "Logo design",
  "Illustration",
  "Graphic design",
];

export const projects: Project[] = [
  {
    name: "Project 1",
    slug: "project-1",
    caption: "Project caption",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    service: "Photography",
    tag: "Concept",
    images: [
      "/images/photography/img1.webp",
      "/images/photography/img2.webp",
      "/images/photography/img3.webp",
      "/images/photography/img4.webp",
      "/images/photography/img5.webp",
    ],
  },
  {
    name: "Project 2",
    slug: "project-2",
    caption: "Project caption",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    service: "Illustration",
    tag: "Concept",
    images: [
      "/images/illustration/img1.webp",
      "/images/illustration/img2.webp",
      "/images/illustration/img3.webp",
      "/images/illustration/img4.webp",
      "/images/illustration/img5.webp",
    ],
  },
  {
    name: "Project 3",
    slug: "project-3",
    caption: "Project caption",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    service: "Logo design",
    tag: "Concept",
    images: [
      "/images/logo-design/img1.webp",
      "/images/logo-design/img2.webp",
      "/images/logo-design/img3.webp",
      "/images/logo-design/img4.webp",
      "/images/logo-design/img5.webp",
    ],
  },
  {
    name: "Project 4",
    slug: "project-4",
    caption: "Project caption",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
    service: "Graphic design",
    tag: "Concept",
    images: [
      "/images/graphic-design/img1.webp",
      "/images/graphic-design/img2.webp",
      "/images/graphic-design/img3.webp",
      "/images/graphic-design/img4.webp",
      "/images/graphic-design/img5.webp",
    ],
  },
];
