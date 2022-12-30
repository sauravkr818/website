import React from "react";
import {
    motion,
    useViewportScroll,
    useTransform,
    useMotionValue,
} from "framer-motion";
//import Animation from "../Animation/Anime";
import Contact from "../Contact/Contact";
import "../../App.css";
import image from "../../assets/my-img.jpg";

export default function Home() {
    const x = useMotionValue(0);
    const { scrollY, scrollYProgress } = useViewportScroll();

    // opacity on progress of y

    const xRange = [0, 100, 400, 600, 800, 1000];
    const opacityRange = [0, 0.8, 1, 1, 0.8, 0.4];
    const opacity = useTransform(scrollY, xRange, opacityRange);

    const opacityRange1 = [0, 0.5, 1, 1, 1, 1];
    const opacity1 = useTransform(scrollY, xRange, opacityRange1);

    const xInput = [0, 100, 400, 600, 800, 1000];
    //const opacityOutput = [0, 1, 0];
    const colorOutput = [
        "rgb(18, 33, 58,0)",
        "rgb(18, 33, 58,0.4)",
        "rgb(18, 33, 58,0.8)",
        "rgb(18, 33, 58,1)",
        "rgb(18, 33, 58,1)",
        "rgb(18, 33, 58,1)",
    ];

    const color = useTransform(scrollY, xInput, colorOutput);

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
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-end mb-5 pb-4">
                    <div className="box1"></div>
                </div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="py-5"></div>
                <div className="py-md-4"></div>
                <motion.div
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    className="row mb-0 pb-0"
                    id="home"
                >
                    <motion.div
                        variants={imageVariants}
                        className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-4 mb-2 mb-md-0"
                    >
                        <motion.img
                            src={image}
                            alt="my-img"
                            className="img-fluid w-50 shadow-lg"
                            style={{ borderRadius: "100%", height: "100%" }}
                        ></motion.img>
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        className="col-md-6 me-auto my-auto"
                    >
                        <div className="">
                            <p className="text-dark text-md-start text-center">
                                Hello World, I'm
                            </p>
                            <h4 className="display-5 text-md-start text-center d-flex justify-content-center justify-content-md-start">
                                <div className="alert-primary p-2 rounded fw-bold w-78">
                                    SAURAV&nbsp;KUMAR
                                </div>
                            </h4>
                            <h6
                                className="text-md-start text-center"
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
                                className="d-flex justify-content-center justify-content-md-start"
                            >
                                <motion.a
                                    variants={childVariants}
                                    href="https://github.com/sauravkr818"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="me-4"
                                    alt="github"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <i
                                            transition={"ease"}
                                            className="fab fa-github fa-2x"
                                            style={{ color: "#333333" }}
                                        ></i>
                                    </motion.div>
                                </motion.a>
                                <motion.a
                                    variants={childVariants}
                                    href="https://www.instagram.com/s_au.ra_v/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="me-4"
                                    alt="insta"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <i
                                            transition={"ease"}
                                            className="fab fa-instagram fa-2x"
                                            style={{ color: "#f06595" }}
                                        ></i>
                                    </motion.div>
                                </motion.a>
                                <motion.a
                                    variants={childVariants}
                                    href="https://www.facebook.com/profile.php?id=100011501836103"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="me-4"
                                    alt="fb"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <i
                                            transition={"ease"}
                                            className="fab fa-facebook fa-2x"
                                            style={{ color: "#4267B2" }}
                                        ></i>
                                    </motion.div>
                                </motion.a>
                                <motion.a
                                    variants={childVariants}
                                    href="https://www.linkedin.com/in/saurav-kumar-7619441b9/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="me-4"
                                    alt="linkedin"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <i
                                            transition={"ease"}
                                            className="fab fa-linkedin fa-2x"
                                        ></i>
                                    </motion.div>
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="mt-5"
                        style={{
                            backgroundColor: color,
                            opacity1,
                            x,
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            // borderBottomLeftRadius: "150px",
                            // borderBottomRightRadius: "150px",
                        }}
                    >
                        <div className="my-md-4"></div>

                        <motion.div className="col-12 d-flex justify-content-center mt-5">
                            <motion.div
                                className="card p-2 border-0 rounded mt-4 mt-lg-0"
                                //     variants={hiiVariants}
                                // initial="hidden"
                                // animate="visible"
                                style={{ opacity, x, color }}
                            >
                                <motion.div
                                    className="card-header bg-white border"
                                    style={{ opacity, x }}
                                >
                                    Terminal
                                </motion.div>
                                <motion.div
                                    className="card-body text-primary text-start"
                                    style={{
                                        backgroundColor: "#3e3b48",
                                        opacity,
                                        x,
                                    }}
                                >
                                    <p className="rounded text-white">
                                        1. The most important part of life is{" "}
                                        <b>Failures</b>
                                    </p>
                                    <p className="text-white rounded">
                                        2. And ofcourse your <b>Family </b>
                                        <motion.b
                                            variants={yoyoVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            |
                                        </motion.b>
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <div id="aboutme"></div>
                        <h3
                            className="text-center tr text-white"
                            style={{ marginTop: "80px" }}
                        >
                            My Skills
                        </h3>
                        <div className="line"></div>
                        <>
                            <div
                                //style={{backgroundColor:color, opacity,x, marginTop: "0px" }}
                                className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mb-5 mx-auto p-lg-5"
                                id="2"
                            >
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-html5 fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    html
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-css3-alt fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    CSS
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-js fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    .js
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-react fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    React
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-python fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    Python
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-cuttlefish fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">c</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.i
                                                    className="fab fa-php fa-5x"
                                                    style={{ color: "#fff" }}
                                                ></motion.i>
                                                <p className="custom-text">
                                                    php
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col">
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="card m-xl-4 custom-background"
                                        style={{
                                            minHeight: "300px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div>
                                                <motion.svg
                                                    fill="#fff"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 50 50"
                                                    width="80px"
                                                    height="80px"
                                                    //style={{ backgroundColor: "rgb(250, 224, 53)"}}
                                                >
                                                    <path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 24 L 42 24 L 42 22 L 40 22 L 40 24 L 38 24 L 38 26 L 40 26 L 40 28 L 42 28 L 42 26 L 44 26 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 33 22 L 33 24 L 31 24 L 31 26 L 33 26 L 33 28 L 35 28 L 35 26 L 37 26 L 37 24 L 35 24 L 35 22 Z" />
                                                </motion.svg>
                                                {/* <br /> */}
                                                <p className="custom-text">
                                                    c++
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </>
                        <div className="py-1" id="contact"></div>
                        <Contact />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
