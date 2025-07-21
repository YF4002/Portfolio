const EducationSection = () => {
	return (
		<section className="py-6 px-6 bg-white dark:bg-gray-900 max-w-3xl mx-auto">
			<header>
				<h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">Education & Volunteer Experience</h3>
				<div className="mt-2 h-px bg-gray-200 dark:bg-gray-700 w-full" />
			</header>

			<div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300 text-sm max-w-xl mx-auto">
				<div>
					<h4 className="text-md font-medium text-gray-900 dark:text-white">Ball State University</h4>
					<p>Muncie, Indiana | Standing: Junior</p>
					<p className="mt-1 font-semibold">Bachelor of Science in Computer Science, Data Analytics & Machine Learning</p>
					<p className="italic mt-1">Dean’s Lists: 2023 - 2025</p>
				</div>

				{/* Volunteer Experience */}
				<div className="mt-6">
					<h4 className="text-md font-medium text-gray-900 dark:text-white">Topsail Hill Preserve State Park</h4>
					<p className="italic text-gray-600 dark:text-gray-400 text-sm">March 2025 | Destin, FL</p>
					<p className="mt-1">
						Contributed to environmental conservation by building fences, clearing wildlife paths, removing trash, and creating habitats for endangered species. Demonstrated teamwork, reliability, and commitment to ecosystem preservation.
					</p>
				</div>

				<div className="mt-4">
					<h4 className="text-md font-medium text-gray-900 dark:text-white">Habitat for Humanity - South Carolina</h4>
					<p className="italic text-gray-600 dark:text-gray-400 text-sm">March 2024 | Johns Island, SC</p>
					<p className="mt-1">
						Supported construction of homes for underserved communities, collaborating with mentors to gain insights on construction and project management. Helped advance access to safe, affordable housing.
					</p>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
