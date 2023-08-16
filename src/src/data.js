import { nanoid } from "nanoid";
import {
  // athath
  athaththumb,
  athath1,
  athath2,
  athath3,
  // job hunter
  jobthumb,
  job1,
  job2,
  job3,
  job4,
  // time zone
  timethumb,
  time1,
  time2,
  time3,
  time4,
  // photo editor
  photothumb,
  photo1,
  // trainer
  trainerthumb,
  trainer1,
  // color-generator
  colorthumb,
  color1,
  // designer
  desthumb,
  des1,
} from "./assets/images";

export const navLinks = [
  { id: nanoid(), text: "About", url: "/about" },
  { id: nanoid(), text: "Portfolio", url: "/portfolio" },
  // { id: nanoid(), text: "Skills", url: "/skills" },
  { id: nanoid(), text: "Contact", url: "/contact" },
];

export const portfolio = {
  // main projects
  projects: [
    // newest first
    // time-zone
    {
      id: "p1",
      thumbnail: timethumb,
      images: [time1, time2, time3, time4],
      title: "Time Zone",
      short_description:
        "Time Zone is an e-commerce website that sells watches. The website offers a wide variety of watches.",
      description:
        "Time Zone is an e-commerce website offers a wide variety of watches for men.",

      features: [
        "A user-friendly interface that makes it easy to find the perfect watch for you",
        "The ability to filter products by brand, style, price, and more",
        "The ability to add products to your cart and checkout securely",
        "To checkout, you must first create an account or log in to an existing account.",
        "We offer free shipping on orders over $50 and a satisfaction guarantee on all of our products.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: [
        "HTML",
        "CSS",
        "Sass",
        "React",
        "React-Styled-Components",
        "REDUX-TOOLKIT",
      ],
      urls: {
        demo: "https://timezonee.netlify.app/",
        git: "https://github.com/iahmedfarag/TimeZone",
      },
    },
    // job-hunter
    {
      id: "p2",
      thumbnail: jobthumb,
      images: [job1, job2, job3, job4],
      title: "Job Hunter",
      short_description:
        "For employers, Job Hunter provides a variety of tools to help them post and manage job listings.",
      description:
        "Job Hunter is a website that helps job seekers find and apply for jobs. The website is easy to use.",

      features: [
        "Job search: You can browse the job listings by location, job title, and other criteria.",
        "Job application: You can apply for jobs with just a few clicks of a button.",
        "Profile editing: Job Hunter allows you to edit your profile.",
        "Pagination: Job Hunter has pagination for all jobs pages. This means that you can view more jobs by clicking the 'Next' button.",
        "Job filtering: Job Hunter allows you to filter jobs by location, job title, and other criteria.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: [
        "HTML",
        "CSS",
        "Sass",
        "React",
        "React-Styled-Components",
        "REDUX-TOOLKIT",
      ],
      urls: {
        demo: "https://jobhunteer.netlify.app/",
        git: "https://github.com/iahmedfarag/jobHunter",
      },
    },
    // athath
    {
      id: "p3",
      thumbnail: athaththumb,
      images: [athath1, athath2, athath3],
      title: "Athath",
      short_description:
        "Furniture e-commerce is the sale of furniture and home goods online.",
      description:
        "Furniture website offers a wide variety of furniture for your home, including sofas, chairs, tables, beds, and more.",
      features: [
        "A user-friendly interface that makes it easy to find the perfect furniture for you.",
        "The ability to  products by category, company, color, price, and more.",
        "The ability to sort products by price, name, and more.",
        "The ability to display products by grid view or list view.",
        "Secure payment processing with Stripe.",
        "User login and registration with Auth0.",
        "To checkout, you must first create an account or log in to an existing account.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: ["HTML", "CSS", "Sass", "React", "React-Styled-Components"],
      urls: {
        demo: "https://athathe.netlify.app/",
        git: "https://github.com/iahmedfarag/Athath",
      },
    },
    // designer
    {
      id: "p4",
      thumbnail: desthumb,
      images: [des1],
      title: "DES",
      short_description:
        "DES is a designer portfolio website that showcases the work of designer DES.",
      description:
        "The website is designed to be user-friendly and to provide visitors with all of the information they need to learn more about DES and his work. The website is also designed to be visually appealing and to showcase DES's creativity.",
      features: [
        "The single project layout, just clik on each project on portfolio section, you couldn't scroll once you clicked on it.",
        "Pretty cool slider using react-slick in testimonials section.",
        "The experience section also includes some pretty cool animations that help to tell the story of DES's career. ",
        "Don't have to say that the website is responsive for all devices.",
      ],
      skills: ["HTML", "CSS", "Sass", "React", "react-slick"],
      urls: {
        demo: "https://designerprofile.netlify.app/",
        git: "https://github.com/iahmedfarag/designer-website",
      },
    },
  ],
  // extra projects
  extra: [
    // newest first
    // color-gen
    {
      id: "e1",
      thumbnail: colorthumb,
      images: [colorthumb, color1],
      title: "Color Generator",
      short_description:
        "Color Generator is a website that helps you choose the perfect color for your project.",
      description:
        "Color Generator is a website that helps you choose the perfect color for your project. The website allows you to enter a color, and it will generate 20 colors that are percentages of your color.",

      features: [
        "Enter a color and the website will generate 20 colors that are percentages of your color.",
        "Click on any of the colors to copy it to your clipboard.",
        "Adjust the intensity of the filters to create a custom look.",
        "The website shows a notification when you copy a color to your clipboard.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: ["HTML", "CSS", "Sass", "Reactjs", "Values.js"],
      urls: {
        demo: "https://color-gener.netlify.app/",
        git: "https://github.com/iahmedfarag/color-generator",
      },
    },
    // trainer
    {
      id: "e2",
      thumbnail: trainerthumb,
      images: [trainer1],
      title: "Trainer",
      short_description:
        "Trainer is a website that helps people achieve their fitness goals. The website offers a variety of courses.",
      description:
        "Trainer is a website that helps people achieve their fitness goals. The website offers a variety of courses. The website also has a gallery of photos and videos of Trainer clients who have achieved their fitness goals.",

      features: [
        "The website has seven section.",
        "Each section appears with a pretty cool animation.",
        "The website has a scroll-to-top button that appears at the bottom of the screen when you scroll down. This button makes it easy to get back to the top of the page.",
        "The website Responsive for all devices.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: ["HTML", "CSS", "Sass", "JavaScript"],
      urls: {
        demo: "https://trainerr.netlify.app/",
        git: "https://github.com/iahmedfarag/gym-trainer",
      },
    },
    // photo-editor
    {
      id: "e3",
      thumbnail: photothumb,
      images: [photothumb, photo1],
      title: "Photo Editor",
      short_description:
        "This website allows you to edit your photos with a variety of filters.",
      description:
        "This website allows you to edit your photos with a variety of filters. You can upload your own photos. Once you have uploaded your photo, you can choose from a variety of filters to apply to it.",

      features: [
        "Upload your own photos",
        "Apply a variety of filters to your photos.",
        "Adjust the intensity of the filters to create a custom look.",
        "Download your edited photos to your computer.",
        "Don't have to say that the website is responsive for all devices",
      ],
      skills: ["HTML", "CSS", "Sass", "JavaScript"],
      urls: {
        demo: "https://photoeditorr.netlify.app/",
        git: "https://github.com/iahmedfarag/photo-editor",
      },
    },
  ],
};
