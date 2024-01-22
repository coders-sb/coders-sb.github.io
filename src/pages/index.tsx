import Navbar from "../components/navbar";

function Index() {

  return (
		<>
			<Navbar />
			<div className="flex justify-center flex-col">
				<div className="">
					<h1 className="text-3xl font-bold text-center">
						We are Coders SB!
					</h1>
					<h3 className="text-xl text-center">
						A student org at UCSB that strives to help students
						develop the skills to build real-world, impactful
						software applications.
					</h3>
				</div>
				<div className="">
					<h3>Our Mission</h3>
					<p>
						Welcome to Coders SB! Our goal is to bridge the gap
						between classes at UCSB and the real-world. Enabling you
						to build real world programs, apps, websites, utilities,
						and services. Come learn about scalable web services,
						APIs, iOS/Android Applications, or professional-looking
						websites that will impress anyone. <br />
						<br /> Coders SB provides an environment where students
						can have fun building cool stuff with their peers,
						improving both their programming and collaboration
						skills, which are vital to working in the industry (and
						boosting their resume!). We will also host workshops and
						have industry professionals come and share their wisdom
						with us.
						<br />
						<br />
						Most importantly, we're extremely open and welcoming to
						students of all ages and skill-sets, from freshmen with
						no experience to seniors with various internships and
						hackathon awards. Come to our next meeting to join to
						get started! Let's build something! Here are the
						companies we've worked with
					</p>
				</div>
			</div>
		</>
  );
}

export default Index
