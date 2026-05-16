// components/HeroSection.js
import "@/app/styles/herosection.css";
import Link from 'next/link';
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 >Delicious Recipes for <span>Every Occasion</span></h1>
        <p >Explore a variety of tasty recipes and cooking tips to make every meal special.</p>
        <Link href="/recipies" className="hero-button">Discover Recipes</Link>
      </div>
      <div className="hero-image">
      <Image
          src="/images/main-img.jpg"
          alt="Picture of a woman in the gym"
          layout="fill" 
          objectFit="cover" 
        />

      </div>
    </main>
  );
};

export default HeroSection;
