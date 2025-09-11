import About from "./components/about/page";
import Banner from "./components/bannner/page";
import Hero from "./components/hero/page";
import Package from "./components/package/page";
import Statistic from "./components/statistic/page";
export default function Home() {
  
  return (
    <main className="h-full w-full">
      <Hero />
      <Statistic />
      <Banner />
      <Package />
      <About />
    </main>
  );
}