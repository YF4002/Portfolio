
import ProfileSection from './components/ProfileSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

export default function MinimalistPortfolio() {
	   return (
	   <main className=" flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			   <div className="flex-1 grid grid-cols-1 md:grid-cols-5 h-full">
					   {/* Left Column - Profile and Skills */}
					   <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col h-full flex-1">
							   <div className="flex flex-col flex-1">
									   <ProfileSection />
									   <EducationSection />
									   <SkillsSection />
							   </div>
					   </div>

					   {/* Right Column - Projects and Experience */}
					   <div className="md:col-span-3 flex flex-col h-full flex-1">
							   <div className="flex flex-col flex-1">
									   {/* Projects Section */}
									   <div>
											   <ProjectsSection />
									   </div>

									   {/* Experience Section */}
									   <div>
											   <ExperienceSection />
									   </div>
							   </div>
					   </div>
			   </div>
	   </main>
	   );
}
