import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bataille-navale.png";
import projImg2 from "../assets/img/server.png";
import projImg3 from "../assets/img/devops.png";
import projImg4 from "../assets/img/soon.PNG";
import projImg5 from "../assets/img/petit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Jeu bataille navale",
      description: "Python",
      imgUrl: projImg1,
    },
    {
      title: "Application d'une messagerie instantanée",
      description: "Python",
      imgUrl: projImg2,
    },
    {
      title: "Site web portfolio",
      description: "React JS",
      imgUrl: projImg3,
    },
    {
      title: "Morpion",
      description: "Python",
      imgUrl: projImg5,
    },
    {
      title: "Jeu de platforme",
      description: "En cours de développement",
      imgUrl: projImg4,
    },
    {
      title: "Futur SAAS",
      description: "En cours de développement",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Dynamique et engagé, je travaille constamment sur une variété de projets que je mets à jour régulièrement sur ce site, offrant ainsi un aperçu en temps réel de mon évolution et de mes compétences en développement.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Prochainement...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
