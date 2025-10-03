import About from "./components/about";
import Advantage from "./components/advantages";
import Article from "./components/article";
import Banner from "./components/banner";
import Faqs from "./components/faqs";
import Hero from "./components/hero";
import Package from "./components/package";
import Services from "./components/services";
import Statistic from "./components/statistic";
import Testimoni from "./components/testimoni";
export default function Home() {

  return (
    <main className="h-full w-full dark:bg-gray-800">
      <Hero />
      <Statistic />
      <Banner />
      <Package />
      <Advantage />
      <Services />
      <About />
      <Testimoni />
      <Article />
      <Faqs />
    </main>
  );
}