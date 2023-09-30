import SaveDate from "@/Components/SaveDate";

import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import LoveStory from "@/Components/LoveStory";
import WeddingEvent from "@/Components/WeddingEvent";

export default function Home() {
  return (
    <section>
      {/* <Navbar /> */}
      <Hero />
      <SaveDate />
      <LoveStory />
      <WeddingEvent />
    </section>
  );
}
