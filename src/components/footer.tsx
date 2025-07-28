const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background relative z-50 py-4 text-center font-mono tracking-tighter">
            <p>&copy; {currentYear} Lucas Chen</p>
        </footer>
    );
};

export default Footer;
