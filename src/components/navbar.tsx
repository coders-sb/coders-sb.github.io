import React from 'react';

const Navbar: React.FC = () => {
  return (
		<div className="flex justify-between w-full p-6">
			<a href="/" className="hover:underline">
				Home
			</a>
			<div className="flex space-x-4">
				<a href="/about" className="hover:underline">
					About
				</a>
				<a href="/resources" className="hover:underline">
					Resources
				</a>
				<a href="/project-series" className="hover:underline">
					Project Series
				</a>
				<a href="/events" className="hover:underline">
					Events
				</a>
				<a href="/alumni" className="hover:underline">
					Alumni
				</a>
			</div>
		</div>
  );
};

export default Navbar;
