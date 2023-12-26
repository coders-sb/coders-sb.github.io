import Faq from 'react-faq-component';

type Workshop = {
	title: string | null;
	image: string | null;
	recordingLink: string | null;
	slidesLink: string | null;
	codeLink: string | null;
	otherResources: Array<Array<string | null>>
};

const workshops: Array<Workshop> = [
	{
		title: "Intro to React",
		image: "https://coderssb.com/ProjectSeries/promo-c.png",
		recordingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		slidesLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		codeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		otherResources: [] //format for other resources is [[name, link], [n,l], ...]
	},
	{
		title: "insert 2nd workshop",
		image: "https://coderssb.com/ProjectSeries/promo-c.png",
		recordingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		slidesLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		codeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		otherResources: []
	}
	,
	{
		title: "insert 3rd workshop",
		image: "https://coderssb.com/ProjectSeries/promo-c.png",
		recordingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		slidesLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		codeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		otherResources: []
	},
	{
		title: "insert 4th workshop",
		image: "https://coderssb.com/ProjectSeries/promo-c.png",
		recordingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		slidesLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		codeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		otherResources: []
	}
];

const FAQ = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Do I need coding experience to participate?",
            content: "No, this series is beginner-friendly. We'll provide all the necessary guidance for website building. All skill levels are welcome!"
        },
        {
            title: "How many team members can I have?",
            content: "Ideally, teams should consist of 3-4 students. However, you can work alone or with a partner. The maximum team size allowed is 4. For any team-related queries, reach out to us via email at coderssb@gmail.com."
        },
        {
            title: "How can I qualify for the showcase?",
            content: "Attending workshops is crucial. You're allowed to miss only 2 workshops to stay eligible for the final showcase. Regular attendance will help you stay on track with your project."
        },
        {
            title: "Will workshops be recorded and accessible?",
            content: "Yes! All content will be posted on our webpage. Access workshop recordings and presentations by clicking the links. The schedule will be regularly updated to track the project series."
        },
        {
            title: "I don't have a team, what should I do?",
            content: "No worries! We'll assist you in finding a team. Stay tuned for more details on team formation."
        },
        {
            title: "Who should I contact for questions?",
            content: "For queries, use our Discord channel or email us at coderssb@gmail.com. We're here to help and will respond as soon as possible."
        },
    ],
};

const FAQstyles = {
	textAlign: 'left'
};

function ProjectSeries() {
	return (
		<>
		<div className = "h-24 bg-green-500">
			insert header
		</div>	
		<div className = "h-96 bg-red-500">
			project series banner
		</div>	
		<h1 className = "text-left">
			Winter 2021 Project Series
		</h1>
		<p className = "text-left mt-5">
		In this project series you will work with a team of up to 4 to create a full stack web application using React, the industry standard for building user interfaces. At the end of the quarter, your team will participate in our showcase where you will be able to display your final product to a panel of judges. All skill levels are welcome. Stay tuned for more information on our panel and exciting prizes!
		</p>
		<p className = "text-left mt-5">
		Throughout the quarter, we will have 7 events from week 2-9 (with a gap week in week 8) on Thursday @ 7-8:30PM. Each meeting will consist of a 20-40 minute workshop and the remaining time will be used for checking in with your project mentor as well as an open space to work and ask questions. These meetings will be conducted using both zoom and discord. To remain qualified to present in our showcase, your team can only miss two events.
		</p>
		<div className = "h-72 bg-blue-500">
			timeline infographic
		</div>	
		<div className = "w-full bg-red-100 flex flex-row flex-wrap justify-center">
			{workshops.map((workshop: Workshop) => (
				<div className = "w-96">
					<img src = {workshop.image ?? "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq"} className = "h-80 w-80 mx-auto mt-5"/>
					{workshop.title}
					{workshop.recordingLink ? <>{" | "}<a href = {workshop.recordingLink ?? ""} className = "text-blue-500">Recording</a></>: ""}
					{workshop.slidesLink ? <>{" | "}<a href = {workshop.slidesLink ?? ""} className = "text-blue-500">Slides</a></> : ""}
					{workshop.codeLink ? <>{" | "}<a href = {workshop.codeLink ?? ""} className = "text-blue-500">Code</a></> : ""}
					{/* if someone wants to write a feature to itemize the .otherResources feel free to do it but i could not be fucked atm */}
				</div>
			))}
		</div>
		<h1 className = "text-left">
			Resources
		</h1>
		<div className = "flex flex-row">
			<video loop autoPlay muted className = "h-1/2 w-1/2 p-5">
				<source src={"https://coderssb.com/ProjectSeries/resources.mp4"} type="video/mp4"/>
			</video>
			<div className = "flex flex-col p-10 text-left">
				<a href="https://drive.google.com/drive/folders/1vKSjbAbvDCfa2u7W0LTWgx4V7JVGpf_N">Folder with all our resources.</a>
				<br/>
				<div>
					{"Learn how to set up your GitHub repo "} 
					<a href = "https://docs.google.com/document/d/1q-W8fQjpR2KVEb-9XT09cXJGcGKDkB216yfzTafJ4dA/edit">here</a>
					{"."}
				</div>
				<br/>
				<div>
					{"Learn how to set up your React app "} 
					<a href = "https://docs.google.com/document/d/15b8BNC9B8EbqUkhkB2pEgw-rdFdqVmXC0Hcfh5cNQFE/edit">here</a>
					{"."}
				</div>
				<br/>
				<div>
					{"Learn the fundamentals of React "} 
					<a href = "https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/">here</a>
					{"."}
				</div>
				<br/>
				<div>
					{"Watch a video tutorial of React "} 
					<a href = "https://www.youtube.com/watch?v=Ke90Tje7VS0&t=32s">here</a>
					{"."}
				</div>
				<br/>
				<div>
					{"Create a navbar using React router "}
					<a href = "https://www.youtube.com/watch?v=Law7wfdg_ls&t=858s">here</a>
					{"."}
				</div>
				<br/>
				<div>
					{"Learn how to host your website in Firebase "} 
					<a href = "https://docs.google.com/document/d/1uGQxP5FYOe4NfP9nLwNEFAkvUh76P-ccARDO_ephhoE/edit">here</a>
					{"."}
				</div>
			</div>
		</div>
		<div className = "text-left">
			<Faq data={FAQ} styles = {FAQstyles}/>
		</div>
		<video loop autoPlay muted className = "p-5">
			<source src={"https://coderssb.com/ProjectSeries/happyCoding.mp4"} type="video/mp4"/>
		</video>

		<div className = "h-80 bg-green-500">
			insert footer
		</div>	
		</>
	);
}

export default ProjectSeries;
