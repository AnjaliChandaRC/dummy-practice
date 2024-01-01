import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import CountDown from "@/components/CountDown";
import FAQs from "@/components/FAQs";
import Form from "@/components/Form";
import Tabs from "@/components/Tabs";
import TypeWritter from "@/components/TypeWritter";
import Calendar from "@/components/Calendar";
import Footer from "@/components/Footer";
import SmallCounter from "@/components/SmallCounter";
import TymerCounter from "@/components/TymerCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <CountDown />
      <FAQs />
      <Form />
      <Tabs />
      <TypeWritter />
      <Calendar />
      <TymerCounter />
      <SmallCounter />
      <Footer />
    </>
  );
}
