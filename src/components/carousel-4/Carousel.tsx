import "./styles.css";
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";

const options: Options = {
  perPage: 2,
  arrows: false,
  pagination: false,
};

const slides = [
  {
    icon: "build",
    text: "Building robust software solutions.",
  },
  {
    icon: "bug_report",
    text: "Expert at debugging complex issues.",
  },
  {
    icon: "palette",
    text: "User interface design and animation.",
  },
  {
    icon: "lock",
    text: "Implementing secure applications.",
  },
  {
    icon: "dns",
    text: "Dev ops and web infrastructure.",
  },
  {
    icon: "person",
    text: "Top-level communication skills.",
  },
  {
    icon: "terminal",
    text: "Coding advanced web applications.",
  },
];

export const Carousel = () => {
  return (
    <>
      <nav>My Skills</nav>
      <div className="wrapper">
        <div className="splide">
          <Splide options={options} aria-label="My Favorite Images">
            {slides.map((slide) => (
              <SplideSlide>
                <div className="slide">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};
