import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer(props) {
  return (
    <React.Fragment>
    <div
      className="pb-4"
      style={{
        backgroundColor: "#232323",
      }}
    >
      <Container style={{color:"darkorange"}}>
        <Row className="pt-5 pb-4">
          <span className="mx-auto px-5 text-center">
          <i className="fa fa-map-marker px-2 py-1" style={{backgroundColor:'darkorange', borderRadius:'15px', color:'#232323'}}/>&nbsp;&nbsp;&nbsp;{props.footer.address}
          </span>
        </Row>
        <Row className="m-auto w-50 text-center">
          {props.footer.socialMedia.map((media, index) => (
            <span className="mx-auto" key={index}><a href={media.link} style={{textDecoration:"none", color:"white"}}><i className={"SocialMediaIcon "+ media.icon} style={{fontSize:"2rem"}}/></a></span>
          ))}
        </Row>
      </Container>
    </div>
    <div className="p-2 text-center" style={{backgroundColor: "#141414",color:'gray', fontSize: "0.8em"}}>
      {props.footer.copyright}
    </div>
    </React.Fragment>
  );
}
export default Footer