
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'Beranda', href: '#home' },
        { label: 'Tentang Saya', href: '#about' },
        { label: 'Keahlian', href: '#skills' },
        { label: 'Proyek', href: '#projects' },
        { label: 'Pengalaman', href: '#experience' },
        { label: 'Kontak', href: '#contact' },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
            <nav className="container navbar-inner">

                {/* Logo */}
                <a
                    href="#home"
                    className="logo"
                    onClick={closeMenu}
                >
                    Naufal Hilmy Munte<span>.</span>
                </a>

                {/* Navigasi Desktop */}
                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Tombol Kontak */}
                <a
                    href="#contact"
                    className="nav-contact"
                >
                    Hubungi Saya
                </a>

                {/* Tombol Mobile */}
                <button
                    type="button"
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Buka menu navigasi"
                    aria-expanded={isOpen}
                >
                    {isOpen ? '×' : '☰'}
                </button>

                {/* Navigasi Mobile */}
                {isOpen && (
                    <div className="mobile-menu">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

            </nav>
        </header>
    );
};

export default Navbar;
