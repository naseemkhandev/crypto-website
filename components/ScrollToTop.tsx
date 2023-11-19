"use client";

import { useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
	const arrow = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset >= 180) {
				if (arrow.current) {
					arrow.current.classList.add("right-10");
				}
			} else {
				if (arrow.current) {
					arrow.current.classList.remove("right-10");
				}
			}
		};
	}, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="overflow-hidden">
			<button
				className="fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-blue-500 text-white hover:bg-blue-600 active:p-[.45rem] p-2 rounded-md"
				onClick={scrollTop}
				ref={arrow}
			>
				<IoIosArrowUp className="text-2xl active:text-xl" />
			</button>
		</div>
	);
};

export default ScrollToTop;
