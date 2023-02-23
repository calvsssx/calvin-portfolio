import {
    SiKotlin,
    SiFirebase,
    SiFastlane,
    SiGmail,
    SiTypescript,
    SiTailwindcss,
    SiAntdesign,
    SiRedux,
    SiCsharp,
    SiDotnet,
    SiAzuredevops,
    SiVercel,
    SiMicrosoftsqlserver,
    SiAzurefunctions,
    SiDocker,
    SiPrisma,
    SiChakraui,
  } from "react-icons/si";
  import {
    FaReact,
    FaJs,
    FaGitAlt,
    FaAndroid,
    FaJava,
    FaLinkedin,
    FaStackOverflow,
    FaMedium,
    FaGithub,
    FaSass,
    FaAngular,
  } from "react-icons/fa";
  import { CgAlbum } from "react-icons/cg";
  import { TbBrandNextjs } from "react-icons/tb";
  
  const menuLinks = [
    { name: "About Me", route: "/about" },
    // { name: "Experience", route: "/experience" },
    // { name: "Projects", route: "/projects" },
    { name: "Github", route: "/github" },
    { name: "Articles", route: "/article" },
    { name: "Contact", route: "/contact" },
  ];
  
  const siteConfig = {
    
  };
  
  const resume = {
    url: "",
    icon: <CgAlbum />,
    name: "Resume",
  };
  
  const mobileTechStacks = [
    {
      name: "Android",
      icon: <FaAndroid fontSize="20px" />,
      url: "https://www.android.com/",
    },
    {
      name: "React Native",
      icon: <FaReact fontSize="20px" />,
      url: "https://reactnative.dev/",
    },
    {
      name: "Kotlin",
      icon: <SiKotlin fontSize="20px" />,
      url: "https://kotlinlang.org/",
    },
    {
      name: "Java",
      icon: <FaJava fontSize="20px" />,
      url: "https://www.java.com/en/",
    },
  ];
  
  const webTechStacks = [
    {
      name: ".NET",
      icon: <SiDotnet fontSize="20px" />,
      url: "https://dotnet.microsoft.com/en-us/",
    },
    {
      name: "CSharp",
      icon: <SiCsharp fontSize="20px" />,
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Angular",
      icon: <FaAngular fontSize="20px" />,
      url: "https://angular.io/",
    },
    {
      name: "React",
      icon: <FaReact fontSize="20px" />,
      url: "https://reactnative.dev/",
    },
    
    {
      name: "NextJS",
      icon: <TbBrandNextjs fontSize="20px" />,
      url: "https://nextjs.org/",
    },
    {
      name: "Typescript",
      icon: <SiTypescript fontSize="20px" />,
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Javascript",
      icon: <FaJs fontSize="20px" />,
      url: "https://www.javascript.com/",
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui fontSize="20px" />,
      url: "https://chakra-ui.com/",
    },
  ];
  
  const otherTechStacks = [
    {
      name: "Azure DevOps",
      icon: <SiAzuredevops fontSize="20px" />,
      url: "https://azure.microsoft.com/en-us/products/devops",
    },
    {
      name: "SSMS",
      icon: <SiMicrosoftsqlserver fontSize="20px" />,
      url: "https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms?view=sql-server-ver16",
    },
    {
      name: "Prisma",
      icon: <SiPrisma fontSize="20px" />,
      url: "https://www.prisma.io/",
    },
    {
      name: "Firebase",
      icon: <SiFirebase fontSize="20px" />,
      url: "https://firebase.google.com/",
    },
    {
      name: "Github & GitLab",
      icon: <FaGitAlt fontSize="20px" />,
      url: "https://www.gitlab.com/",
    },
    {
      name: "Vercel",
      icon: <SiVercel fontSize="20px" />,
      url: "https://vercel.com/",
    },
    {
      name: "Azure Cloud Functions",
      icon: <SiAzurefunctions fontSize="20px" />,
      url: "https://learn.microsoft.com/en-us/azure/azure-functions/",
    },
    {
      name: "Docker",
      icon: <SiDocker fontSize="20px" />,
      url: "https://www.docker.com/",
    },
  ];
  
  const companies = [
   {}
  ];
  
  const educations = [
    {}
  ];
  
  const sideProjects = [
    {
      name: "",
      imageUrl: "",
      alt: "",
      summary:
        "",
      link: "",
      tech: [
        '',
        "",
        "",
        ""
      ]
    },
  
  ];
  
  export {
    menuLinks,
    webTechStacks,
    mobileTechStacks,
    otherTechStacks,
    siteConfig,
    resume,
    companies,
    educations,
    sideProjects,
  };