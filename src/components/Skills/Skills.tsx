import { Container } from "./styles";

export function Skills() {
  return (
    <Container id="skills">
      <div className="about-text">
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <div className="skill-shape">
            <div style={{ width: "95%" }} className="skill-shape-in">
              <div>HTML</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "94%" }} className="skill-shape-in">
              <div>CSS</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "94%" }} className="skill-shape-in">
              <div>SCSS(SASS)</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "93%" }} className="skill-shape-in">
              <div>Bootstrap</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "65%" }} className="skill-shape-in">
              <div>Antd</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "60%" }} className="skill-shape-in">
              <div>Material-ui</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "90%" }} className="skill-shape-in">
              <div>JavaScript</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "85%" }} className="skill-shape-in">
              <div>React JS</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "75%" }} className="skill-shape-in">
              <div>Redux</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="skill-shape">
            <div style={{ width: "84%" }} className="skill-shape-in">
              <div>Redux-toolkit</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
