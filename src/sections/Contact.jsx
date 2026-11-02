
import {
    Mail,
    GitBranch,
    MessageCircle,
    ArrowUpRight,
} from 'lucide-react';

const contacts = [
    {
        icon: Mail,
        label: 'Email',
        value: 'Kirim Email',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=naufalhilmymunte@gmail.com',
    },
    {
        icon: GitBranch,
        label: 'GitHub',
        value: 'Lihat Repository',
        link: 'https://github.com/naufalmunte',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: 'Hubungi via WhatsApp',
        link: 'https://wa.me/62895602341207',
    },
];

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-card">
                    <span className="contact-label">
                        LET'S WORK TOGETHER
                    </span>

                    <h2>
                        Punya Ide atau Proyek?
                        <span> Mari Berdiskusi.</span>
                    </h2>

                    <p className="contact-description">
                        Saya terbuka untuk kesempatan kerja, kolaborasi,
                        maupun diskusi seputar pengembangan aplikasi web.
                        Jangan ragu untuk menghubungi saya!
                    </p>

                    <a
                        href={contacts[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-main-button"
                    >
                        <Mail size={18} />
                        Hubungi Saya
                        <ArrowUpRight size={18} />
                    </a>

                    <div className="contact-divider"></div>

                    <div className="contact-links">
                        {contacts.map((contact) => {
                            const Icon = contact.icon;

                            return (
                                <a
                                    key={contact.label}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <div className="contact-icon">
                                        <Icon size={21} />
                                    </div>

                                    <div>
                                        <span>{contact.label}</span>
                                        <p>{contact.value}</p>
                                    </div>

                                    <ArrowUpRight
                                        className="contact-arrow"
                                        size={17}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
