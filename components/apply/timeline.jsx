import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Icon({ src, alt }) {
    return (
        <>
            <img src={src} alt={alt} />
            <style jsx>{`
        img {
          width: 60%;
          height: 60%;
          margin: 20%;
        }
      `}</style>
        </>
    );
}

function Timeline({ steps }) {
    return (
        <VerticalTimeline>
            {steps &&
                steps.map(({ title, subtitle, description, imageurl }) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        iconStyle={{ background: "var(--accent-orange)", color: "#fff" }}
                        icon={<Icon src={imageurl} alt={"logo"} />}
                        key={title}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <p style={{ fontWeight: 600, fontSize: 18 }}>{subtitle}</p>
                        <div><p>{description}</p></div>
                    </VerticalTimelineElement>
                ))}
        </VerticalTimeline>
    );
}

export default Timeline;
