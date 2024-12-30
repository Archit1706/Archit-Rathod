// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import AnimationWrapper from "./AnimationWrapper";
// import { projects } from "../config";

// const Projects = () => {
//     const [visibleProjects, setVisibleProjects] = useState(6);

//     const loadMoreProjects = () => {
//         setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
//     };
//     return (
//         <section id="projects" className="w-full h-auto P-2">
//             <div className="max-w-[1240px] mx-auto px-2 py-16">
//                 <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
//                     Projects
//                 </p>
//                 <h2 className="py-4">What I&apos;ve Built</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.slice(0, visibleProjects).map((project, index) => {
//                         return (
//                             <AnimationWrapper key={index}>
//                                 <div
//                                     key={index}
//                                     className="relative flex items justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
//                                 >
//                                     <Image
//                                         className="rounded-xl group-hover:opacity-10"
//                                         src={project.img}
//                                         alt={project.alt}
//                                     />
//                                     <div className="hidden w-[65%] group-hover:block absolute top-[20%] md:top-[20%] lg:top-[25%] left-[50%] translate-x-[-50%]">
//                                         <h3 className="text-xl text-white tracking-wider text-center">
//                                             {project.title}
//                                         </h3>
//                                         <p className="pb-3 pt-1.5 text-white text-center">
//                                             {"| "}
//                                             {project.tech.map(
//                                                 (technology) =>
//                                                     technology + " | "
//                                             )}
//                                         </p>
//                                         <Link
//                                             href={"/project" + project.url}
//                                             about={project.desc}
//                                         >
//                                             <p className="text-center py-3 bg-white text-gray-700 uppercase font-bold text-large cursor-pointer rounded-xl hover:text-[#5651e5] hover:scale-95">
//                                                 Read More
//                                             </p>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </AnimationWrapper>
//                         );
//                     })}
//                 </div>
//                 {visibleProjects < projects.length && (
//                     <div className="text-center mt-4">
//                         <button
//                             onClick={loadMoreProjects}
//                             className="bg-[#5651e5] text-white px-4 py-2 rounded-md"
//                         >
//                             Load More
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Projects;


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { projects } from "../config";

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
    };

    return (
        <section id="projects" className="w-full h-auto p-2 dark:bg-gray-900">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#a29bfe]">
                    Projects
                </p>
                <h2 className="py-4 dark:text-white">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleProjects).map((project, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className="relative flex items justify-center h-auto shadow-xl shadow-gray-400 dark:shadow-sm dark:shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:hover:bg-gradient-to-r dark:from-[#a29bfe] dark:to-[#81ecec]"
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
                                            href={"/project" + project.url}
                                            about={project.desc}
                                        >
                                            <p className="text-center py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase font-bold text-large cursor-pointer rounded-xl hover:text-[#5651e5] dark:hover:text-[#a29bfe] hover:scale-95">
                                                Read More
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        );
                    })}
                </div>
                {visibleProjects < projects.length && (
                    <div className="text-center mt-4">
                        <button
                            onClick={loadMoreProjects}
                            className="bg-[#5651e5] dark:bg-[#a29bfe] text-white px-4 py-2 rounded-md hover:bg-[#4338ca] dark:hover:bg-[#6c5ce7]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
