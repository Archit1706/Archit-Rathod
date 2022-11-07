import React from "react";
import Edusys from "../public/assets/projects/edusys.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const project = (props) => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    className="absoute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={Edusys}
                    alt="edusys"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] ml-6 text-white z-10">
                    <h2 className="py-2">Edusys</h2>
                    <h3>React jS Taiwind Firebase</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam ducimus veniam, eveniet modi recusandae
                        molestias neque? Labore nemo quam dolorem, ducimus,
                        accusantium fuga veritatis provident repellat nihil aut
                        vel numquam.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p>
                            <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p>
                            <p className="text-gray-600 py-2 flex items-center ">
                                <RiRadioButtonFill className="pr-2" /> HTML
                            </p>
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

export default project;
