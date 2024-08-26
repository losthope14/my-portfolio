"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    project: "Merdeka Belajar",
    description: "This project was completed as part of a Systems Information course assignment. It uses CodeIgniter and MySQL to implement a Google Single Sign-On (SSO) feature for user authentication. Additionally, it includes a system where users can enroll in the first three courses for free, with subsequent enrollments requiring the completion of assignments from prior courses.",
    stack: [
      {
        name: "PHP",
      },
      {
        name: "CodeIgniter"
      },
      {
        name: "MySQL"
      }
    ],
    image: "/assets/work/online-edu.png",
    live: "#",
    github: "https://github.com/losthope14/Website-Online-Education"
  },
  {
    num: "02",
    category: "fullstack",
    project: "Easy RE",
    description: "This project was undertaken to complete the Web Programming 2 course assignment. It utilizes CodeIgniter and MySQL to handle basic CRUD (Create, Read, Update, Delete) operations for real estate data, providing a robust platform for managing property information",
    stack: [
      {
        name: "PHP",
      },
      {
        name: "CodeIgniter"
      },
      {
        name: "MySQL"
      }
    ],
    image: "/assets/work/real-estate.png",
    live: "#",
    github: "https://github.com/losthope14/Website-Manajemen-Real-Estate"
  },
  {
    num: "03",
    category: "frontend",
    project: "Omdb Public API",
    description: "This project was completed as a course assignment and involves using PHP and JavaScript. It features a simple user interface designed to search for movie data by film title keywords, allowing users to easily find and view information about movies",
    stack: [
      {
        name: "PHP",
      },
      {
        name: "JavaScript"
      },
      {
        name: "MySQL"
      },
    ],
    image: "/assets/work/public-api.png",
    live: "#",
    github: "https://github.com/losthope14/Omdb-Public-API-Simple-UI"
  },
  {
    num: "04",
    category: "frontend",
    project: "Simple Rest API",
    description: "This simple API was developed as a final project for the Belajar Membuat Aplikasi Back-End untuk Pemula course offered by Dicoding. The API utilizes JavaScript and Node.js to build an efficient server-side environment.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Node.js"
      },
    ],
    image: "/assets/work/rest-api.png",
    live: "#",
    github: "https://github.com/losthope14/Submission-Back-End-Pemula-Dicoding.git"
  },
  {
    num: "05",
    category: "frontend",
    project: "Analytic Dashboard",
    description: "This project was completed as a submission for a course at Dicoding. It utilizes Python and libraries such as Numpy, Pandas, Matplotlib, Seaborn, and Streamlit to analyze e-commerce data. The project involves processing sales data and creating a dashboard to visualize key metrics such as sales and revenue",
    stack: [
      {
        name: "Python",
      },
      {
        name: "Pandas"
      },
      {
        name: "Streamlit"
      },
    ],
    image: "/assets/work/data-analytics.png",
    live: "#",
    github: "https://github.com/losthope14/Simple-Data-Analytics-Dashboard"
  },
  {
    num: "06",
    category: "fullstack",
    project: "Iot Monitoring Sim",
    description: "This project was completed as part of a course assignment and integrates several technologies to provide a comprehensive solution for data monitoring. The application utilizes PHP, JavaScript, MQTT protocol, and Node.js to build a dynamic and responsive platform.",
    stack: [
      {
        name: "PHP",
      },
      {
        name: "JavaScript"
      },
      {
        name: "MQTT"
      },
      {
        name: "C++"
      },
    ],
    image: "/assets/work/iot-monitoring-sim.png",
    live: "#",
    github: "https://github.com/losthope14/Proyek-Monitoring-IoT-Sederhana"
  },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      const currentIndex = swiper.activeIndex;
      setProject(projects[currentIndex]);
    };

    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  { project.num }
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  { project.project }
                </h2>
                <p className="text-white/60">
                  { project.description.length > 90 ? `${project.description.slice(0, 90)}...` : project.description}
                </p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xl text-accent"
                      >
                        { item.name }
                        { index !== project.stack.length -1 && "," }
                      </li>
                    )
                  })}
                </ul>

                <div className="border border-white/20"></div>

                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="w-full"
                    >
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}

                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Work