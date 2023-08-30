import React from 'react';
import { Col, Card } from 'reactstrap';
import Image from 'next/image';
const MemberIcon = ({ name, title, imageurl, linkedIn }) => {
  console.log("name", name)
  console.log("title", title)
  console.log("imageurl", imageurl)
  console.log("linkedin", linkedIn)
  return (
    <Col>
      <Card className="border-0 member-icon">
        <div className="text-center">
          {/* <img src={imageurl} alt={name} className="rounded-circle img-fluid team-icon" /> */}
          <Image src={imageurl} alt={name} width="120px" height="120px" style={{ borderRadius: "50%" }} className=" team-icon" />
        </div>
      </Card>

      <div className="card-body">
        <p className="text-center">
          <b>{name}</b> <br /> {title && <> {title}</>}
        </p><p style={{ textAlign: "center" }}>
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
          border-radius: 50%;
          width: 120px;
          height: 120px;
        }
        .linkedin-icon {
          margin-bottom: 3px;
        }
        .team-icon:hover {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      `}</style>
    </Col>
  );
};

export default MemberIcon;
