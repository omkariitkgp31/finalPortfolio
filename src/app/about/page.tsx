import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Me | Omkar Singh",
  description: "Learn more about Omkar Singh, a creative developer specializing in immersive web experiences.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#121212] min-h-screen flex flex-col">
      <About />
      <Footer />
    </main>
  );
}
