const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Developer Apprentice',
			company: 'Digital Corps — Muncie, IN',
			period: 'Sep 2025 – Present',
			highlights:
				'Design, develop, and deploy full-stack web applications and tools for 19,000+ students, staff, and faculty, turning designs into reliable, user-friendly digital solutions. Collaborate with university partners, applying logical thinking, problem-solving, and detail-oriented development to deliver creative solutions on fast-paced, evolving project timelines.',
		},
		{
			role: 'Undergraduate Data Science Researcher',
			company: 'The Data Mine — Purdue University, West Lafayette, IN',
			period: 'Aug 2025 – Present',
			highlights:
				"Partnered with BASF to design data-driven solutions for customer segmentation and regional grower personas, aligning business problems with technical insights. Applied Python, SQL, and Spark on large demographic and geospatial datasets to uncover adoption patterns in agricultural technology. Leveraged Databricks notebooks for scalable analysis and Tableau/Power BI for interactive visualizations supporting strategic decisions.",
		},
		{
			role: 'AI and Automation Extern',
			company: 'Outamation',
			period: 'Jul 2025 – Present',
			highlights:
				'Built modular AI pipelines with OCR (Tesseract, PaddleOCR) and PDF parsing (PyMuPDF), improving document classification accuracy by 30%. Developed a LlamaIndex-powered RAG system and benchmarked OCR/LLM retrieval performance using Mistral and Phi-2.',
		},
		{
			role: 'Software Development Intern',
			company: 'University-Industry Partnership',
			period: 'May 2025 – Jul 2025',
			highlights:
				'Built a cross-platform mobile MVP using React Native, TypeScript, Firebase, and Expo. Developed 10+ reusable UI components and improved cross-platform accessibility by 40%. Contributed to 5 Agile sprints and collaborated in a 4-person team.',
		},
		{
			role: 'Accessibility Tester',
			company: 'Unified Technology Support',
			period: 'Dec 2024 – Present',
			highlights:
				'Improved digital accessibility for 10+ campus platforms using JAWS, NVDA, and WAVE, achieving 95% WCAG 2.1 AA compliance. Documented 20+ critical accessibility issues and guided 5+ teams through remediation, reducing issue resolution time by 40%.',
		},
		{
			role: 'Software Engineer',
			company: 'Headstarter',
			period: 'Jul 2024 – Sep 2024',
			highlights:
				'Developed and deployed 5+ AI-driven web apps using Next.js, OpenAI, Pinecone, and StripeAPI. Mentored 4 engineering fellows and introduced CI/CD pipelines and Git workflows, enhancing code quality and engineering throughput.',
		},
	];

	return (
		<section className="py-10 px-6 bg-white dark:bg-gray-900">
			<div className="max-w-3xl mx-auto space-y-6">
				<header>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="mt-2 h-px bg-gray-200 dark:bg-gray-700 w-full" />
				</header>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<article key={`${exp.company}-${index}`} className="relative">
							<div className="relative pl-5 border-l-2 border-gray-200 dark:border-gray-700">
								<span className="absolute -left-1 top-2.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-2">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<time className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</time>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
