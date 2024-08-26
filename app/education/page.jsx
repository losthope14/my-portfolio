"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

{/*
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sapiente",
    href: "",
  },
];
*/}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident natus exercitationem distinctio amet.",
  items: [
    {
      institution: "Tadulako University",
      degree: "Bachelor Degree of Computer Science",
      duration: "2020 - 2024"
    },
    {
      institution: "Tensorflow Certificate Program",
      degree: "Tensorflow Developer Certificate",
      duration: "2024"
    },
    {
      institution: "Bangkit Academy",
      degree: "Bangkit Machine Learning Cohort",
      duration: "2023"
    },
    {
      institution: "Digital Talent Scholarship",
      degree: "Database Design and Programming with SQL",
      duration: "2023"
    },
  ],
}

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
       }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-12"
    >
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col gap-20">
          <div className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-4xl font-bold">{ education.title }</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ education.description }</p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{ item.duration }</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{ item.degree }</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{ item.institution }</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
          </div>  
        </div> 
      </div>
    </motion.div>
  );
}

export default Education