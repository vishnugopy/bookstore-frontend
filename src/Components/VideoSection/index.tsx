import "./style.scss";
import Button from "@mui/material/Button";

function VideoSection() {
  return (
    <section className="videosec">
     <div className="promo">
       </div>
      <div className="changebuttons">
        <Button>Promo1</Button>
        <Button>Promo2</Button>
        <Button>Promo3</Button>
        <Button>Promo4</Button>
        <Button>Promo5</Button>
       </div>
    </section>
  );
}

export default VideoSection;
