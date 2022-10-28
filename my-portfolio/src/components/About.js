
import React from "react";
// importing react

function About() {
    return (
        <div>
            <p className="content is-large">Bootcamp Student and Regional Transportation Coordinator</p>
            <hr />
            {/* my title  */}

            <p className="content is-italic mt-5">
                Hello! My name is Mitch Marena. I am currently a Transportation Analyst at Amazon, as well as a student
                at the University of Texas Coding Bootcamp.

                {/* a little about my current work  */}
            </p>
            <p className="content">
                Born and raised in Wethersfield, Connecticut, I attended
                Bowling Green State University (BGSU) in Ohio for my bachelors degree in Managment Information Systems
                (MIS). Outside of work I enjoy watching old movies, playing ultimate frisbee, playing Xbox, watching
                College Football, and hanging out with my foster dogs. I have not missed a BGSU football game since I
                enrolled and it is truly one of my biggest passions!
            </p>
            {/* info about me! */}
        </div>
    );
}

export default About;
// exporting our About info