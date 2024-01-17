import Navbar from "../components/navbar";
import officers from "../../utils/officers";

function officerCard(officer) {
	return (
		<div className="flex flex-col justify-center items-center w-1/3 p-4">
			<img src={officer["image"]} className="w-1/3 rounded-full" />
			<h1 className="text-2xl font-bold text-center">{officer["name"]}</h1>
			<h2 className="text-xl font-bold text-center">{officer["position"]}</h2>
			<h3 className="text-lg font-bold text-center">{officer["major"]}</h3>
			<h4 className="text-lg font-bold text-center">{officer["year"]}</h4>
			<h5 className="text-lg font-bold text-center">{officer["email"]}</h5>
		</div>
	);
}

function section(title, id) {
	return (
		<>
			<hr className="w-3/4 p-5"/>
			<h1 className="text-3xl font-bold text-center">
				{ title }
			</h1>
			<div className="flex flex-wrap justify-center">
				{
					officers[id].map((officer, index) => {
						return (
							<div className="flex flex-col justify-center items-center w-1/3 p-4">
								<h1 className="text-lg font-bold text-center">{officer["name"]}</h1>
								<img src={officer["image"] || "public/officers/empty.jpg"} className="w-1/2 p-2" />
								<hr className="w-1/2" />
								<h2 className="text-base text-center">{officer["role"]}</h2>
								<hr className="w-1/2 pt-4" />
								{/* <h3 className="text-base text-center px-8">{officer["description"]}</h3> */}
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
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold text-center">About</h1>
				<img src="public/officers/about.jpg" className="w-3/4 p-4" />
			
				<div className="flex flex-col items-start mb-5">
					<h2 className="text-xl">A team of like-minded students ready to help you learn the skills to succeed</h2>
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
