import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import carapp from "../../assets/projectimg/carrapp.png";
import gameshop from "../../assets/projectimg/gameshop.png";
import appzadach from "../../assets/projectimg/appzadach.png";
import asakabank from "../../assets/projectimg/asakabank.png";
import blogapp from "../../assets/projectimg/blogapp.png";
import countrapp from "../../assets/projectimg/countrapp.png";
import crudlaptop from "../../assets/projectimg/crudlaptop.png";
import fullapp from "../../assets/projectimg/fullapp.png";
import gifapp from "../../assets/projectimg/gifapp.png";
import jsgamesonnitop from "../../assets/projectimg/jsgamesonnitop.png";
import maxwayapp from "../../assets/projectimg/maxwayapp.png";
import onlinechatapp from "../../assets/projectimg/onlinechatapp.png";
import personalweb from "../../assets/projectimg/personalweb.png";
import photogall from "../../assets/projectimg/photogall.png";
import pumaweb from "../../assets/projectimg/pumaweb.png";
import shopapp from "../../assets/projectimg/shopapp.png";
import signgoogleproduct from "../../assets/projectimg/signgoogleproduct.png";
import tavakalgamejs from "../../assets/projectimg/tavakalgamejs.png";
import weatherapp from "../../assets/projectimg/weatherapp.png";
import x0game from "../../assets/projectimg/x0game.png";

export function Portfolio() {
  const heandleclick = () => {
    alert("bu proektni korish uchin menga murojat qiling");
  };
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX" >
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={carapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Avtosalon + (admin panel)</h3>
                <p>
                I created this site for my portfolio.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Redux(Redux-toolkit)</li>
                </ul>
              </footer>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={gameshop}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Game store + (admin panel)</h3>
                <p>
                I created this site for my portfolio.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Redux(Redux-toolkit)</li>
                </ul>
              </footer>
            </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
         
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={asakabank}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Asakabank</h3>
                <p>
                 
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                </ul>
              </footer>
            </div>
       
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={blogapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Blog add photo</h3>
                <p></p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Firebase</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={countrapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Countr info</h3>
                <p>
                  
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={crudlaptop}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Laptop crud</h3>
                <p>

                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={fullapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Online Shop</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={gifapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Gif app</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={jsgamesonnitop}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Random number</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={maxwayapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Maxway </h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={onlinechatapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Online Chat</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Firebase</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>
        
       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={personalweb}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Website</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={photogall}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Photo Gallery</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={pumaweb}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Puma site</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={shopapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Online Shop</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Semantic</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={signgoogleproduct}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Sign in Firebase</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>Antd design</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Next js</li>
                  <li>Redux</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>
       
       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={tavakalgamejs}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Game JS</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={weatherapp}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Weather app</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Redux(Redux-toolkit)</li>
                </ul>
              </footer>
            </div>
            
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={x0game}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>x-0 game Js</h3>
                <p>I created this site for my portfolio.</p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                </ul>
              </footer>
            </div>
           
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
            <div className="project" onClick={heandleclick} style={{cursor:"pointer"}}>
              <div className="body">
                <img
                  src={appzadach}
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                <h3>Worktable</h3>
                <p>
                 
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="tech-list">
                  <li>JavaScript</li>
                </ul>
              </footer>
            </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
