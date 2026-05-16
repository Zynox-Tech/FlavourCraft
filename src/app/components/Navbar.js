import Link from 'next/link';
import "@/app/styles/navbar.css"

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div className="navbar-logo">
                <h1>flavor<span>Craft.</span></h1>
            </div>
            <nav className="navbar-nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/recipies">Recipes</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
