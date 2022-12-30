import React from "react";
import "./about-me.css";

export default function aboutMe() {
    return (
        <div className="container custom-margin text-start lh-lg lead p-2 d-flex flex-column h-100">
            <section id="about-me">
                <h1 className="h1 text-start">About Me</h1>
                <p className="lh-base">
                    I am 19 years old & currently pursuing BTech, from National
                    Institute of Technology, (2019-2023) batch. My passion is
                    Computer Science and New Software Technologies & I love
                    problem solving.
                </p>
                <h4 className="h3">Coding handles</h4>
                <ul>
                    <li>
                        <a
                            href="https://www.codechef.com/users/saurav818"
                            className="link-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxShadow: "0 1px" }}
                        >
                            Codechef
                        </a>
                        <span className=" ms-2 text-decoration-none">(4 star)</span>
                    </li>
                    <li>
                        <a
                            href="https://leetcode.com/user4087g/"
                            className="link-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxShadow: "0 1px" }}
                        >
                            Leetcode 
                        </a>
                        <span className=" ms-2 text-decoration-none">(450+ questions)</span>
                    </li>
                </ul>
                <h4 className="h3">Currently I'm</h4>
                <ul>
                    <li>
                        BTech Student at{" "}
                        <a
                            href="http://www.nitsikkim.ac.in"
                            className="link-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxShadow: "0 1px" }}
                        >
                            National Institute of Technology, Sikkim.
                        </a>
                    </li>
                    <li>
                        <a
                            href="http://www.nitsikkim.ac.in"
                            className="link-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxShadow: "0 1px" }}
                        >
                            Member of Web Development Club (WDC), NIT Sikkim.
                        </a>
                    </li>
                </ul>
                <h4 className="h3">Previously I have</h4>
                <ul>
                    <li>
                        worked as a software flutter developer intern in{" "}
                        <a
                            href="https://www.linkedin.com/company/aamtspn-private-limited/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-dark text-decoration-none"
                            style={{ boxShadow: "0 1px" }}
                        >
                            Aamtspn Private Limited
                        </a>
                        .
                    </li>
                    <li>
                        worked as a software developer intern in{" "}
                        <a
                            href="https://artmetrix.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-dark text-decoration-none"
                            style={{ boxShadow: "0 1px" }}
                        >
                            ArtMetrix
                        </a>
                        .
                    </li>
                    <li>
                        worked as a front-end developer intern in{" "}
                        <a
                            href="https://www.techtious.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-dark text-decoration-none"
                            style={{ boxShadow: "0 1px" }}
                        >
                            Techtious Technologies
                        </a>
                        .
                    </li>
                </ul>
            </section>
        </div>
    );
}
