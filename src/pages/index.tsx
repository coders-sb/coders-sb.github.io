import Navbar from "../components/navbar";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


function Index() {

  return (
		<>
			<div className="z-10 absolute w-screen">
				<Navbar />
			</div>
			<div className="flex flex-col h-screen w-screen px-12">
				<div className="flex flex-col items-start py-64 px-12 justify-start h-1/2">
					<h1 className="text-left font-bold text-6xl">Coders SB</h1>
					<h3 className="text-left text-4xl">we code, probably</h3>
				</div>
				<div className="flex items-center justify-center h-1/2">
					<div className="self-center">
						<IoIosArrowDown size={32} />
					</div>
				</div>
			</div>
			<div className="flex mx-auto p-8">
				<div className="flex flex-1 py-4 px-8 justify-center items-center">
					<img
						alt="Abstract shapes"
						className="rounded-lg"
						src="/vite.svg"
						style={{
							objectFit: "cover",
						}}
						width="200"
					/>
				</div>
				<div className="flex-1 py-4 px-8">
					<h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
						Our Mission
					</h1>
					<p className="mb-4">
						We aim to bridge the gap between classes at UCSB and the
						real world of programs, apps, websites, utilities, and
						services. Our vision is to provide an environment where
						students can have fun building projects while
						simultaneously preparing for a career in computer
						science.
					</p>
					<p className="mb-4">
						Most importantly, we're extremely open and welcoming to
						students of all ages and skill-sets. Whoever you are,
						come join us!
					</p>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLScrCH1rK0SbXWQyG8gjKjwh13NkLVZkz7HT5QuhCD2vBlJTIA/viewform?usp=sf_link"
						target="_blank"
					>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
							Register
						</button>
					</a>
				</div>
			</div>
			<div className="px-24 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-[#2c3e50]">
						Events
					</h1>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 text-center">
						<p className="">Wednesday</p>
						<p className="text-4xl">Jan 24</p>
						<hr className="w-3/4 m-4 mx-auto"></hr>
						<p>7:00pm - ENG 1001</p>
						<p>Javascript Fundamentals</p>
					</div>
					<div className="w-full md:w-1/3 text-center">
						<p className="">Wednesday</p>
						<p className="text-4xl">Jan 31</p>
						<hr className="w-3/4 m-4 mx-auto"></hr>
						<p>7:00pm - ENG 1001</p>
						<p>Intro to ReactReact</p>
					</div>
					<div className="w-full md:w-1/3 text-center flex flex-col items-center justify-center border rounded-full">
						<h3 className="text-4xl">And<br></br>More</h3>
						<FaLongArrowAltRight size={32}/>
					</div>
				</div>
			</div>
			<div className="px-24 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold">Quarterly Breakdown</h1>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3">
						<img
							alt="Abstract shapes"
							className="rounded-lg mx-auto mb-12"
							src="/vite.svg"
							style={{
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-center text-xl font-bold mb-4">
							Fall
						</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Temporibus, perferendis totam est quos
							voluptas similique laborum tempora ex magnam.
							Delectus ipsa magni animi aspernatur quaerat autem
							voluptates, ratione molestias error.
						</p>
					</div>
					<div className="w-full md:w-1/3">
						<img
							alt="Abstract shapes"
							className="rounded-lg mx-auto mb-12"
							src="/vite.svg"
							style={{
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-center text-xl font-bold mb-4">
							Winter
						</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Temporibus, perferendis totam est quos
							voluptas similique laborum tempora ex magnam.
							Delectus ipsa magni animi aspernatur quaerat autem
							voluptates, ratione molestias error.
						</p>
					</div>
					<div className="w-full md:w-1/3">
						<img
							alt="Abstract shapes"
							className="rounded-lg mx-auto mb-12"
							src="/vite.svg"
							style={{
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-center text-xl font-bold mb-4">
							Spring
						</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Temporibus, perferendis totam est quos
							voluptas similique laborum tempora ex magnam.
							Delectus ipsa magni animi aspernatur quaerat autem
							voluptates, ratione molestias error.
						</p>
					</div>
				</div>
			</div>
		</>
  );
}

export default Index
