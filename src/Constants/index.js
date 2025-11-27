export const projectPages = [
  {
    pageId: 1,
    mainProject: {
      id: 1,
      title: "Summarist",
      description:
        "Summarist is a premium book-summary platform built with Next.js, Firebase, and Stripe. It offers secure authentication, a clean browsing experience, and a custom audio player for listening to summaries. The platform includes debounced search, dynamic routing, protected premium content, and real-time subscription validation. Performance is optimized using RTK Query caching, lazy loading, and SEO-friendly page structures.",
      mobileDescription:
        "A fast, full-stack book-summary platform built with Next.js, Firebase, and Stripe. Features a custom audio player, debounced search, protected premium content, and performance optimizations that improved interaction speed by 20–30%.",
      imgPath: "projects/Summarist.png",
      link: "https://summarist-advance-virtual-internshi.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/summarist-advance-virtual-internship",
    },
  
    smallProject1: {
      id: 2,
      title: "Skinstric A.I.",
      description:
        "Skinstric AI is a responsive, AI-powered skin analysis application built with React. It uses a multi-step form to guide users through image submission, featuring options for both live camera capture and gallery uploads. The platform integrates with a backend AI service to process the images and uses React Router for navigation. The design is enhanced with GSAP for smooth animations, ensuring a user-friendly experience.",
      mobileDescription:
        "A responsive AI-powered skin analysis platform built with React, GSAP, and modern CSS. Features a multi-step form that reduced user drop-off by 40% and allows image submission via live camera.",
      imgPath: "projects/SkinstricA.I.png",
      link: "https://skinstric-a-i.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/Skinstric-A.I",
    },
  
    smallProject2: {
      id: 3,
      title: "NFT Marketplace",
      description:
        "One of my internship projects was a dynamic React NFT landing page. It features real-time API data for various sections, including filtering, and uses React Slick, countdowns, and dynamic routing for detailed views. Built with reusable components and secure environment variables, it leverages AOS for smooth animations, providing a professional UX.",
      mobileDescription:
        "React NFT landing page. Real-time API data, filters, React Slick, dynamic routing. Built with reusable components, env vars, AOS animations for professional UX.",
      imgPath: "projects/Project1.png",
      link: "https://shafin-internship.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/shafin-internship",
    },
  },


  {
    pageId: 2,
    mainProject: {
      id: 4,
      title: "GetHired Job Portal",
      description:
        "This dynamic job portal, built with React, serves both candidates and recruiters with protected routes and onboarding. Candidates can browse, apply, and track jobs, while recruiters can post, manage applicants, and control listings. It features MDEditor, Country-State-City library, TailwindCSS/shadcn/ui for styling, and uses Supabase with Clerk for authentication.",
      imgPath: "projects/Project2.png",
      mobileDescription:
        "React job portal for candidates / recruiters. Protected routes, onboarding. Candidates: browse, apply, track jobs. Recruiters: post, manage applicants, control listings. Uses MDEditor, CSC library, Tailwind/shadcn, Supabase/Clerk.",
      link: "https://get-hired-ten.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/GetHired",
    },

    smallProject1: {
      id: 5,
      title: "Library Ecommerce Website",
      description:
        "This is a React-based online library e-commerce project where users can browse and select books from categories like featured books and discounted books. It features advanced filtering options, allowing users to sort by rating, price (low to high, and high to low). Users can then view detailed book information on a dedicated page and utilize the add-to-cart functionality for desired items. The project also includes a recommended books section to enhance discovery, and loading states are implemented for a smooth user experience.",
      mobileDescription:
        "React e-commerce for online library. Browse featured/discounted books. Advanced filtering (rating, price). Book details, add-to-cart. Recommended books, loading states.",
      imgPath: "projects/Project5.png",
      link: "https://library-psi-ten.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/React-Library",
    },
  
    smallProject2: {
      id: 6,
      title: "Movie Mania",
      description:
        "MovieMania, is a React-based movie application where users can search for movies and filter by top-rated, top-seller, or upcoming titles. It features dynamic routing for detailed movie views, allowing users to watch YouTube teasers via a play icon. Loading states are implemented for improved UI/UX, and all data is powered by the TMDB API.",
      mobileDescription:
        "React movie app: search, filter (top-rated, upcoming, etc.). Dynamic routing for details, YouTube teasers. Loading states for UI/UX. Uses TMDB API.",
      imgPath: "projects/Project3.png",
      link: "https://react-movie-mania-rho.vercel.app/",
      git: "https://github.com/ShafinKhan-Pathan/React-MovieMania",
    },
  },
];
export const words = [
  {
    text: "Ideas",
    imgPath: "words/ideas.svg",
  },
  {
    text: "Code",
    imgPath: "words/code.svg",
  },
  {
    text: "Concepts",
    imgPath: "words/concepts.svg",
  },
  {
    text: "Designs",
    imgPath: "words/designs.svg",
  },
];
export const FrontendSkills = [
  { id: 1, name: "HTML", imgPath: "skills/HTML.png", category: "Frontend" },
  { id: 2, name: "CSS", imgPath: "skills/CSS.png", category: "Frontend" },
  { id: 3, name: "JavaScript", imgPath: "skills/JS.png", category: "Frontend" },
  { id: 12, name: "TypeScript", imgPath: "skills/TypeScript.png", category: "Frontend" },
  { id: 4, name: "React", imgPath: "skills/React.png", category: "Frontend" },
];
export const AdditionalSkills = [
  {
    id: 5,
    name: "Next.js",
    imgPath: "skills/nextjs.png",
    category: "Frontend",
  },
  {
    id: 13,
    name: "Redux",
    imgPath: "skills/Redux.png",
    category: "Frontend",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    imgPath: "skills/tailwindcss.png",
    category: "Frontend",
  },
];
export const Tools = [
  { id: 7, name: "Figma", imgPath: "skills/figma.png", category: "Tools" },
  { id: 8, name: "VS Code", imgPath: "skills/vscode.png", category: "Tools" },
  { id: 9, name: "Git & GitHub", imgPath: "skills/git.png", category: "Tools" },
  {
    id: 10,
    name: "Firebase",
    imgPath: "skills/firebase.png",
    category: "Tools",
  },
  { id: 11, name: "Vercel", imgPath: "skills/vercel.png", category: "Tools" },
  { id: 14, name: "Stripe", imgPath: "skills/stripe.png", category: "Tools" },
];
