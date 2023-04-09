import "./Footer.css";
import "./bubbleFooter.css";

export default function Footer() {
  return (
    <div className="rodape">
      <footer>
        <div className="main">
          <div className="footer">
            <div className="bubbles">
              {Array.from({ length: 128 }).map(() => (
                <div
                  className="bubble"
                  style={{
                    "--size": `${2 + Math.random() * 4}rem`,
                    "--distance": `${6 + Math.random() * 4}rem`,
                    "--position": `${-5 + Math.random() * 110}%`,
                    "--time": `${2 + Math.random() * 2}s`,
                    "--delay": `${-1 * (2 + Math.random() * 2)}s`,
                  }}
                />
              ))}
            </div>
            <div className="content">
              <p className="texto">Copyright © 2023 Murilo Marcondes</p>
            </div>
          </div>
        </div>
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
              <feComposite in="SourceGraphic" in2="blob" operator="atop" />
            </filter>
          </defs>
        </svg>
      </footer>
    </div>
  );
}
