
import { useState } from 'react';
import {
    GitBranch,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const projects = [
    {
        number: '01',
        title: 'Door Smeer',
        category: 'Final Project',
        description:
            'Sistem Informasi Manajemen Layanan Door Smeer Mobil dengan fitur pemindaian QR Code untuk membantu pengelolaan pelanggan, antrean, layanan, karyawan, pembayaran, dan stok.',
       images: [
            '/images/door-smeer/1.jpeg',
            '/images/door-smeer/2.jpeg',
            '/images/door-smeer/3.jpeg',
            '/images/door-smeer/4.jpeg',
            '/images/door-smeer/5.jpeg',
            '/images/door-smeer/6.jpeg',
            '/images/door-smeer/7.jpeg',
            '/images/door-smeer/8.jpeg',
            '/images/door-smeer/9.jpeg',
            '/images/door-smeer/10.jpeg',
        ],
        technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/naufalmunte/tugas_akhir',
        demo: 'https://doorsmeer.site.je/',
    },
    {
        number: '02',
        title: 'Gerai Ikan Bilih Mario',
        category: 'E-Commerce Website',
        description:
            'Website e-commerce untuk penjualan produk oleh-oleh khas Minang dengan fitur autentikasi pengguna, katalog produk, keranjang belanja, checkout QRIS, dan manajemen pesanan.',
        images: [
            '/images/gerai-mario/1.jpeg',
            '/images/gerai-mario/2.jpeg',
            '/images/gerai-mario/3.jpeg',
            '/images/gerai-mario/4.jpeg',
            '/images/gerai-mario/5.jpeg',
            '/images/gerai-mario/6.jpeg',
            '/images/gerai-mario/7.jpeg',
            '/images/gerai-mario/8.jpeg',
            '/images/gerai-mario/9.jpeg',
            '/images/gerai-mario/10.jpeg',
            '/images/gerai-mario/11.jpeg',
        ],
        technologies: ['Laravel', 'Auth Google', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/naufalmunte/titipsini',
        demo: 'https://geraimario.infinityfreeapp.com/',
    },
    {
        number: '03',
        title: 'TitipSini',
        category: 'Web Application',
        description:
            'Aplikasi web TitipSini untuk membantu pengguna dalam melakukan layanan Titip Barang, Kendaraan dan Bangunan.',
        images: [
            '/images/titipsini/1.jpeg',
            '/images/titipsini/2.jpeg',
            '/images/titipsini/3.jpeg',
            '/images/titipsini/4.jpeg',
            '/images/titipsini/5.jpeg',
            '/images/titipsini/6.jpeg',
            '/images/titipsini/7.jpeg',
            '/images/titipsini/8.jpeg',
            '/images/titipsini/9.jpeg',
            '/images/titipsini/10.jpeg',
            '/images/titipsini/11.jpeg',
            '/images/titipsini/12.jpeg',
            '/images/titipsini/13.jpeg',
            '/images/titipsini/14.jpeg',
            '/images/titipsini/15.jpeg',
        ],
        technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/naufalmunte/titipsini',
        demo: 'https://titipsini.site.je/',
    },
];

const ProjectCard = ({ project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <article className="project-card">
            {/* IMAGE CAROUSEL */}
            <div className="project-image">
                <img
                    key={project.images[currentImage]}
                    src={project.images[currentImage]}
                    alt={`${project.title} - Screenshot ${currentImage + 1}`}
                    loading="lazy"
                />

                <span className="project-number">
                    {project.number}
                </span>

                {project.images.length > 1 && (
                    <>
                        <button
                            type="button"
                            className="project-slider-arrow project-slider-prev"
                            onClick={previousImage}
                            aria-label="Gambar sebelumnya"
                        >
                            <ChevronLeft size={21} />
                        </button>

                        <button
                            type="button"
                            className="project-slider-arrow project-slider-next"
                            onClick={nextImage}
                            aria-label="Gambar selanjutnya"
                        >
                            <ChevronRight size={21} />
                        </button>

                        <div className="project-slider-indicator">
                            {currentImage + 1} / {project.images.length}
                        </div>

                        <div className="project-slider-dots">
                            {project.images.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    className={`project-slider-dot ${
                                        currentImage === index ? 'active' : ''
                                    }`}
                                    onClick={() => setCurrentImage(index)}
                                    aria-label={`Lihat gambar ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-content">
                <span className="project-category">
                    {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-technologies">
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-actions">
                    <a
                        href={project.demo || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-demo"
                        onClick={(e) => {
                            if (!project.demo) e.preventDefault();
                        }}
                    >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                    </a>

                    <a
                        href={project.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-code"
                        onClick={(e) => {
                            if (!project.github) e.preventDefault();
                        }}
                    >
                        <GitBranch size={16} />
                        <span>Source Code</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">
                        Proyek<span>.</span>
                    </h2>

                    <p className="projects-subtitle">
                        Beberapa proyek yang pernah saya kerjakan
                        dalam proses belajar dan pengembangan aplikasi.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
