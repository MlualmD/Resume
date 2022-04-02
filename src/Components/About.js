import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import me from "../images/me.png";
import axios from "axios";
import fileDownload from "js-file-download";
import Slide from "react-reveal";

class About extends Component {
  downloadResume = (e) => {
    axios.get("/download", { responseType: "arraybuffer" }).then((res) => {
      fileDownload(res.data, "resume.pdf");
    });
  };

  render() {
    return (
      <div className="bg-dark text-light text-center py-5" id="about">
        <Row className="no-gutters pt-5">
          <Col md="4" className="">
            <Slide left>
              <img
                src={me}
                alt="self portrait"
                className="rounded-circle my-auto px-3 py-3"
                style={{ height: "200px" }}
              />
            </Slide>
          </Col>
          <Col className="px-5">
            <Slide right>
              <h1 className="text-left">About me</h1>
              <h5 className="text-white-50 text-left">
                Full‌ ‌Stack‌ ‌software‌ ‌developer (web)... ‌<br></br> ‌Experienced‌
                ‌in‌ ‌positions‌ ‌that‌ ‌require‌ ‌teamwork, working‌ ‌under‌
                ‌pressure‌ ‌with multiple ‌interfaces. ‌ ‌ Works‌ ‌well‌
                ‌independently‌ ‌and‌ as a part of a ‌team, excellent‌
                ‌interpersonal‌ ‌skills, ‌fast‌ learner. ‌ ‌ Motivated, ‌
                ‌goal-oriented, meets‌ ‌goals‌ ‌of‌ ‌productivity‌ ‌and‌
                ‌schedule‌.
              </h5>
              <Button
                outline
                color="success"
                className="mt-3 float-left"
                onClick={this.downloadResume}
              >
                Download CV/Resume
              </Button>
            </Slide>
          </Col>
        </Row>
      </div>
    );
  }
}
export default About;
