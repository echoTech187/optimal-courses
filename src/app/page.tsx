import About from "./components/about/page";
import Advantage from "./components/advantages/page";
import Article from "./components/article/page";
import Banner from "./components/bannner/page";
import Faqs from "./components/faqs/page";
import Hero from "./components/hero/page";
import Package from "./components/package/page";
import Services from "./components/services/page";
import Statistic from "./components/statistic/page";
import Testimoni from "./components/testimoni/page";
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