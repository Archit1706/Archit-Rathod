// import React, { useEffect } from "react";
// import Image from "next/image";
// import { RiRadioButtonFill } from "react-icons/ri";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { researchs } from "../../config";
// import AnimationWrapper from "../../components/AnimationWrapper";

// const ResearchDetails = () => {
//     const router = useRouter();
//     const { research } = router.query;
//     let researchData = researchs.find((p) => p.url === `/${research}`);
//     if (!researchData) researchData = researchs[0];

//     useEffect(() => {
//         document.title = researchData.title + " | Archit Rathod";
//     }, [researchData]);

//     return (
//         <AnimationWrapper>
//             <div className="w-full">
//                 <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
//                     <div className="w-full h-[60vh] relative">
//                         <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/60 z-10" />
//                         <Image
//                             className="absoute z-1"
//                             layout="fill"
//                             objectFit="cover"
//                             src={researchData.img}
//                             alt={researchData.alt}
//                         />
//                         <div className="absolute top-[60%] w-[90%] left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white z-10">
//                             <h2 className="py-2">{researchData.title}</h2>
//                             {researchData.status == "published" ? (
//                                 <>
//                                     <h3 className="text-lg font-bold tracking-wide text-white">
//                                         <span>Published at </span>
//                                         {researchData.workshop}
//                                     </h3>
//                                     <p className="py-1 text-gray-200 tracking-wide">
//                                         {researchData.conference}
//                                     </p>
//                                 </>
//                             ) : researchData.status == "accepted" ? (
//                                 <>
//                                     <h3 className="text-lg font-bold tracking-wide text-white">
//                                         <span>Selected at</span>{" "}
//                                         {researchData.workshop}
//                                     </h3>
//                                     <p className="py-1 text-gray-200 tracking-wide">
//                                         {researchData.conference ||
//                                             researchData.organization}
//                                     </p>
//                                 </>
//                             ) : (
//                                 <>
//                                     <h3 className="text-lg font-bold tracking-wide text-white">
//                                         Working Paper
//                                     </h3>
//                                     <p className="py-1 text-gray-200 tracking-wide">
//                                         {researchData.dates.working}
//                                     </p>
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     <AnimationWrapper>
//                         <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
//                             <div className="col-span-4">
//                                 {/* <p>Overview</p> */}
//                                 <h3>Abstract</h3>
//                                 <p>{researchData.abstract}</p>

//                                 {researchData.links.code != "" && (
//                                     <a
//                                         href={researchData.links.code}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             Code
//                                         </button>
//                                     </a>
//                                 )}

//                                 {researchData.links.openreview != "" && (
//                                     <a
//                                         href={researchData.links.openreview}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             OpenReview
//                                         </button>
//                                     </a>
//                                 )}

//                                 {researchData.links.arxiv != "" && (
//                                     <a
//                                         href={researchData.links.arxiv}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             ArXiv
//                                         </button>
//                                     </a>
//                                 )}

//                                 {researchData.links.pdf != "" && (
//                                     <a
//                                         href={researchData.links.pdf}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             PDF
//                                         </button>
//                                     </a>
//                                 )}

//                                 {researchData.links.slides != "" && (
//                                     <a
//                                         href={researchData.links.slides}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             Slides
//                                         </button>
//                                     </a>
//                                 )}

//                                 {researchData.links.video != "" && (
//                                     <a
//                                         href={researchData.links.video}
//                                         target="__blank"
//                                         rel="noreferrer"
//                                     >
//                                         <button className="px-8 py-2 mt-4 mr-8">
//                                             Video
//                                         </button>
//                                     </a>
//                                 )}
//                             </div>
//                             <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
//                                 <div className="p-2">
//                                     <p className="text-center font-bold pb-2">
//                                         Authors
//                                     </p>
//                                     <AnimationWrapper>
//                                         <div className="grid grid-cols-3 md:grid-cols-1">
//                                             {researchData.authors.map(
//                                                 (technology, index) => {
//                                                     return (
//                                                         <p
//                                                             key={index}
//                                                             className="text-gray-600 py-2 flex items-center "
//                                                         >
//                                                             <RiRadioButtonFill className="pr-2" />{" "}
//                                                             {technology}
//                                                         </p>
//                                                     );
//                                                 }
//                                             )}

