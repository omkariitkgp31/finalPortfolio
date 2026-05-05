import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen flex flex-col">
      <ScrollyCanvas />
      <Projects />
      <Footer />
    </main>
  );
}
