import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer"; // Import the Footer component

export default function Home() {
return (
<main>
<Hero />
<NewProducts />
<Testimonials />
<Footer /> {/* Add the Footer component here */}
</main>
);
}