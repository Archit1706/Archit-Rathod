import React from "react";
import { about } from "../config";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center pt-16 py-8"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    {about.map((para, index) => {
                        return (
                            <p key={index} className="py-2 text-gray-600">
                                {para}
                            </p>
                        );
                    })}

                    {/* (Mongo DB, Express, React and Node JS) */}
                    <a href="#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects
                        </p>
                    </a>
                </div>
                <div className="w-[60%] md:w-[90%] my-auto mx-auto rounded-xl shadow-xl shadow-gray-400 p-3 flex items-center justify-center hover:scale-105 ease-in duration-300">
                    <img
                        className="rounded-xl"
                        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="about-pc-pic"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
