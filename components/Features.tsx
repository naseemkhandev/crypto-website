import { MdSecurity } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
import { FaShapes } from "react-icons/fa6";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { FaArrowUpRightDots } from "react-icons/fa6";

import Title from "./common/Title";

interface CardProps {
	icon: any;
	title: String;
}

const Card = ({ icon: Icon, title }: CardProps) => {
	return (
		<div className="flex items-center flex-col gap-2">
			<span className="mx-auto text-4xl p-4 mb-3 bg-blue-600 text-white rounded-full w-fit">
				{<Icon />}
			</span>
			<h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
			<p className="text-black/70 dark:text-white/70 text-sm 2xl:text-base">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
				nihil architecto eos quia tenetur modi iusto! Maiores accusamus
			</p>
		</div>
	);
};

const Features = () => {
	return (
		<div id="features" className="mt-10 md:mt-0 py-16">
			<div className="container mx-auto px-5 md:px-10">
				<Title
					title1="core features"
					title2="best features"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel."
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 text-center gap-8 md:gap-12 mt-8 md:mt-10">
					<Card icon={MdSecurity} title="Safe & Secure" />
					<Card icon={AiFillGift} title="Early Bonus" />
					<Card icon={FaShapes} title="Universal Access" />
					<Card icon={BsDatabaseFillCheck} title="Secure Storage" />
					<Card icon={IoWalletSharp} title="Low Cost" />
					<Card icon={FaArrowUpRightDots} title="Several Profit" />
				</div>
			</div>
		</div>
	);
};

export default Features;
