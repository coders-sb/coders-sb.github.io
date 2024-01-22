interface Officer {
	name: string;
	role: string;
	description: string;
	image?: string;
}

interface OfficerGroup {
	executive: Officer[];
	technical: Officer[];
	design: Officer[];
	sponsorships: Officer[];
	[key: string]: Officer[];
}


const officers: OfficerGroup = {
	executive: [
		{
			name: "David Wang",
			role: "President",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/david.jpg",
		},
		{
			name: "Rohil Shah",
			role: "Vice President",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/rohil.jpg",
		},
		{
			name: "Eugene Wong",
			role: "Treasurer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/eugene.jpg",
		},
		{
			name: "Elaine Ho",
			role: "Secretary",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/elaine.jpg",
		},
	],
	technical: [
		{
			name: "Ethan Yuan",
			role: "President",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/ethan.jpg",
		},
		{
			name: "Wesley Hung",
			role: "Technical Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/wesley.jpg",
		},
		{
			name: "Ashwin Trisal",
			role: "Technical Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/ashwin.jpg",
		},
		{
			name: "Sam Zhu",
			role: "Technical Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/sam.jpg",
		},
		{
			name: "Kevin Li",
			role: "Technical Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/kevin.jpg",
		},
	],
	design: [
		{
			name: "Vidit Agarwal",
			role: "Communications Lead",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/vidit.jpg",
		},
		{
			name: "Jennifer Zhu",
			role: "Design Lead",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/jennifer.jpg",
		},
		{
			name: "Shivane Dadi",
			role: "Design Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/shivane.jpg",
		},
		{
			name: "Karen Yuan",
			role: "Outreach Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/karen.jpg",
		},
	],
	sponsorships: [
		{
			name: "Shamita Gurusu",
			role: "Sponsorship Lead",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			image: "/officers/shamita.jpg",
		},
		{
			name: "Ritam Saha",
			role: "Sponsorship Officer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae. Sed euismod, diam id aliquam aliquam, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae.",
			// image: "/officers/ritam.jpg",
		},
	],
};


export default officers;