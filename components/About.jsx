import React from "react";
import Image from "next/image";
import { about } from "../config";

const About = () => {
    return (
        <section
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
                    <Image
                        height={500}
                        width={500}
                        className="rounded-xl"
                        src={"/assets/about.jpg"}
                        alt="about-pc-pic"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
