import CarouselPage from "../../components/carousel/carousel";
import AboutUs from "../about-us/about-us";
import ContactUs from "../contact-us/contact-us";

const Home = () => {
  return (
    <section>
      <div className="section">
        <CarouselPage />
        <AboutUs />
        <ContactUs />
      </div>
    </section>
  );
};

export default Home;
