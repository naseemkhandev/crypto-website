"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const [menu, setMenu] = useState<boolean>(false);
	const navbar = useRef<HTMLDivElement | null>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset >= 50) {
				if (navbar.current) {
					navbar.current.classList.add(
						"bg-[#ffffffb8]",
						"dark:bg-[#111847e1]",
						"backdrop-blur-sm"
					);
				}
			} else {
				if (navbar.current) {
					navbar.current.classList.remove(
						"bg-[#ffffffb8]",
						"dark:bg-[#111847e1]",
						"backdrop-blur-sm"
					);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div ref={navbar} className="w-full select-none fixed top-0 left-0 z-10">
			<div className="flex items-center justify-between container px-5 md:px-10 py-3 mx-auto z-10">
				<Link href="/">
					<Image
						src={cn(theme === "light" ? "/logo.svg" : "/logo-dark.svg")}
						alt="logo"
						width={170}
						height={170}
						className="dark:text-white"
					/>
				</Link>

				<ul
					className={cn(
						"flex lg:items-center gap-7 lg:gap-10 capitalize font-[500] lg:relative fixed top-0 dark:bg-[#111847] bg-white h-screen lg:w-fit lg:h-fit dark:lg:bg-transparent lg:bg-transparent z-[80] w-full sm:w-80 shadow-md flex-col lg:flex-row py-32 px-5 transition-all duration-500 lg:p-0 lg:shadow-none lg:left-0",
						menu ? "left-0" : "-left-full"
					)}
				>
					{["home", "features", "roadmap", "contact"].map((link) => (
						<li key={link}>
							<Link
								href={`#${link}`}
								className="hover:text-blue-600 border-black/50 dark:border-white border-b block lg:inline-block w-full lg:w-fit pb-2 relative before:absolute before:left-1/2 before:-bottom-[1px] before:bg-blue-500 before:w-full before:h-[2px] before:-translate-x-1/2 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 lg:border-none lg:p-0"
							>
								{link}
							</Link>
						</li>
					))}
					<Button
						size="icon"
						variant="outline"
						onClick={() => setMenu(false)}
						className="rounded-full text-2xl absolute top-8 right-5 lg:hidden dark:bg-transparent hover:bg-white/10"
					>
						<IoClose />
					</Button>
					<Link
						href="https://naseemkhan.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="block w-full h-full"
					>
						<Button
							variant="outline"
							className="rounded-full bg-transparent hover:bg-blue-600 hover:text-white border border-blue-500 text-blue-500 px-7 py-6 text-[1rem] dark:text-white dark:border-white w-full dark:hover:bg-white dark:hover:text-blue-500 flex lg:hidden"
						>
							Sign In
						</Button>
					</Link>
				</ul>

				<div className="flex items-center gap-1 sm:gap-3">
					<ToggleTheme />
					<Link href="https://naseemkhan.vercel.app/" target="_blank">
						<Button
							variant="outline"
							className="rounded-full bg-transparent hover:bg-blue-600 hover:text-white border border-blue-500 text-blue-500 px-7 py-[1.3rem] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-500 hidden sm:flex"
						>
							Sign In
						</Button>
					</Link>
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setMenu(true)}
						className="rounded-full text-2xl lg:hidden cursor-pointer dark:hover:bg-blue-500"
					>
						<HiOutlineMenu />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
