import Navbar from "@/components/Navbar/Navbar";
import Story from "@/components/Story/Story";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import Location from "@/components/Location/Location";
import DressCode from "@/components/DressCode/DressCode";
import RSVP from "@/components/RSVP/RSVP";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        groom="Kayky"
        bride="Juliah"
      />

      <Story />

      <Countdown />

      <Location />

      <DressCode />

      <RSVP />
    </>
  );
}