import React, { useEffect } from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../../config";
import AnimationWrapper from "../../components/AnimationWrapper";

const ProjectDetails = () => {
    const router = useRouter();
    const { project } = router.query;
    let projectData = projects.find((p) => p.url === `/${project}`);
    if (!projectData) projectData = projects[0];

    useEffect(() => {
        document.title = projectData.title + " | Archit Rathod";
    }, [projectData])

    return (
        <AnimationWrapper>
            <div className="w-full">
                <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
                    <div className="w-full h-[40vh] lg:h-[50vh] relative">
                        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/70 dark:bg-black/50 z-10" />
                        <Image
                            className="absolute z-1"
                            layout="fill"
                            objectFit="cover"
                            src={projectData.img}
                            alt={projectData.alt}
                        />
                        <div className="absolute top-[70%] w-[90%] left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white dark:text-gray-300 z-10">
                            <h2 className="py-2">{projectData.title}</h2>
                            <h3 className="dark:text-gray-400">
                                {"| "}
                                {projectData.tech.map((technology) => technology + " | ")}
                            </h3>
                        </div>
                    </div>

                    <AnimationWrapper>
                        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                            <div className="col-span-4">
                                <p className="dark:text-gray-400">Project</p>
                                <h2 className="dark:text-gray-300">Overview</h2>
                                <p className="dark:text-gray-500">{projectData.desc}</p>
                                {projectData.link != "" && (
                                    <a href={projectData.link} target="__blank" rel="noreferrer">
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 dark:bg-gray-800 text-white rounded-md">
                                            Demo
                                        </button>
                                    </a>
                                )}

                                {projectData.github != "" && (
                                    <a href={projectData.github} target="__blank" rel="noreferrer">
                                        <button className="px-8 py-2 mt-4 bg-gray-700 dark:bg-gray-800 text-white rounded-md">
                                            Code
                                        </button>
                                    </a>
                                )}
                            </div>
                            <div className="col-span-4 md:col-span-1 shadow-xl dark:shadow-gray-700 shadow-gray-400 rounded-xl p-4">
                                <div className="p-2">
                                    <p className="text-center font-bold pb-2 dark:text-gray-300">
                                        Technologies
                                    </p>
                                    <AnimationWrapper>
                                        <div className="grid grid-cols-3 md:grid-cols-1">
                                            {projectData.tech.map((technology, index) => (
                                                <p
                                                    key={index}
                                                    className="text-gray-600 dark:text-gray-200 py-2 flex items-center"
                                                >
                                                    <RiRadioButtonFill className="pr-2" />{" "}
                                                    {technology}
                                                </p>
                                            ))}
                                        </div>
                                    </AnimationWrapper>
                                </div>
                            </div>
                            <Link href="/#projects">
                                <p className="underline cursor-pointer text-xl dark:text-gray-300">Back</p>
                            </Link>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>

        </AnimationWrapper>
    );
};

export default ProjectDetails;
