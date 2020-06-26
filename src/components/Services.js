import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Services(props) {
  const customCard = (icon, title, desc, idx) => (
    <div className="p-5 m-auto" key={idx}>
    <div className="loader">
      <Card
        className="ServicesCard p-5 text-center"
      >
        <Card.Body style={{display:'flex', alignItems:'center'}}>
          <div className="ServicesCardOther">
          <i
            className={"display-4 mb-4 " + icon}
            style={{
              padding: "10px",
            }}
          />
          <Card.Title style={{fontSize:'1.5em',}}>{title}</Card.Title>
          </div>
          <div className="ServicesCardText">
            {desc}
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );

  return (
    <div
      id="servicesDiv"
      className="pb-5"
      style={{
        backgroundColor: "#3498db",
      }}
    >
      <div className="text-center pt-5 pb-5">
        <span
          className="px-5 py-3"
          style={{
            fontSize: "20px",
            color: "#3498db",
            background: "white",
            borderRadius: "50px 50px",
          }}
        >
          SERVICES
        </span>
      </div>
      <Container>
        <Row>
          {props.services.map((service, index) =>
            customCard(service.icon, service.title, service.desc, index)
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Services;
