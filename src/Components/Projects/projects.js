import React from 'react'
import {motion} from "framer-motion";
import "../../App.css";

export default function Projects() {
    return (
        <>
            <div className="container-fluid mx-auto abc">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 m-lg-5 m-2 pb-5 mt-5" >
                        <div className="col" id="animation-card">
                            <motion.div
                            whileHover={{ y: -10 }}
                                className="card h-100 style border-0 rounded shadow"
                                id="animate-image2"
                            >
                                <img
                                    src="https://svgshare.com/i/oA4.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                    <h5 className="card-title ms-3">Resume Builder WebApp</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">Flutter App</p>
                                    <ul>
                                        <li>
                                        Build a resume builder cross platform app in which users can build their resume.
                                        </li>
                                        <li>
                                        Responsive and build for both app and web.
                                        </li>
                                        <li>
                                        Tech Stack - Flutter, Firebase, GitHub.
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://aamtspn-41828.web.app/" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col" id="animation-card">
                            <motion.div
                            whileHover={{ y: -10 }}
                                className="card h-100 style border-0 rounded shadow"
                                id="animate-image2"
                            >
                                <img
                                    src="https://svgshare.com/i/oAu.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                <h5 className="card-title ms-3">Books App</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">MERN Webapp</p>
                                    <ul>
                                        <li>A website for book lovers.</li>
                                        <li>Tech-stack - React.js, Node.js, MongoDB</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://book-store.pages.dev/" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col" id="animation-card">
                            <motion.div
                            whileHover={{ y: -10 }}
                                className="card h-100 style border-0 rounded shadow"
                                id="animate-image2"
                            >
                                <img
                                    src="https://svgshare.com/i/b5P.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                    <h5 className="card-title ms-3">Handwritten Digit Recognition</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">ML Project</p>
                                    <ul>
                                        <li>
                                        Build a handwritten Digit Recognition system and reached efficiency up to 98%.
                                        </li>
                                        <li>
                                        This project is used to identify the digits written by humans from 0-9.
                                        </li>
                                        <li>
                                        Tech-stack: ( Python, Google Colab, GitHub ).
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://github.com/sauravkr818/ML-Project" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col" id="animation-card">
                            <motion.div
                            whileHover={{ y: -10 }}
                                className="card h-100 style border-0 rounded shadow"
                                id="animate-image2"
                            >
                                <img
                                    src="https://svgshare.com/i/b5P.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                    <h5 className="card-title ms-3">Covid 19 WebApp</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">React Webapp</p>
                                    <ul>
                                        <li>Find all the necessary info about covid 19 here</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://covid-19infoapp.netlify.app/" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col">
                            <motion.div
                            whileHover={{ y: -10 }}
                             className="card h-100 style border-0 rounded shadow">
                                <img
                                    src="https://svgshare.com/i/b4t.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                    <h5 className="card-title ms-3">Weather App</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">React Webapp</p>
                                    <ul>
                                        <li>A simple weather app</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://live-world-weather.netlify.app/" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col">
                            <motion.div
                            whileHover={{ y: -10 }}
                             className="card h-100 style border-0 rounded shadow">
                                <img
                                    src="https://svgshare.com/i/VCk.svg"
                                    className="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div className="card-body text-start">
                                    <h5 className="card-title ms-3">To-do App</h5>
                                    <p className="ms-3 opacity-50 fw-lighter fst-italic">React Webapp</p>
                                    <ul>
                                        <li>Manage your work efficiently with this to-do application.</li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                <a href="https://sauravkr818-todo.netlify.app/" target="_blank" rel="noreferrer"><h5 className="btn btn-primary w-50 me-auto rounded">Visit</h5></a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
            </div>
        </>
    )
}
