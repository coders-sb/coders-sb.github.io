function Index() {

  return (
		<>
			<h1 className="text-3xl font-bold">index</h1>
			<div className="flex space-x-4 mt-6">
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
		</>
  );
}

export default Index
