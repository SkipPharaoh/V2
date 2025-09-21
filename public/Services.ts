// Add some placeholder images - you can replace these with actual service images
import WebsiteIcon from "@public/assets/images/cpu-laptop.png";
import PortfolioIcon from "@public/assets/images/animated-black-woman.png";
import LandingIcon from "@public/assets/images/system-design.png";
import ConsultingIcon from "@public/assets/images/problemsolver.png";

export const servicesData = [
  {
    id: 0,
    title: "Custom Business Website",
    desc: "Bring your brand online with a professional, modern website tailored for your business. Includes responsive design, SEO-friendly setup, and a clean user experience.",
    price: "Starting at $800",
    link: "https://buy.stripe.com/your-link",
    image: WebsiteIcon, // Added image property
  },
  {
    id: 1,
    title: "Personal / Creative Portfolio",
    desc: "Showcase your work, art, or personal brand with a unique portfolio website. Designed for impact, optimized for visibility.",
    price: "Starting at $500",
    link: "https://buy.stripe.com/your-link",
    image: PortfolioIcon, // Added image property
  },
  {
    id: 2,
    title: "Landing Page",
    desc: "A single, high-converting page to launch your product, event, or campaign. Fast turnaround, mobile-friendly, built for results.",
    price: "Starting at $300",
    link: "https://buy.stripe.com/your-link",
    image: LandingIcon, // Added image property
  },
  {
    id: 3,
    title: "Web Development Consulting",
    desc: "Need expert guidance on your web project? I'll help you plan, strategize, and execute your vision with professional consultation.",
    price: "$100/hr or packages available",
    link: "https://buy.stripe.com/your-link",
    image: ConsultingIcon, // Added image property
  },
];
