
import { Monitor, Server, Wrench } from 'lucide-react';

const skillGroups = [
    {
        icon: Monitor,
        title: 'Frontend Development',
        description: 'Membangun tampilan dan antarmuka aplikasi web.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Blade', 'Tailwind CSS', 'Flowbite'],
    },
    {
        icon: Server,
        title: 'Backend Development',
        description: 'Mengembangkan sistem, logika aplikasi, dan database.',
        skills: ['Laravel & Lumen', 'Rest API', 'Auth Google', 'MySQL', 'Supabase'],
    },
    {
        icon: Wrench,
        title: 'Tools & Others',
        description: 'Tools pendukung pengembangan dan desain aplikasi.',
        skills: ['Git', 'GitHub', 'Figma', 'Canva', 'VS Code', 'Balsamiq', 'Enterprise Architect'],
    },
];

const Skills = () => (
    <section id="skills" className="skills">
        <div className="container">
            <div className="skills-header">
                <h2 className="section-title">
                    Keahlian <span>Teknis.</span>
                </h2>
                <p className="skills-description">
                    Teknologi dan tools yang saya gunakan
                    dalam proses pengembangan aplikasi dan website.
                </p>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                        <div className="skill-card" key={group.title}>
                            <div className="skill-card-header">
                                <div className="skill-icon">
                                    <Icon size={30} strokeWidth={1.8} />
                                </div>

                                <div>
                                    <h3>{group.title}</h3>
                                    <p>{group.description}</p>
                                </div>
                            </div>

                            <div className="skill-list">
                                {group.skills.map((skill) => (
                                    <span className="skill-item" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Skills;
