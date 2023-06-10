import { useEffect, useRef, useState } from "react";

const About = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < "Sykalov".length) {
        setText((prevText) => prevText + "Syykalov"[i]);
        console.log("Sykalov"[i]);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 205);
    return () => clearInterval(intervalId);
  }, []);

  console.log(0.7 * 2000);

  return (
    <div id="about" className="about">
      <div className="chaild">
        <div className="chaild__first-section">
          <div className="chaild__first-tityle">
            <div className="chaild__first-tityle-name">Andrey </div>
            <div className="chaild__first-tityle-fiest-name">
              <div className="message">
                <p>~ </p> <p>$</p>{" "}
              </div>
              <div style={{ display: "flex" }}>
                <div className="pc-sykalov">
                  <p ref={paragraphRef}>{text}</p>
                </div>
                <div className="pc">_</div>
              </div>
            </div>
          </div>
          <div className="chaild__links">
            <div className="slider-left dash"></div>
            <div className="social-links mb-40">
              <a href="https://www.instagram.com/">Instagram</a> |{" "}
              <a href="https://www.linkedin.com/">LinkedIn</a>
              <br />
              <a href="https://behance.net/">Behance</a> |{" "}
              <a href="https://dribbble.com/">Dribbble</a>
            </div>
            <a href="https://github.com/Digmai">
              <button className="chaild__button" style={{ color: "#fff" }}>
                GitHUB{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="chaild">
        <div className="chaild__second-section">
          <img src="./photo.jpg" alt="alt" className="chaild__second-photo" />
        </div>
      </div>
      <div className="chaild">
        <div className="chaild__last-section">
          <strong>Приветствую вас на моей веб-странице,</strong> где я
          демонстрирую свои навыки на некоторых веб-приложениях с использованием
          React, Redux и TypeScript. Здесь я делюсь своим опытом создания
          красивых и оптимизированных веб-приложений, а также моих стремлениях к
          постоянному развитию и улучшению своих профессиональных навыков в этой
          области.
        </div>
      </div>
    </div>
  );
};

export default About;
