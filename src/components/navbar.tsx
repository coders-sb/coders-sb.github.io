import React from 'react';

const Navbar: React.FC = () => {
  return (
		<div className="flex justify-between w-full p-6">
			<a href="/" className="hover:underline">
				Home
			</a>
			<div className="flex space-x-4 items-center">
				<a href="/about" className="hover:underline">
					About
				</a>
				{/* <a href="/resources" className="hover:underline">
					Resources
				</a> */}
				<a href="/project-series" className="hover:underline">
					Project Series
				</a>
				{/* <a href="/events" className="hover:underline">
					Events
				</a>
				<a href="/alumni" className="hover:underline">
					Alumni
				</a> */}
				<a href="https://docs.google.com/forms/d/e/1FAIpQLScrCH1rK0SbXWQyG8gjKjwh13NkLVZkz7HT5QuhCD2vBlJTIA/viewform?usp=sf_link" target="_blank">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
						Register
					</button>
				</a>
			</div>
		</div>
  );
};

export default Navbar;
