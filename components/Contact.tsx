import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface DetailsProps {
	title: String;
	desc1: String;
	desc2: String;
}

const Details = ({ title, desc1, desc2 }: DetailsProps) => {
	return (
		<div>
			<h4 className="capitalize font-semibold text-[#131B4D] dark:text-white mb-3">
				{title}
			</h4>
			<p className="text-xs sm:text-sm font-[500] text-black/80 dark:text-white/70 mt-1">
				{desc1}
			</p>
			<p className="text-xs sm:text-sm font-[500] text-black/80 dark:text-white/70 mt-1">
				{desc2}
			</p>
		</div>
	);
};

const Contact = () => {
	return (
		<div id="contact" className="py-10 relative overflow-x-hidden">
			<div className="container mx-auto px-5 md:px-10 flex items-center justify-between gap-10 sm:gap-20 md:gap-10 lg:gap-32 flex-col md:flex-row">
				<div className="flex flex-col gap-1 md:gap-3 w-full">
					<p className="uppercase text-lg text-blue-500 font-semibold">
						contact us
					</p>
					<h2 className="capitalize text-2xl sm:text-3xl lg:text-4xl font-semibold">
						Let&apos;s talk about your problem.
					</h2>
					<p className="max-w-2xl mx-auto text-sm md:text-base text-black/70 dark:text-white/70">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
						tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et
						pretium quam mi a eros sed molestie est.
					</p>
					<div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-5 mt-5">
						<Details
							title="Our Location"
							desc1="401 Broadway, 24th Floor,"
							desc2="Orchard Cloud View, London"
						/>
						<Details
							title="Email Address"
							desc1="info@yourdomain.com"
							desc2="contact@yourdomain.com"
						/>
						<Details
							title="Phone Number"
							desc1="+990 846 73644"
							desc2="+550 9475 4543"
						/>
						<Details
							title="How Can We Help?"
							desc1="Tell us your problem we will get"
							desc2="back to you ASAP."
						/>
					</div>
				</div>

				<div className="w-full">
					<form
						action="#"
						className="sm:shadow-lg w-full xl:w-[85%] 2xl:w-[75%] sm:p-7 sm:rounded-xl flex flex-col gap-5"
					>
						<h2 className="text-2xl sm:text-3xl font-semibold text-[#131B4D] dark:text-white">
							Send us a Message
						</h2>
						<div className="flex flex-col gap-1">
							<label
								htmlFor="name"
								className="text-[#131B4D] dark:text-white text-sm font-[500] cursor-pointer select-none"
							>
								Full Name*
							</label>
							<Input
								placeholder="Enter your full name"
								name="name"
								id="name"
								className="py-[1.4rem]"
								required
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label
								htmlFor="email"
								className="text-[#131B4D] dark:text-white text-sm font-[500] cursor-pointer select-none"
							>
								Email Address*
							</label>
							<Input
								placeholder="Enter your email address"
								name="email"
								id="email"
								className="py-[1.4rem]"
								required
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label
								htmlFor="message"
								className="text-[#131B4D] dark:text-white text-sm font-[500] cursor-pointer select-none"
							>
								Message*
							</label>
							<Textarea
								placeholder="Type your message"
								name="message"
								id="message"
								className="h-40"
								required
							/>
						</div>
						<Button className="rounded-full bg-transparent bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 px-7 py-6 text-[1rem] text-white">
							Send Message
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
