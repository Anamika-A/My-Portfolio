import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Landingpageimg from '../assets/img/musicplayer.jpg'
import portfolioimg from '../assets/img/portfolioimg.jpg'
import Movingcar from '../assets/img/movingcar.jpg'
import cakeshop from '../assets/img/cakeshop.jpg'


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "covers HTML/CSS3/Javascript/React/React BS/Animate.CSS/NodeJS(Nodemailer) Concept",
      imgUrl: portfolioimg,
    },
    {
      title: "Music Player Landing Page",
      description: "Responsive page using CSS3/BS5 Components",
      imgUrl: Landingpageimg,
    },
    {
      title: "The Moving Car",
      description: "Fusion of CSS and its Libraries(CSS3/SASS/Animate.CSS)",
      imgUrl: Movingcar,
    },
    {
      title: "Cakeshop-app(Simple Redux functionality demo)",
      description: "Covers the concept of React-Redux package",
      imgUrl: cakeshop,
    },
    {
      title: "Add next Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Add next Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p><h3>Check my Lists of Projects Here</h3>Tools and Languages used - HTML5, CSS3, BS5, Javascript, React, React BS, Redux, Animate.css, NodeJS...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p>Place to added Project Description </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Place to added Project Description </p>
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
