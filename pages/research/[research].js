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
            <div className="w-full">
                <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center">
                    <div className="w-full h-[60vh] relative">
                        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/70 z-10" />
                        <Image
                            className="absoute z-1"
                            layout="fill"
                            objectFit="cover"
                            src={researchData.img}
                            alt={researchData.alt}
                        />
                        <div className="absolute top-[60%] w-[90%] left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white z-10">
                            <h2 className="py-2">{researchData.title}</h2>
                            <h3>
                                {"| "}
                                {researchData.authors.map(
                                    (author) => author + " | "
                                )}
                            </h3>
                        </div>
                    </div>

                    <AnimationWrapper>
                        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                            <div className="col-span-4">
                                <p>Project</p>
                                <h2>Overview</h2>
                                <p>{researchData.desc}</p>
                                {researchData.link != "" && (
                                    <a
                                        href={researchData.link}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4 mr-8">
                                            Demo
                                        </button>
                                    </a>
                                )}

                                {researchData.github != "" && (
                                    <a
                                        href={researchData.github}
                                        target="__blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-8 py-2 mt-4">
                                            Code
                                        </button>
                                    </a>
                                )}
                            </div>
                            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                                <div className="p-2">
                                    <p className="text-center font-bold pb-2">
                                        Authors
                                    </p>
                                    <AnimationWrapper>
                                        <div className="grid grid-cols-3 md:grid-cols-1">
                                            {researchData.authors.map(
                                                (technology, index) => {
                                                    return (
                                                        <p
                                                            key={index}
                                                            className="text-gray-600 py-2 flex items-center "
                                                        >
                                                            <RiRadioButtonFill className="pr-2" />{" "}
                                                            {technology}
                                                        </p>
                                                    );
                                                }
                                            )}

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
                                    </AnimationWrapper>
                                </div>
                            </div>
                            <Link href="/#researchs">
                                <p className="underline cursor-pointer text-xl">
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
