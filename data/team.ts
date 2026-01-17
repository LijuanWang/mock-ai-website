export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  snippet: string;
  portrait: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Research Scientist",
    discipline: "Research",
    snippet: "Leading our efforts to push the boundaries of what's possible in machine learning, with a focus on making AI systems more capable and safer.",
    portrait: "/images/team/portrait-1.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "VP of Engineering",
    discipline: "Engineering",
    snippet: "Building the infrastructure and systems that power AI at scale, ensuring our products are reliable, fast, and accessible to billions.",
    portrait: "/images/team/portrait-2.jpg",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Director of AI Safety",
    discipline: "Research",
    snippet: "Ensuring that as AI systems become more powerful, they remain aligned with human values and beneficial for society.",
    portrait: "/images/team/portrait-3.jpg",
  },
  {
    name: "James O'Brien",
    role: "Head of Product",
    discipline: "Product",
    snippet: "Translating cutting-edge AI research into products that solve real problems for millions of users around the world.",
    portrait: "/images/team/portrait-4.jpg",
  },
  {
    name: "Dr. Wei Zhang",
    role: "Principal Research Scientist",
    discipline: "Research",
    snippet: "Pioneering new approaches to language understanding and generation, with groundbreaking work on context and reasoning.",
    portrait: "/images/team/portrait-5.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Design Director",
    discipline: "Design",
    snippet: "Creating intuitive, beautiful experiences that make AI accessible to everyone, regardless of technical background.",
    portrait: "/images/team/portrait-6.jpg",
  },
  {
    name: "David Kim",
    role: "Senior Staff Engineer",
    discipline: "Engineering",
    snippet: "Architecting distributed systems that handle millions of AI requests per second while maintaining low latency and high reliability.",
    portrait: "/images/team/portrait-7.jpg",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Research Manager - Multimodal AI",
    discipline: "Research",
    snippet: "Building AI systems that understand and generate content across text, images, and audio for richer human-AI interaction.",
    portrait: "/images/team/portrait-8.jpg",
  },
  {
    name: "Michael Brown",
    role: "Principal PM Manager",
    discipline: "Product",
    snippet: "Defining the product strategy for our AI platform, ensuring we build tools that developers love and trust.",
    portrait: "/images/team/portrait-9.jpg",
  },
  {
    name: "Dr. Amanda Foster",
    role: "Research Scientist - Alignment",
    discipline: "Research",
    snippet: "Working on technical approaches to ensure AI systems understand and follow human intentions accurately and safely.",
    portrait: "/images/team/portrait-10.jpg",
  },
  {
    name: "Robert Taylor",
    role: "Engineering Manager",
    discipline: "Engineering",
    snippet: "Leading the team that builds and maintains the APIs that millions of developers use to integrate AI into their applications.",
    portrait: "/images/team/portrait-11.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Senior Research Scientist",
    discipline: "Research",
    snippet: "Advancing the frontier of efficient AI, developing techniques that make powerful models accessible on everyday devices.",
    portrait: "/images/team/portrait-12.jpg",
  },
];

export const featuredTeam = {
  name: "MAI Superintelligence Team",
  description: "Our dedicated research group focused on long-term AI safety and the development of systems that can tackle humanity's greatest challenges. This interdisciplinary team combines expertise in machine learning, cognitive science, and philosophy.",
  cta: "Learn more about our research",
  link: "/about",
};
