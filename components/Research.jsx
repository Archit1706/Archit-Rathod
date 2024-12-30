// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import AnimationWrapper from "./AnimationWrapper";
// import { researchs } from "../config";

// const Research = () => {
//     const [visibleResearchs, setVisibleResearchs] = useState(3);

//     const loadMoreResearch = () => {
//         setVisibleResearchs((prevVisibleResearchs) => prevVisibleResearchs + 3);
//     };
//     return (
//         <section id="researchs" className="w-full h-auto P-2">
//             <div className="max-w-[1240px] mx-auto px-2 py-16">
//                 <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
//                     Research
//                 </p>
//                 <h2 className="py-4">Papers I contributed to?</h2>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {researchs.slice(0, visibleResearchs).map((research, index) => {
//                         return (
//                             <AnimationWrapper key={index}>
//                                 <div
//                                     key={index}
//                                     className="relative flex items justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
//                                 >
//                                     <Image
//                                         className="rounded-xl group-hover:opacity-10"
//                                         src={research.img}
//                                         alt={research.alt}
//                                         height={900}
//                                         width={1600}
//                                     />
//                                     <div className="hidden w-[65%] group-hover:block absolute top-1/4 left-1/2 translate-x-[-50%]">
//                                         <h3 className="text-xl text-white tracking-wider text-center mb-10 sm:mb-6">
//                                             {research.title}
//                                         </h3>
//                                         {/* <p className="pb-3 pt-1.5 text-white text-center">
//                                             {"| "}
//                                             {research.tech.map(
//                                                 (technology) =>
//                                                     technology + " | "
//                                             )}
//                                         </p> */}
//                                         <Link
//                                             href={"/research" + research.url}
//                                             about={research.desc}
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
//                 {visibleResearchs < researchs.length && (
//                     <div className="text-center mt-4">
//                         <button
//                             onClick={loadMoreResearch}
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

// export default Research;


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "./AnimationWrapper";
import { researchs } from "../config";

const Research = () => {
    const [visibleResearchs, setVisibleResearchs] = useState(3);

    const loadMoreResearch = () => {
        setVisibleResearchs((prevVisibleResearchs) => prevVisibleResearchs + 3);
    };
    return (
        <section id="researchs" className="w-full h-auto p-2 dark:bg-gray-900">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#a29bfe]">
                    Research
                </p>
                <h2 className="py-4 dark:text-white">Papers I contributed to</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {researchs.slice(0, visibleResearchs).map((research, index) => {
                        return (
                            <AnimationWrapper key={index}>
                                <div
                                    key={index}
                                    className="relative flex items justify-center h-auto shadow-xl shadow-gray-400 dark:shadow-sm dark:shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:hover:bg-gradient-to-r dark:from-[#a29bfe] dark:to-[#81ecec]"
                                >
                                    <Image
                                        className="rounded-xl group-hover:opacity-10"
                                        src={research.img}
                                        alt={research.alt}
                                        height={900}
                                        width={1600}
                                    />
                                    <div className="hidden w-[65%] group-hover:block absolute top-1/4 left-1/2 translate-x-[-50%]">
                                        <h3 className="text-xl text-white tracking-wider text-center mb-10 sm:mb-6">
                                            {research.title}
                                        </h3>
                                        <Link
                                            href={"/research" + research.url}
                                            about={research.desc}
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
                {visibleResearchs < researchs.length && (
                    <div className="text-center mt-4">
                        <button
                            onClick={loadMoreResearch}
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

export default Research;
