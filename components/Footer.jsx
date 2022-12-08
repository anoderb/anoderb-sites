import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
	return <>
        <div className="bg-[#ffffff] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
            <div className="p-2 ">
                <ul>
                    <p className="text-[#292444] font-bold text-3xl pb-6">
                        Anoderb<span className="text-[#E94A66]">Validator</span>
                    </p>
                </ul>
            </div>
            <div className="p-2">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">Project</p>
                    <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Airdrops
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Nodes
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Testnet
                        </p>
                    </Link>
                </ul>
            </div>
            <div className="p-2">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">Service</p>
                    <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Stake
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Guides
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Blog
                        </p>
                    </Link>
                </ul>
            </div>
            <div className="p-2">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                    <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            About
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Contact
                        </p>
                    </Link>
                      <Link href='/Construction' legacyBehavior>
                        <p className="text-gray-500 text-sm pb-2 font-semibold  hover:scale-110 ease-in duration-300 hover:text-[#E94A66]">
                            Donate
                        </p>
                    </Link>
                </ul>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-3 bg-[#E94A66]">
            <h1 className=" text-[#292444] text-sm font-semibold ">
                © 2021-2022 All rights reserved | Powered by{" "}
                <span className="hover:text-[#d2cbfc] font-bold cursor-pointer hover:scale-110 ease-in duration-300">
                    Anoderb{" "}
                </span>
            </h1>
        </div>
    </>;
}

export default Footer;