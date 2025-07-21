const ProjectsSection = () => {
	const projects = [
		{
			title: 'Credit Card Fraud Detection with Random Forest',
			period: '2024',
			description:
				'Built a machine learning model using Random Forest Classifier to detect credit card fraud, improving detection accuracy on transactional data.',
			technologies: ['Python', 'Machine Learning', 'Random Forest', 'Scikit-learn'],
			link: '#',
		},
		{
			title: 'GroupSync - Social Networking Application',
			period: '2023',
			description:
				'Developed a Java-based desktop app allowing users to create profiles, join groups, and connect with others based on shared interests.',
			technologies: ['Java', 'Swing', 'Desktop Application'],
			link: '#',
		},
		{
			title: 'AI ChatBot',
			period: '2024',
			description:
				'Built a full-stack intelligent customer support chatbot using Next.js, React, Node.js, and Gemini AI to enhance user interaction and automate support.',
			technologies: ['Next.js', 'React', 'Node.js', 'Gemini AI'],
			link: '#',
		},
		{
			title: 'TalkSphere - Full-Stack Social Networking Platform',
			period: '2023',
			description:
				'Created a dynamic social networking web app using HTML, CSS, JavaScript, jQuery, PHP, and MySQL from scratch.',
			technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
			link: '#',
		},
	];

	return (
		<section className="py-10 px-6 bg-white dark:bg-gray-900">
			<div className="max-w-3xl mx-auto space-y-6">
				<header>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">Projects</h3>
					<div className="mt-2 h-px bg-gray-200 dark:bg-gray-700 w-full" />
				</header>

				<div className="space-y-8">
					{projects.map((project, index) => (
						<article key={`${project.title}-${index}`} className="relative">
							<div className="relative pl-5 border-l-2 border-gray-200 dark:border-gray-700">
								<span className="absolute -left-1 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-2">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">
											{project.link !== '#' ? (
												<a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
													{project.title}
												</a>
											) : (
												project.title
											)}
										</h4>
										<time className="text-sm text-gray-500 dark:text-gray-400">{project.period}</time>
									</div>

									<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>

									<div className="flex flex-wrap gap-2 mt-3">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
