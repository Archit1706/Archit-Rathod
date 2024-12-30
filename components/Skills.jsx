// import React from "react";
// import Image from "next/image";
// import { languages, databases, tools } from "../config";
// import AnimationWrapper from "./AnimationWrapper";

// const Skills = () => {
//     return (
//         <section id="skills" className="w-full p-2 pt-20 ">
//             <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
//                 <p className="uppercase text-xl tracking-widest text-[#5651e5]">
//                     Skills
//                 </p>
//                 <h2 className="py-4">Technologies I have worked on.</h2>

//                 <h3 className="text-3xl py-8">Scripts / Languages</h3>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
//                     {languages.map((language, index) => {
//                         return (
//                             <AnimationWrapper key={index}>
//                                 <div
//                                     key={index}
//                                     className={`p-4 shadow-lg shadow-gray-300 hover:shadow-${language.color} rounded-xl hover:scale-105 ease-in duration-300`}
//                                 >
//                                     <div className="grid grid-cols-2 gap-4 justify-center items-center">
//                                         <div className="m-auto">
//                                             <Image
//                                                 key={index}
//                                                 src={language.img}
//                                                 width="80"
//                                                 height="80"
//                                                 alt={language.alt}
//                                             />
//                                         </div>
//                                         <div className="flex flex-col items-center justify-center">
//                                             <h3>{language.name}</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </AnimationWrapper>
//                         );
//                     })}
//                 </div>

//                 <h3 className="text-3xl py-8">Databases</h3>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
//                     {databases.map((database, index) => {
//                         return (
//                             <AnimationWrapper key={index}>
//                                 <div
//                                     key={index}
//                                     className={`p-4 shadow-lg shadow-gray-300 hover:shadow-${database.color} rounded-xl hover:scale-105 ease-in duration-300`}
//                                 >
//                                     <div className="grid grid-cols-2 gap-4 justify-center items-center">
//                                         <div className="m-auto">
//                                             <Image
//                                                 key={index}
//                                                 src={database.img}
//                                                 width="80"
//                                                 height="80"
//                                                 alt={database.alt}
//                                             />
//                                         </div>
//                                         <div className="flex flex-col items-center justify-center">
//                                             <h3>{database.name}</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </AnimationWrapper>
//                         );
//                     })}
//                 </div>

//                 <h3 className="text-3xl py-8">Frameworks, Libraries, Tools</h3>

//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
//                     {tools.map((tool, index) => {
//                         return (
//                             <AnimationWrapper key={index}>
//                                 <div
//                                     key={index}
//                                     className={`p-4 shadow-lg shadow-gray-300 hover:shadow-${tool.color} rounded-xl hover:scale-105 ease-in duration-300`}
//                                 >
//                                     <div className="grid grid-cols-2 gap-4 justify-center items-center">
//                                         <div className="m-auto">
//                                             <Image
//                                                 key={index}
//                                                 src={tool.img}
//                                                 width="80"
//                                                 height="80"
//                                                 alt={tool.alt}
//                                             />
//                                         </div>
//                                         <div className="flex flex-col items-center justify-center">
//                                             <h3>{tool.name}</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </AnimationWrapper>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;


import React from "react";
import Image from "next/image";
import { languages, databases, tools } from "../config";
import AnimationWrapper from "./AnimationWrapper";

const Skills = () => {
    return (
        <section id="skills" className="w-full p-2 pt-20 dark:bg-gray-900">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
                <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#a29bfe]">
                    Skills
                </p>
                <h2 className="py-4 dark:text-white">Technologies I have worked on.</h2>

                <h3 className="text-3xl py-8 dark:text-gray-200">Scripts / Languages</h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                    {languages.map((language, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className={`p-4 shadow-lg shadow-gray-300 dark:shadow-gray-800 hover:shadow-${language.color} rounded-xl hover:scale-105 ease-in duration-300 dark:hover:shadow-${language.color}`}
                                >
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                key={index}
                                                src={language.img}
                                                width="80"
                                                height="80"
                                                alt={language.alt}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="dark:text-gray-200">{language.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        );
                    })}
                </div>

                <h3 className="text-3xl py-8 dark:text-gray-200">Databases</h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                    {databases.map((database, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className={`p-4 shadow-lg shadow-gray-300 dark:shadow-gray-800 hover:shadow-${database.color} rounded-xl hover:scale-105 ease-in duration-300 dark:hover:shadow-${database.color}`}
                                >
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                key={index}
                                                src={database.img}
                                                width="80"
                                                height="80"
                                                alt={database.alt}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="dark:text-gray-200">{database.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        );
                    })}
                </div>

                <h3 className="text-3xl py-8 dark:text-gray-200">
                    Frameworks, Libraries, Tools
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                    {tools.map((tool, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className={`p-4 shadow-lg shadow-gray-300 dark:shadow-gray-800 hover:shadow-${tool.color} rounded-xl hover:scale-105 ease-in duration-300 dark:hover:shadow-${tool.color}`}
                                >
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                key={index}
                                                src={tool.img}
                                                width="80"
                                                height="80"
                                                alt={tool.alt}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3 className="dark:text-gray-200">{tool.name}</h3>
                                        </div>
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

export default Skills;
