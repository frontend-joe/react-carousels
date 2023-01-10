import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./styles.css";
import { FC, useState } from "react";
import card1 from "./card-1.svg";
import card2 from "./card-2.svg";
import card3 from "./card-3.svg";

const slides = [
  {
    icon: "home",
    page: (
      <>
        <img src={card1} />
        <h2>Home</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
          quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
          blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
          ratione.
        </p>
      </>
    ),
  },
  {
    icon: "settings",
    page: (
      <>
        <img src={card2} />
        <h2>Installations</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
          quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
          blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
          ratione.
        </p>
      </>
    ),
  },
  {
    icon: "lock",
    page: (
      <>
        <img src={card3} />
        <h2>Security</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
          quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
          blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
          ratione.
        </p>
      </>
    ),
  },
];

type NavProps = {
  selectedItem: number;
  onChange: (index: number) => void;
};

const Nav: FC<NavProps> = ({ selectedItem, onChange }) => (
  <nav className="nav">
    <h1>Zapify</h1>
    <div className="buttons">
      {slides.map((slide, index) => (
        <button
          className={index === selectedItem ? "active" : ""}
          key={slide.icon}
          onClick={() => onChange(index)}
        >
          <span className="material-symbols-outlined">{slide.icon}</span>
        </button>
      ))}
    </div>
  </nav>
);

export const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleOnChange = (index: number) => setSelectedItem(index);

  return (
    <>
      <Nav selectedItem={selectedItem} onChange={handleOnChange} />
      <ReactCarousel
        infiniteLoop
        axis="vertical"
        transitionTime={700}
        className="react-carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable={true}
        emulateTouch={true}
        selectedItem={selectedItem}
        onChange={handleOnChange}
      >
        {slides.map((slide) => (
          <div>{slide.page}</div>
        ))}
      </ReactCarousel>
    </>
  );
};
