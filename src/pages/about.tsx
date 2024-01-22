import Navbar from "../components/navbar";
import {Officer} from '../types';
import officers from "../../utils/officers";


function section(title:string, id:string) {
	return (
		<>
			<hr className="w-3/4 p-5"/>
			<h1 className="text-3xl font-bold text-center">
				{ title }
			</h1>
			<div className="flex flex-wrap justify-center">
				{
					officers[id].map((officer:Officer) => {
						return (
							<div className="flex flex-col justify-center items-center w-1/3 p-4">
								<img src={officer["image"] || "/officers/empty.jpg"} className="w-3/4 p-2" />
								<h1 className="text-lg font-bold text-center">{officer["name"]}</h1>
								<hr className="w-1/2" />
								<h2 className="text-base text-center">{officer["role"]}</h2>
								<hr className="w-1/2 pt-4" />
								<h3 className="text-base text-center">{officer["description"]}</h3>
							</div>
						)
					})
				}
			</div>
		</>
	);
}

function About() {
	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center mx-20 px-10">
				<h1 className="text-4xl font-bold text-center">About</h1>
				<img src="/officers/about.jpg" className="w-full p-10" />
			
				<div className="flex flex-col items-start mb-5 w-4/5">
					<h2 className="text-xl mb-2">A team of like-minded students ready to help you learn the skills to succeed!</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.</p>
				</div>
				<div className="flex flex-col items-center">
					{ section("Executive Board", "executive") }
					{ section("Technical Team", "technical") }
					{ section("Design & Outreach", "design") }
					{ section("Sponsorships Team", "sponsorships") }
				</div>
			</div>
		</>
	);
}

export default About;
