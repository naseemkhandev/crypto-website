import Image from "next/image";
import { FaBitcoin, FaEthereum, FaMonero } from "react-icons/fa";
import { MdFitbit } from "react-icons/md";
import { SiNamecheap, SiLitecoin, SiTether } from "react-icons/si";

import { Button } from "./ui/button";

const Hero = () => {
	return (
		<div
			id="home"
			className="w-full h-full relative bg-gradient-to-b from-[#DCE7FF] via-[#DCE7FF] to-transparent dark:from-[#111847] dark:via-[#111847] dark:to-transparent z-[0]"
		>
			<Image
				src="/hero/hero-shape-1.svg"
				alt="hero shape"
				width={500}
				height={500}
				className="absolute top-0 -z-20"
			/>
			<Image
				src="/hero/hero-shape-2.svg"
				alt="hero shape"
				width={500}
				height={500}
				className="absolute top-0 right-0 w-2/3 h-[130%] -z-20"
			/>

			<div className="container mx-auto px-5 md:px-10 flex flex-col items-center justify-center w-full h-[90vh] md:h-screen relative text-center gap-3 sm:gap-5 md:gap-8 sm:pt-16 md:pt-28 lg:pt-32">
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
					Tailwind CSS Template for <br /> Crypto, ICO and Web3
				</h2>
				<p className="sm:max-w-lg md:max-w-xl lg:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-black/60 dark:text-white/60">
					Crypto Currency, Blockchain, ICO, Web3 related website template
					crafted with Tailwind CSS. Comes with all essential UI components and
					pages to launch complete website or landing page for anything that
					related to Crypto, Blockchain and Web3.
				</p>

				<div className="flex items-center gap-2 md:gap-4 my-2 sm:my-3 md:m-0">
					<span className="text-2xl md:text-[2rem] w-fit h-fit rounded-full text-orange-400 bg-white p-[.3rem]">
						<FaBitcoin />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<FaEthereum className="bg-blue-500 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<MdFitbit className="bg-black/90 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<SiNamecheap className="bg-purple-500 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<FaMonero className="bg-indigo-500 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<SiLitecoin className="bg-red-500 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
					<span className="w-fit h-fit rounded-full bg-white p-[.3rem]">
						<SiTether className="bg-emerald-600 text-white rounded-full text-2xl md:text-[2rem] p-[.4rem]" />
					</span>
				</div>

				<Button className="py-6 px-9 md:text-lg md:py-7 md:px-12 bg-blue-600 hover:bg-blue-700 rounded-full cursor-pointer dark:text-white">
					Buy Tokens 47% Off
				</Button>
			</div>
		</div>
	);
};

export default Hero;
