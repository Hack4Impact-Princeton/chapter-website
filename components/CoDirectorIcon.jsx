import React from "react";
import { Col, Card } from "reactstrap";

const CoDirectorIcon = ({ name, title, image, memberSlug, linkedIn }) => {
  return (
    <Col md="3">
      <Card className="border-0 member-icon">
        <div className="text-center">
          <a href={memberSlug}>
            <img
              src={image.url}
              alt={name}
              className="rounded-circle img-fluid team-icon"
            />
          </a>
        </div>
      </Card>

      <div className="card-body">
        <p className="text-center">
          <b> {name} </b> <br /> {title && <> {title}</>}
          {linkedIn && title && " | "}
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <img
                width="12"
                className="linkedin-icon"
                src="/icons/linkedin.svg"
                alt={`${name}'s LinkedIn`}
              />
            </a>
          )}
        </p>
      </div>
      <style jsx>{`
        .team-icon {
          width: 80%;
        }
        .linkedin-icon {
          margin-bottom: 3px;
        }
        .team-icon:hover {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      `}</style>
    </Col>
  );
};

export default CoDirectorIcon;
