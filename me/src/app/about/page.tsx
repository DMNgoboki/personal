"use client";

import { serverskillslists, skillslists } from "@/components/SkillsList";

export default function About() {
  return (
    <div className="container mx-auto">
      <div className="flex  justify-center mt-[30px]">
        <div>About me</div>
      </div>
      <div className="flex mt-[30px] px-[20px] w-full justify-between">
        <div className="w-6/12">Get to know me!</div>
        <div className="w-6/12">
          <div>My Skills</div>
          <div>Client</div>
          <div className="flex flex-wrap gap-4">
            {skillslists.map((skillslist) => (
              <div key={skillslist.id}>
                <button className="btn btn-active btn-secondary">
                  {skillslist.icon}
                  {skillslist.title}
                </button>
              </div>
            ))}
          </div>
          <div>Server</div>
          <div className="flex flex-wrap gap-4">
            {serverskillslists.map((serverskillslist) => (
              <div key={serverskillslist.id}>
                <button className="btn btn-active btn-secondary">
                  {serverskillslist.icon}
                  {serverskillslist.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
