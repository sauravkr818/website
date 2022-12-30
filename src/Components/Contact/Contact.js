import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container-fluid py-5 my-5">
                    <div className="card mb-3 alert-primary pe-md-2 pe-lg-5 border-0 shadow">
                        <div className="row no-gutters">
                            <div className="col-md-5 d-flex justify-content-center">
                                <img
                                    src="https://svgshare.com/i/VCU.svg"
                                    className="card-img img-fluid w-75 mx-auto"
                                    alt="forest svg"
                                />
                            </div>
                            <div className="col-md-7 my-auto mx-auto">
                                <div className="card-body">
                                    <div className="jumbotron jumbotron-fluid alert-primary">
                                        <div className="container">
                                            <h2 className="display-4 mb-2 fw-bold text-uppercase">
                                                Lets get Connected
                                            </h2>
                                            <p className="lead">
                                                It's always better to share your
                                                thoughts.
                                            </p>
                                        </div>
                                        <form
                                            action="https://formspree.io/f/myybabrr"
                                            method="POST"
                                        >
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="_replyto"
                                                    required
                                                />
                                                <label for="floatingInput">
                                                    Email address
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a comment here"
                                                    id="floatingTextarea2"
                                                    style={{
                                                        height: "100px",
                                                    }}
                                                    name="message"
                                                    required
                                                ></textarea>
                                                <label for="floatingTextarea2">
                                                    Your Message
                                                </label>
                                            </div>
                                            <div className="d-grid gap-2 col-md-6 col-2 mx-md-auto me-auto">
                                                <button
                                                    className="btn btn-lg btn-outline-primary fw-bold"
                                                    type="submit"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="themes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
