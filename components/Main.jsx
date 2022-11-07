import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { firstname, lastname, tagline, SocialLinks } from "../config";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="">
                    <p className="mt-32 md:mt-16 uppercase tracking-widest text-sm text-gray-600">
                        Hello!
                    </p>
                    <h1 className="py-4 text-gray-700">
                        I&apos;`m{" "}
                        <span className="text-[#5651e5]">
                            {firstname + " " + lastname}
                        </span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A{" "}
                        <span className=" underline decoration-[#5651e5] decoration-wavy decoration-[3px]">
                            Full-Stack
                        </span>{" "}
                        Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        {tagline}
                    </p>
                    <div className="flex items-center justify-evenly max-w-[330] m-auto py-4">
                        <a
                            href={SocialLinks.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-[#0A66C2] hover:text-[#0A66C2]">
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a
                            href={SocialLinks.twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-[#00acee] hover:text-[#00acee]">
                                <FaTwitter />
                            </div>
                        </a>

                        <a
                            href={SocialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-zinc-700 hover:text-zinc-700">
                                <FaGithub />
                            </div>
                        </a>

                        <a
                            href={"mailto:" + SocialLinks.mail}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-red-500 hover:text-red-500">
                                <FiMail />
                            </div>
                        </a>

                        <a
                            href={SocialLinks.leetcode}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-yellow-300 hover:text-yellow-500">
                                <SiLeetcode />
                            </div>
                        </a>

                        <a
                            href={SocialLinks.medium}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-6 hover:scale-110 ease-in duration-300 hover:shadow-slate-800 hover:text-slate-800">
                                <BsMedium />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
