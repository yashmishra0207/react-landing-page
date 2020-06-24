import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Categories(props) {
  const card = (icon, image, theme, title, desc, idx) => (
    <div className="rainbow my-3">
      <Card
        className="ServiceCard mx-auto"
        key={idx}
        style={{
          width: "18rem",
          border: "0px solid " + theme,
          borderRadius: "10px",
          borderTopWidth: "0",
          overflow: "hidden",
          color: theme,
        }}
      >
        <Card.Header
          className="text-center w-100"
          style={{
            backgroundColor: theme,
            borderRadius: "8px 8px 0 0",
            color: "white",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <p style={{ zIndex: "2", textTransform:'uppercase' }}>{title}</p>
          <i
            className={icon + " text-center"}
            style={{
              fontSize: "calc((1em + 1vmin))",
              position: "absolute",
              bottom: "calc((-1em - 1vmin - 30px) / 2 + 1em / 3 )",
              left: "calc(50% - ((1em + 1vmin + 30px) / 2))",
              backgroundColor: theme,
              color: "white",
              borderRadius: "50%",
              padding: "15px",
            }}
          />
        </Card.Header>
        <Card.Body
          style={{
            padding: "0",
            borderRadius: "8px",
            background: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            top: "2em",
          }}
        >
          <Card.Text
            className="ServiceCardText"
            style={{
              textAlign: "justify",
              color: theme,
              marginBottom: "2em",
              padding: "3.5em 25px 25px 25px",
              backgroundSize: "cover",
            }}
          >
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div
      className="pb-5"
      style={{
        backgroundColor: "#2c3e50",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="text-center pt-5 pb-5">
        <span
          className="px-5 py-3"
          style={{
            fontSize: "20px",
            color:"white",
            background:
              "linear-gradient(to right, rgb(22, 160, 133), rgb(22, 160, 13))",
            borderRadius:"50px 50px"
          }}
        >
          CATEGORIES
        </span>
      </div>
      <Container>
        <Row>
          {props.categories.map((service, index) =>
            card(
              service.icon,
              service.image,
              service.theme,
              service.title,
              service.desc,
              index
            )
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Categories;
