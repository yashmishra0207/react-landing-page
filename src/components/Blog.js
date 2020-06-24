import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Blog(props) {
  const blogCard = (image, name, date, review) => (
    <Card style={{ width: "18rem", boxShadow: "0 2px 6px #555, 0 -4px orange" }} className="mx-auto mt-5 mb-3">
      <img
        src={image}
        className="mx-auto"
        style={{ width: "5rem", height: "5rem", position: "absolute", left: "calc(50% - 2.5rem)", top: "calc(-2.5rem)" }}
      />
      <Card.Body className="mt-3">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text style={{textAlign: "justify"}}>{review}</Card.Text>
      </Card.Body>
      <Card.Footer className="mt-2 text-muted" style={{backgrondColor:"gray !important"}}>
        <span className="pull-right">-posted on {date}</span>
      </Card.Footer>
    </Card>
  );

  return (
    <div
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
          CATEGORIES
        </span>
      </div>
      <Container>
        <Row>
          {props.blogs.map((blog, index) =>
            blogCard(blog.userImg, blog.userName, blog.date, blog.review)
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Blog;
