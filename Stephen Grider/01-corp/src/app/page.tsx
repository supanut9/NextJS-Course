import heroImg from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgData={heroImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
