import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
// import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import TechCard from '../components/TechCard';

export default function Tech() {
    const data = [
        {
            title: 'Vs Code',
            id: 0,
            main: '/vscode-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Slack',
            id: 1,
            main: '/slack-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'Discord',
            id: 2,
            main: '/discord-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'Sky: children of light',
            id: 3,
            main: '/sky-game.jpeg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'zen',
            bg: '#ebddff',
            text: '#55209a',
        },
        {
            title: 'Github',
            id: 4,
            main: '/github-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Next-js',
            id: 5,
            main: '/nextjs-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Osu!',
            id: 6,
            main: '/osu-logo.png',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'zen',
            bg: '#ebddff',
            text: '#55209a',
        },
        {
            title: 'Typescript',
            id: 7,
            main: '/typescript-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Figma',
            id: 8,
            main: '/figma-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'design',
            bg: '#ffaa5a53',
            text: '#814404',
        },
        {
            title: 'Notion',
            id: 9,
            main: '/notion-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'jetBrains IDEs',
            id: 10,
            main: '/jetbrains-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'MongoDB',
            id: 11,
            main: '/mongodb-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Canva',
            id: 12,
            main: '/canva-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'design',
            bg: '#ffaa5a53',
            text: '#814404',
        },
    ];
    const [idNumber, setIdNumber] = useState(0);
    const changeId = (id) => {
        setIdNumber(id);
    };
    const rightArrow = () => {
        if (idNumber + 1 >= data.length) {
            setIdNumber(0);
        } else {
            setIdNumber(idNumber + 1);
        }
    };
    const leftArrow = () => {
        if (idNumber === 0) {
            setIdNumber(data.length - 1);
        } else {
            setIdNumber(idNumber - 1);
        }
    };
    return (
        <div className="px-60 mx-auto ">
            <Head>
                <title>noru ✨ tools I use ✨ </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen">
                {/* <div className="flex justify-between w-[55%] font-semibold font-nun mx-auto pt-28  ">
                    <div className="px-5 rounded-xl bg-[#ffbce0] ">code</div>
                    <div className="px-5 rounded-xl bg-[#cfffc8] ">daily</div>
                    <div className="px-5 rounded-xl bg-[#ffaa5a53] ">design</div>
                    <div className="px-5 rounded-xl bg-[#ebddff] ">zen</div>
                </div> */}
                <div className="px-20 pt-24 font-nun flex flex-col mx-auto">
                    <h2 className="bg-gradient-to-r from-[#4ce3e1] via-[#be45ff] to-[#ff8a2a] bg-clip-text text-transparent items-center mx-auto text-5xl font-black">
                        Tools I use
                    </h2>
                    <p className="mt-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, et. Placeat
                        quam quod blanditiis, dignissimos praesentium a provident ipsa. Quo officiis
                        perspiciatis soluta, possimus quidem esse quia assumenda voluptate
                        veritatis!
                    </p>
                </div>
                <div className=" flex  mt-12 space-x-10 items-center mx-auto  ">
                    <button
                        className="font-space group bg-[#c7dada] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full "
                        onClick={leftArrow}
                    >
                        <HiOutlineArrowLongLeft className="w-10 h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
                    </button>
                    <div className="bg-gradient-to-tr from-[#b6ecec] via-[#f7eeff] to-[#ffe5d9] flex p-6 rounded-[1.6rem] mx-auto items-center justify-center space-x-6 transition-all duration-700 ease-linear ">
                        <div className="relative basis-[25%] h-32 p-6 w-32 object-center rounded-[2rem] ">
                            <div className="rounded-[2rem] flex mx-auto">
                                <Image
                                    src={data[idNumber].main}
                                    alt="seller6"
                                    fill
                                    className="p-4 flex mx-auto object-contain rounded-[2rem] transition ease-in-out scale-125 duration-1000 "
                                />
                            </div>
                        </div>
                        <div className=" basis-[70%] mx-auto transition-all duration-500 ">
                            <div className="flex mt-3 mb-1 justify-between items-center ">
                                <h3 className="  text-xl font-space font-semibold ">
                                    {data[idNumber].title}
                                </h3>
                                <div
                                    className={` bg-[${data[idNumber].bg}] text-[${data[idNumber].text}] text-xs px-2 rounded-xl h-max font-nun font-bold`}
                                >
                                    {data[idNumber].tag}
                                </div>
                            </div>
                            <p className="">{data[idNumber].desc}</p>
                        </div>
                    </div>
                    <button
                        className="bg-[#fce4fe] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full "
                        onClick={rightArrow}
                    >
                        <HiOutlineArrowLongRight className="w-10 h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
                    </button>
                </div>
                <div className=" mt-12 pb-12 grid grid-cols-4 gap-8 w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
                    {data.map(function (obj, i) {
                        return <TechCard id={obj.id} main={obj.main} key={i} changeId={changeId} />;
                    })}
                </div>
            </main>
        </div>
    );
}