import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { firstname, SocialLinks } from "../config";
import { useRouter } from "next/router";
import next from "next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");

    const router = useRouter();

    useEffect(() => {
        if (router.asPath === "/project") {
            setNavBg("transparent");
            setLinkColor("#ecf0f3");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [router]);

    const handleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) setShadow(true);
            else setShadow(false);
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div
            // style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
                    : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <h2 className="font-satisfy mx-4 px-4 text-transparent text-4xl sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-violet-700 to-pink-600">
                        {firstname}
                    </h2>
                </Link>

                <div>
                    <ul
                        // style={{ backgroundColor: `${linkColor}` }}
                        className="hidden md:flex mx-4"
                    >
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-500 ease-in-out duration-500">
                                Home
                            </li>
                        </Link>
                        <a href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-500 ease-in-out duration-500">
                                About
                            </li>
                        </a>
                        <a href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-500 ease-in-out duration-500">
                                Skills
                            </li>
                        </a>
                        <a href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-500 ease-in-out duration-500">
                                Projects
                            </li>
                        </a>
                        <a href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-500 ease-in-out duration-500">
                                Contact
                            </li>
                        </a>
                    </ul>
                    <div
                        onClick={handleNavbar}
                        className="md:hidden rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-purple-400"
                    >
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>

            <div
                className={
                    !isOpen
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        !isOpen
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <h2 className="font-satisfy px-2 text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-violet-700 to-pink-600">
                                    {firstname}
                                </h2>
                            </Link>

                            <div
                                onClick={handleNavbar}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-purple-400"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 text-black">
                                Create something new everyday!
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="py-4 text-sm hover:text-violet-600"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="py-4 text-sm hover:text-violet-600"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="py-4 text-sm hover:text-violet-600"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="py-4 text-sm hover:text-violet-600"
                                >
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="py-4 text-sm hover:text-violet-600"
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-8">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&apos;s
                                Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href={SocialLinks.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-[#0A66C2] hover:text-[#0A66C2]">
                                        <FaLinkedinIn />
                                    </div>
                                </a>

                                <a
                                    href={SocialLinks.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-[#00acee] hover:text-[#00acee]">
                                        <FaTwitter />
                                    </div>
                                </a>

                                <a
                                    href={SocialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-zinc-700 hover:text-zinc-700">
                                        <FaGithub />
                                    </div>
                                </a>

                                <a
                                    href={"mailto:" + SocialLinks.mail}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-red-500 hover:text-red-500">
                                        <FiMail />
                                    </div>
                                </a>

                                <a
                                    href={SocialLinks.leetcode}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-yellow-300 hover:text-yellow-500">
                                        <SiLeetcode />
                                    </div>
                                </a>

                                <a
                                    href={SocialLinks.medium}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300 hover:shadow-slate-800">
                                        <BsMedium />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
