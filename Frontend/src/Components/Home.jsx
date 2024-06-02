import { CarouselHome } from "./CarouselHome";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import pone from "../images/product-1.png";
import ptwo from "../images/product-2.png";
import pthree from "../images/product-3.png";

const Home = () =>{
  const carouselItems = [
  {
    background: one,
    prodImage: pone,
    subHeading: "New Now",
    heading: "Eames LCW Chair Red Stained",
    paragraph:
      "This stunning red ash chair from Vitra has matured into an iconic piece of furniture.",
    offer: "25%",
  },
  {
    background: two,
    prodImage: ptwo,
    subHeading: "New Now",
    heading: "Eames LCW Chair Red Stained",
    paragraph:
      "This stunning red ash chair from Vitra has matured into an iconic piece of furniture.",
    offer: "25%",
  },
  {
    background: three,
    prodImage: pthree,
    subHeading: "New Now",
    heading: "Eames LCW Chair Red Stained",
    paragraph:
      "This stunning red ash chair from Vitra has matured into an iconic piece of furniture.",
    offer: "25%",
  },
];
  return(
    <>
      <CarouselHome carouselItems={carouselItems}/>
    </>
  )
}
export default Home;