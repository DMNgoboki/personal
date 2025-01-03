"use client";

import { serverskillslists, skillslists } from "@/components/SkillsList";
import { Header } from "@/components/header/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "@/components/Use-follow-pointer";

export default function About() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="">
      <div className="container border mx-auto max-h-full bg-gradient-to-r from-purple-500 to-pink-500">
        <Header />
        <div className="flex justify-center mt-[30px]">
          <motion.div
            className="text-[30px] xl:text-[50px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            About me
          </motion.div>
        </div>
        <div className="flex mt-[30px] gap-[30px] px-[20px] w-full justify-between">
          <div className="w-6/12">
            <div className="text-[30px]">Get to know me!</div>
            <motion.div
              className="text-[20px] antialiased	mt-[20px]"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              I am a motivated, versatile individual who is always eager to take
              on new challenges. Additionally, I am a skilled full-stack
              developer with 1 year of experience in web development and a
              strong desire to learn new things.
            </motion.div>
          </div>
          <div className="w-6/12">
            <div className="text-[30px]">My Skills</div>
            <div className="text-[20px] mt-[20px]">Client</div>
            <motion.div
              className="box flex flex-wrap gap-4 mt-[8px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              {skillslists.map((skillslist) => (
                <div key={skillslist.id}>
                  <button className="btn btn-active btn-secondary">
                    {skillslist.icon}
                    {skillslist.title}
                  </button>
                </div>
              ))}
            </motion.div>
            <div className="text-[20px] mt-[10px]">Server</div>
            <motion.div
              className="flex flex-wrap gap-4 mt-[8px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              {serverskillslists.map((serverskillslist) => (
                <div key={serverskillslist.id}>
                  <button className="btn btn-active btn-secondary">
                    {serverskillslist.icon}
                    {serverskillslist.title}
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
