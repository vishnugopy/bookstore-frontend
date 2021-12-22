import "./style.scss";
import VideoSection from "../../Components/VideoSection";
import Advertisiment from "../../Components/AdsSection";

function Home() {
  return (
    <section className="homesection">
      <main>
        <VideoSection />
      </main>
      <aside>
        <Advertisiment />
      </aside>
    </section>
  );
}

export default Home;
