import "./Footer.css";

export default function Footer() {
  return (
    <div className="rodape">
      <footer>
        <div className="main">
          <div className="footer" style={{height: 114, marginBottom: "-100%"}}>
            <div className="bubbles">
              {Array.from({ length: 100 }).map(() => (
                <div
                  className="bubble"
                  style={{
                    marginBottom: 20,
                    "--size": `${1 + Math.random() * 2}rem`,
                    "--distance": `${6 + Math.random() * 4}rem`,
                    "--position": `${-5 + Math.random() * 100}%`,
                    "--time": `${2 + Math.random() * 2}s`,
                    "--delay": `${-1 * (2 + Math.random() * 2)}s`,
                  }}
                />
              ))}
            </div>
            <div className="content" style={{height: 50, textAlign: "center", alignItems: "center", justifyContent: "center"}}>
              <p className="texto" style={{color: "#03e9f4", fontSize: 18}}>Copyright © 2023 Murilo Marcondes</p>
            </div>
          </div>
        </div>
        <svg style={{height: 50}}>
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
