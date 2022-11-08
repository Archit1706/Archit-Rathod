import React from "react";
import Edusys from "../public/assets/projects/edusys.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../config";

const ProjectDetails = () => {
    const router = useRouter();
    const { project } = router.query;
    let projectData = projects.find((p) => p.url === `/${project}`);
    if (!projectData) projectData = projects[0];

    return (
        <div className="w-full">
            <div className="w-screen h-[40vh] lg:h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absoute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={projectData.img}
                    alt={projectData.alt}
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white z-10">
                    <h2 className="py-2">{projectData.title}</h2>
                    <h3>
                        {"| "}
                        {projectData.tech.map((technology) => technology + " | ")}
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        {projectData.desc}
                    </p>
                    <a href={projectData.link} target="__blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    </a>
                    <a href={projectData.github} target="__blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Code</button>
                    </a>

                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">

                            {projectData.tech.map((technology, index) => {
                                return (
                                    <p key={index} className="text-gray-600 py-2 flex items-center ">
                                        <RiRadioButtonFill className="pr-2" />{" "}
                                        {technology}
                                    </p>
                                );
                            })}

                            {/* <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p>
                            <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p>
                            <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p> */}

                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;
