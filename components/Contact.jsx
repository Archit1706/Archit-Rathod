import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { firstname, lastname, SocialLinks } from "../config";

const Contact = () => {
    const [formData, setFormData] = useState({});

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div id="contact" className="w-full pt-8 lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Let&apos;s collab!</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                    alt="contact-pic"
                                />
                            </div>

                            <div>
                                <h2 className="py-2">
                                    {firstname + " " + lastname}
                                </h2>
                                <p>Fullstack Web Developer</p>
                                <p className="py-4">
                                    I am available for freelance or part-time
                                    internships / postions. Contact me and
                                    let&apos;s talk.
                                </p>
                                <div>
                                    <p className="uppercase pt-8">
                                        Connect With Me
                                    </p>
                                    <div className="flex items-center justify-between max-w-[330] m-auto py-4">
                                        <a
                                            href={SocialLinks.linkedIn}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-[#0A66C2] hover:text-[#0A66C2]">
                                                <FaLinkedinIn />
                                            </div>
                                        </a>

                                        <a
                                            href={SocialLinks.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-[#00acee] hover:text-[#00acee]">
                                                <FaTwitter />
                                            </div>
                                        </a>

                                        <a
                                            href={SocialLinks.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-zinc-700 hover:text-zinc-700">
                                                <FaGithub />
                                            </div>
                                        </a>

                                        <a
                                            href={"mailto:" + SocialLinks.mail}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-red-500 hover:text-red-500">
                                                <FiMail />
                                            </div>
                                        </a>

                                        <a
                                            href={SocialLinks.leetcode}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-yellow-300 hover:text-yellow-500">
                                                <SiLeetcode />
                                            </div>
                                        </a>

                                        <a
                                            href={SocialLinks.medium}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3 sm:p-5 hover:scale-110 ease-in duration-300 hover:shadow-slate-800 hover:text-slate-800">
                                                <BsMedium />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form
                                // accept-charset="UTF-8"
                                action="https://getform.io/f/0555cc27-ce13-404f-9a7b-b37f4e99f3a3"
                                method="POST"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="name"
                                            id="name"
                                            onChange={changeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="phone"
                                        >
                                            Phone No.
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            onChange={changeHandler}
                                            // pattern="[1-9]{1}[0-9]{9}"
                                            // required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        rows="7"
                                        name="message"
                                        id="message"
                                        onChange={changeHandler}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    className="w-full p-4 text-gray-100 mt-4"
                                    // type="submit"
                                    onSubmit={submitHandler}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-8">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 hover:shadow-violet-500 hover:text-violet-500 p-3 md:p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
