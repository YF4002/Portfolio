const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages',
			items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C/C++', 'HTML/CSS', 'PHP', 'R'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
				</svg>
			),
		},
		{
			category: 'Frameworks & Libraries',
			items: [
				'React Native',
				'React',
				'Node.js',
				'Next.js',
				'Expo',
				'Firebase',
				'jQuery',
				'Jest',
				'JUnit',
				'Cucumber',
				'Pandas',
				'Scikit-learn',
				'Matplotlib',
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Developer Tools',
			items: [
				'Git',
				'Figma',
				'PyCharm',
				'IntelliJ',
				'JupyterLab',
				'RStudio',
				'Microsoft Office Suite',
				'Power BI',
				'Tableau',
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h10a4 4 0 004-4V8a4 4 0 00-4-4H7a4 4 0 00-4 4v7z" />
				</svg>
			),
		},
		{
			category: 'Cloud & Data Tools',
			items: ['AWS', 'Docker', 'PostgreSQL', 'Stripe API', 'OpenAI', 'Gemini AI', 'Pinecone', 'LlamaIndex'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
	];

return (
	<section className="pt-2 pb-6 px-6 bg-white dark:bg-gray-900 flex-1 flex flex-col justify-start"> {/* Align to top so it sits directly after Education */}
			<div className="max-w-3xl mx-auto space-y-5">
				<header>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">Core Skills</h3>
					<div className="mt-2 h-px bg-gray-200 dark:bg-gray-700 w-full" />
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category} className="space-y-3">
							<div className="flex items-center space-x-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
