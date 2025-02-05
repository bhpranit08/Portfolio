import React from "react";

import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/js.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/nodejs.svg";
import mongo from "../assets/skills/mongodb.svg";
import express from "../assets/skills/express-js-seeklogo.svg";
import php from "../assets/skills/php.svg";
import python from "../assets/skills/python.svg";
import socketio from "../assets/skills/socketio.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import daisyui from "../assets/skills/daisyui.svg";
import mysql from "../assets/skills/mysql.svg";

const Skills = () => {
    const skills = [
        html,
        css,
        js,
        react,
        tailwind,
        daisyui,
        socketio,
        node,
        mongo,
        express,
        python,
        php,
        mysql,
    ];

    return (
        <div
            className="w-full flex flex-col items-center justify-center gap-10 p-4"
            id="skills"
        >
            <h1 className="text-4xl md:text-6xl text-lime-400">SKILLS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 lg:gap-32 justify-center">
                {skills.map((skill, index) => (
                    <>
                        <img
                            src={skill}
                            alt="skill"
                            key={index}
                            className="w-20 h-20 md:w-30 md:h-30 transition-all duration-300 transform hover:scale-125"
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Skills;
