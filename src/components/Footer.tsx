import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer className="px-6 sm:px-12 md:px-24 pb-12 mx-auto max-w-screen bg-gray-50">
			<div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
				<p className="mb-2 font-semibold text-sm text-left text-gray-600 md:mb-0">
					© 2021{" "}
					<a href="https://goldinwebdesign.com" className="text-fuchsia-500">
						Goldin Web Design
					</a>
				</p>
				<span className="mb-0 text-xs text-left text-gray-600 md:mb-0 flex flex-col md:flex-row justify-between">
					<p className="mb-2 md:mb-0 pr-6">
						College Compendium is not affiliated with any classes
					</p>
					<a
						className="mb-2 md:mb-0 hover:underline pr-6"
						href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
					>
						Terms of Service{" "}
						<FontAwesomeIcon icon={faInfoCircle} className="ml-2 " />
					</a>
					<a
						className="mb-2 md:mb-0 hover:underline pr-6"
						href="https://discord.gg/gKYSMeJ"
						// href="https://www.youtube.com/watch?v=SIaFtAKnqBU&list=PLSLWyQKazD3X0W72mUUmd0hHXJvA0RNOk&index=35"
					>
						Discord <FontAwesomeIcon icon={faDiscord} className="ml-2 " />
					</a>
					<a
						className="mb-2 md:mb-0 hover:underline pr-6"
						href="mailto:gspam275@gmail.com&subject=College Compendium Inquiry"
					>
						Contact <FontAwesomeIcon icon={faEnvelope} className="ml-2 " />
					</a>
				</span>
			</div>
		</footer>
	);
};
export default Footer;