//                                             {/* <p className="text-gray-600 py-2 flex items-center ">
//                                 <RiRadioButtonFill className="pr-2" /> HTML
//                             </p>
//                             <p className="text-gray-600 py-2 flex items-center ">
//                                 <RiRadioButtonFill className="pr-2" /> HTML
//                             </p>
//                             <p className="text-gray-600 py-2 flex items-center ">
//                                 <RiRadioButtonFill className="pr-2" /> HTML
//                             </p> */}
//                                         </div>
//                                     </AnimationWrapper>
//                                 </div>
//                             </div>
//                             <Link href="/#researchs">
//                                 <p className="underline cursor-pointer text-xl">
//                                     Back
//                                 </p>
//                             </Link>
//                         </div>
//                     </AnimationWrapper>
//                 </div>
//             </div>
//         </AnimationWrapper>
//     );
// };

// export default ResearchDetails;


import React, { useEffect } from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { researchs } from "../../config";
import AnimationWrapper from "../../components/AnimationWrapper";

const ResearchDetails = () => {
    const router = useRouter();
    const { research } = router.query;
    let researchData = researchs.find((p) => p.url === `/${research}`);
    if (!researchData) researchData = researchs[0];

    useEffect(() => {
        document.title = researchData.title + " | Archit Rathod";
    }, [researchData]);

    return (
        <AnimationWrapper>
            <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
                <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
                    <div className="w-full h-[60vh] relative">
                        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/60 dark:bg-black/80 z-10" />
                        <Image
                            className="absolute z-1"
                            layout="fill"
                            objectFit="cover"
                            src={researchData.img}
                            alt={researchData.alt}
                        />
                        <div className="absolute top-[60%] w-[90%] left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white dark:text-gray-200 z-10">
                            <h2 className="py-2">{researchData.title}</h2>
                            {researchData.status === "published" ? (
                                <>
                                    <h3 className="text-lg font-bold tracking-wide text-white dark:text-gray-300">
                                        <span>Published at </span>
                                        {researchData.workshop}
                                    </h3>
                                    <p className="py-1 text-gray-200 dark:text-gray-400 tracking-wide">
                                        {researchData.conference}
                                    </p>
                                </>
                            ) : researchData.status === "accepted" ? (
                                <>
                                    <h3 className="text-lg font-bold tracking-wide text-white dark:text-gray-300">
                                        <span>Selected at </span>
                                        {researchData.workshop}
                                    </h3>
                                    <p className="py-1 text-gray-200 dark:text-gray-400 tracking-wide">
                                        {researchData.conference || researchData.organization}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-lg font-bold tracking-wide text-white dark:text-gray-300">
                                        Working Paper
                                    </h3>
                                    <p className="py-1 text-gray-200 dark:text-gray-400 tracking-wide">
                                        {researchData.dates.working}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <AnimationWrapper>
                        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                            <div className="col-span-4">
                                <h3 className="dark:text-gray-200">Abstract</h3>
                                <p className="dark:text-gray-400">{researchData.abstract}</p>

                                {researchData.links.code && (
                                    <a
                                        href={researchData.links.code}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            Code
                                        </button>
                                    </a>
                                )}

                                {researchData.links.openreview && (
                                    <a
                                        href={researchData.links.openreview}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            OpenReview
                                        </button>
                                    </a>
                                )}

                                {researchData.links.arxiv && (
                                    <a
                                        href={researchData.links.arxiv}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            ArXiv
                                        </button>
                                    </a>
                                )}

                                {researchData.links.pdf && (
                                    <a
                                        href={researchData.links.pdf}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            PDF
                                        </button>
                                    </a>
                                )}

                                {researchData.links.slides && (
                                    <a
                                        href={researchData.links.slides}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            Slides
                                        </button>
                                    </a>
                                )}

                                {researchData.links.video && (
                                    <a
                                        href={researchData.links.video}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8 bg-gray-700 text-white rounded-md dark:bg-gray-800">
                                            Video
                                        </button>
                                    </a>
                                )}
                            </div>
                            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4 bg-gray-50 dark:bg-gray-800">
                                <div className="p-2">
                                    <p className="text-center font-bold pb-2 dark:text-gray-200">
                                        Authors
                                    </p>
                                    <AnimationWrapper>
                                        <div className="grid grid-cols-3 md:grid-cols-1">
                                            {researchData.authors.map((author, index) => (
                                                <p
                                                    key={index}
                                                    className="text-gray-600 dark:text-gray-200 py-2 flex items-center"
                                                >
                                                    <RiRadioButtonFill className="pr-2" /> {author}
                                                </p>
                                            ))}
                                        </div>
                                    </AnimationWrapper>
                                </div>
                            </div>
                            <Link href="/#researchs">
                                <p className="underline cursor-pointer text-xl dark:text-gray-300">
                                    Back
                                </p>
                            </Link>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default ResearchDetails;
