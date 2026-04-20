import { Project } from "./interface";

export const links = [
  {
    name: "Home",
    path: "#home",
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
    path: "#",
  },
  {
    name: "X",
    path: "#",
  },
];

export const services = [
  "Photography",
  "Logo design",
  "Illustration",
  "Graphic design",
];

export const projects: Project[] = [
  {
    name: "Dusk & Grain",
    slug: "project-1",
    caption: "Film photography editorial",
    desc: "A visual exploration of golden hour light across urban and natural landscapes. Shot entirely on 35mm film, Dusk & Grain captures the quiet moments between dusk and dark — the kind of light that makes ordinary scenes feel cinematic.",
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
    name: "Scrawl",
    slug: "project-2",
    caption: "Doodle illustration series",
    desc: "Scrawl is a collection of loose, hand-drawn doodles that live somewhere between journaling and art. Each piece starts with no plan — just a pen and whatever comes out. The result is a series that feels personal, unfiltered, and oddly satisfying to look at.",
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
    name: "Ova Studio",
    slug: "project-3",
    caption: "Minimal identity design",
    desc: "A brand identity for a fictional creative studio built around the idea of simplicity as a statement. The Ova mark is derived from a single continuous stroke — adaptable, memorable, and designed to work across any medium.",
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
    name: "Terrain",
    slug: "project-4",
    caption: "Outdoor lifestyle brand",
    desc: "Terrain is a graphic design concept for an outdoor lifestyle brand targeting minimalist adventurers. The visual system draws from topographic maps, raw textures, and muted earth tones to create a brand that feels grounded and intentional.",
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
