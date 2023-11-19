import { FaBitcoin, FaEthereum, FaMonero } from "react-icons/fa";
import { MdFitbit } from "react-icons/md";
import { SiNamecheap, SiLitecoin, SiTether } from "react-icons/si";
import { TiArrowUp } from "react-icons/ti";

import Title from "./common/Title";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
	date: String;
	desc: String;
	icon: any;
	iconColor?: String;
	name: String;
	percentage: String;
	className?: String;
	dotClasses?: String;
	smallDot?: String;
}

interface DotProps {
	dotClasses?: String;
	smallDot?: String;
}

const Card = ({
	date,
	desc,
	icon: Icon,
	iconColor,
	name,
	percentage,
	className,
	dotClasses,
	smallDot,
}: CardProps) => {
	return (
		<div
			className={cn(
				"p-3 md:p-5 lg:p-8 flex flex-col gap-3 relative before:absolute before:w-4 before:h-4 before:bg-[#F5F8FF] sm:before:block before:hidden dark:before:bg-[#131B4D] before:top-1/2 before:-translate-y-1/2 before:-right-2 before:rotate-45 rounded-lg bg-[#F5F8FF] dark:bg-[#131B4D]",
				className
			)}
		>
			<h3 className="font-semibold sm:text-base text-sm md:text-lg">{date}</h3>
			<p className="text-xs md:text-sm text-black/70 dark:text-white/70">
				{desc}
			</p>
			<div className="flex items-center gap-1 bg-white dark:bg-[#0f132b80] rounded-full w-fit p-3 capitalize">
				<Icon className={cn("text-orange-400", iconColor)} />{" "}
				<span className="text-xs font-semibold text-black/70 dark:text-white/70">
					{name}
				</span>{" "}
				<span className="text-[.5rem] font-semibold">{percentage}%</span>
				<TiArrowUp className="text-green-500 -m-1 mb-[-1px] mr-0" />
			</div>
			<Dot dotClasses={dotClasses} smallDot={smallDot} />
		</div>
	);
};

const Dot = ({ dotClasses, smallDot }: DotProps) => {
	return (
		<>
			<span
				className={cn(
					"absolute top-1/2 -right-[3rem] md:-right-[4.5rem] -translate-y-1/2 hidden bg-blue-500 w-4 h-4 rounded-full sm:block",
					dotClasses
				)}
			/>
			<span
				className={cn(
					"absolute top-1/2 -right-[2.7rem] md:-right-[4.3rem] -translate-y-1/2 hidden bg-[#F5F8FF] w-2 h-2 rounded-full sm:block",
					smallDot
				)}
			/>
		</>
	);
};

const Roadmap = () => {
	const date = new Date().getFullYear();

	return (
		<div id="roadmap" className="py-16 relative">
			<Image
				src="/timeline-shape.svg"
				width={500}
				height={500}
				alt="timeline shape"
				className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full opacity-20"
			/>
			<div className="container mx-auto px-5 md:px-10">
				<Title
					title1="Roadmap"
					title2="the timeline"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel."
				/>

				<div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-20 md:gap-32 mt-10 relative">
					<div className="w-[2px] h-full bg-[#F5F8FF] dark:bg-[#2e457b] absolute top-0 left-1/2 -translate-x-1/2 sm:block hidden" />
					<div className="flex flex-col gap-5 sm:gap-32">
						<Card
							date={`Feb 25,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={FaBitcoin}
							name="bitcoin"
							percentage="4.5"
							className="sm:text-right sm:items-end"
						/>
						<Card
							date={`Jan 14,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={FaEthereum}
							iconColor="text-blue-500"
							name="Ethereum"
							percentage="3.0"
							className="sm:text-right sm:items-end"
						/>
						<Card
							date={`June 28,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={MdFitbit}
							iconColor="text-black/90 dark:text-white/90"
							name="bitcoin"
							percentage="2.5"
							className="sm:text-right sm:items-end"
						/>
					</div>
					<div className="flex flex-col gap-5 sm:gap-32 sm:mt-32">
						<Card
							date={`May 12,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={SiNamecheap}
							iconColor="text-purple-500"
							name="Namecheap"
							percentage="1.2"
							className="before:-left-2"
							dotClasses="-left-[3rem] md:-left-[4.5rem]"
							smallDot="-left-[2.7rem] md:-left-[4.25rem]"
						/>
						<Card
							date={`Mar 17,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={FaMonero}
							iconColor="text-indigo-500"
							name="Monero"
							percentage="2.2"
							className="before:-left-2"
							dotClasses="-left-[3rem] md:-left-[4.5rem]"
							smallDot="-left-[2.7rem] md:-left-[4.25rem]"
						/>
						<Card
							date={`Jul 09,${date}`}
							desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel"
							icon={SiLitecoin}
							name="Litecoin"
							iconColor="text-red-500"
							percentage="9.2"
							className="before:-left-2"
							dotClasses="-left-[3rem] md:-left-[4.5rem]"
							smallDot="-left-[2.7rem] md:-left-[4.25rem]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
