import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import { motion } from "framer-motion";
import Animation from "../Animation/Anime";

export default function Index() {
    const staggerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1.5,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const rowVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.5,
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const yoyoVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                yoyo: Infinity,
            },
        },
    };

    return (
        <React.Fragment>
            <>
                <div className="container-fluid">
                    <div class="d-flex justify-content-end mb-5 pb-4">
                        <div class="box1"></div>
                    </div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div
                        class="d-flex justify-content-end bottom-0 end-0 position-fixed pe-4 pb-4"
                        style={{ zIndex: "100" }}
                    >
                        <a
                            class="btn alert-primary rounded-circle glass-morphism shadow-lg border"
                            href="#top"
                        >
                            <i
                                class="fa fa-chevron-up fa-lg"
                                style={{ color: "#845ef7" }}
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                    <div class="py-5"></div>
                    <div class="py-md-4"></div>
                    <motion.div
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        class="row"
                        id="home"
                    >
                        <motion.div
                            variants={imageVariants}
                            class="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-4 mb-2 mb-md-0"
                        >
                            <img
                                src="https://i.ibb.co/bz0s6vP/my-img.jpg"
                                alt="my-img"
                                class="img-fluid w-50"
                                style={{ borderRadius: "100%", height: "100%" }}
                            ></img>
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            class="col-md-6 me-auto my-auto"
                        >
                            <div class="">
                                <p class="text-dark text-md-start text-center">
                                    Hello World, I'm
                                </p>
                                <h4 class="display-5 text-md-start text-center d-flex justify-content-center justify-content-md-start">
                                    <div class="alert-primary p-2 rounded fw-bold w-78">
                                        SAURAV&nbsp;KUMAR
                                    </div>
                                </h4>
                                <h6
                                    class="text-md-start text-center"
                                    style={{
                                        fontSize: "1.06rem",
                                        lineHeight: "150%",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    FULL STACK WEB DEVELOPER
                                </h6>
                                <motion.div
                                    variants={staggerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    class="d-flex justify-content-center justify-content-md-start"
                                >
                                    <motion.a
                                        variants={childVariants}
                                        href="https://github.com/sauravkr818"
                                        className="me-4"
                                        alt="github"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-github fa-2x"
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a
                                        variants={childVariants}
                                        href="https://www.instagram.com/s_au.ra_v/"
                                        className="me-4"
                                        alt="insta"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-instagram fa-2x"
                                                style={{ color: "#f06595" }}
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a
                                        variants={childVariants}
                                        href="./"
                                        className="me-4"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-facebook fa-2x"
                                                style={{ color: "#4267B2" }}
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a
                                        variants={childVariants}
                                        href="./"
                                        className="me-4"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-linkedin fa-2x"
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div class="my-4"></div>
                        <div class="col-12 d-flex justify-content-center mt-5">
                            <div class="card p-2 border-0 rounded mt-4 mt-lg-0">
                                <div class="card-header bg-white border">
                                    Terminal
                                </div>
                                <div
                                    class="card-body text-primary text-start"
                                    style={{ backgroundColor: "#3e3b48" }}
                                >
                                    <p class="rounded text-white">
                                        1. The most important part of life is{" "}
                                        <b>Failures</b>
                                    </p>
                                    <p class="text-white rounded">
                                        2. And ofcourse your <b>Family </b>
                                        <motion.b
                                            variants={yoyoVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            |
                                        </motion.b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <h3
                        class="text-center tr"
                        id="aboutme"
                        style={{ marginTop: "80px" }}
                    >
                        My Skills
                    </h3>
                    <div class="line"></div>
                    <div
                        class="row row-cols-2 row-cols-sm-4 row-cols-md-4 g-5 mb-5 mx-auto"
                        style={{ marginTop: "0px" }}
                        id="2"
                    >
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-html5 fa-5x"
                                style={{ color: "rgb(240, 101, 41)" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                html
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-css3-alt fa-5x"
                                style={{ color: "rgb(38, 77, 228)" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                CSS
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-js fa-5x"
                                style={{ color: "rgb(250, 224, 53)" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                javascript
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-react fa-5x"
                                style={{ color: "rgb(99, 148, 238)" }}
                            ></motion.i>
                            <br />
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                React
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-python fa-5x"
                                style={{ color: "rgb(99, 148, 238)" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                Python
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-cuttlefish fa-5x"
                                style={{ color: "#845ef7" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                C
                            </p>
                        </div>
                        <div class="col">
                            <motion.i
                                whileHover={{ y: -10 }}
                                class="fab fa-php fa-5x"
                                style={{ color: "#845ef7" }}
                            ></motion.i>
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                php
                            </p>
                        </div>
                        <div class="col">
                            <motion.svg
                                whileHover={{ y: -10 }}
                                fill="#4c6ef5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="80px"
                                height="80px"
                                //style={{ backgroundColor: "rgb(250, 224, 53)"}}
                            >
                                <path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 24 L 42 24 L 42 22 L 40 22 L 40 24 L 38 24 L 38 26 L 40 26 L 40 28 L 42 28 L 42 26 L 44 26 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 33 22 L 33 24 L 31 24 L 31 26 L 33 26 L 33 28 L 35 28 L 35 26 L 37 26 L 37 24 L 35 24 L 35 22 Z" />
                            </motion.svg>
                            {/* <br /> */}
                            <p class="p-2 alert-primary w-50 mx-auto bg-white fw-bold">
                                C++
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-5" id="contact"></div>
                <Animation />
                <div class="py-5"></div>
            </>
        </React.Fragment>
    );
}
