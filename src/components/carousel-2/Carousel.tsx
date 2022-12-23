import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./styles.css";
import { FC, useState } from "react";

const slides = [
  {
    icon: "home",
    color: "#691aa6",
    page: (
      <>
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
    color: "#b01d98",
    page: (
      <>
        <h2>Settings</h2>
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
    color: "#0888c4",
    page: (
      <>
        <h2>Account</h2>
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
    {slides.map((slide, index) => (
      <button
        className={index === selectedItem ? "active" : ""}
        key={slide.color}
        onClick={() => onChange(index)}
      >
        <span className="material-symbols-outlined">{slide.icon}</span>
      </button>
    ))}
  </nav>
);

export const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleOnChange = (index: number) => setSelectedItem(index);

  return (
    <>
      <ReactCarousel
        infiniteLoop
        axis="vertical"
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
          <div style={{ background: slide.color }}>{slide.page}</div>
        ))}
      </ReactCarousel>
    </>
  );
};
