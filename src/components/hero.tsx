import React from "react";

interface HeroProps {
  title: string;
  imgSrc: string;
}


const Hero: React.FC<HeroProps> = ({ title, imgSrc }) => {
	return (
		<div style={{ backgroundImage: `url(${imgSrc})` }} className="">
			<h1>{title}</h1>
		</div>
	);
};

export default Hero;
