import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { projects } from "../config";

const Projects = () => {
    return (
        <section id="projects" className="w-full h-auto P-2">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className="relative flex items justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                                >
                                    <Image
                                        className="rounded-xl group-hover:opacity-10"
                                        src={project.img}
                                        alt={project.alt}
                                    />
                                    <div className="hidden w-[65%] group-hover:block absolute top-[20%] md:top-[20%] lg:top-[25%] left-[50%] translate-x-[-50%]">
                                        <h3 className="text-xl text-white tracking-wider text-center">
                                            {project.title}
                                        </h3>
                                        <p className="pb-3 pt-1.5 text-white text-center">
                                            {"| "}
                                            {project.tech.map(
                                                (technology) =>
                                                    technology + " | "
                                            )}
                                        </p>
                                        <Link
                                            href={project.url}
                                            about={project.desc}
                                        >
                                            <p className="text-center py-3 bg-white text-gray-700 uppercase font-bold text-large cursor-pointer rounded-xl hover:text-[#5651e5] hover:scale-95">
                                                Read More
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
