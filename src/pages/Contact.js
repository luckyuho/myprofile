import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSuccess(false);

    emailjs
      .sendForm(
        "service_ie2ayhr",
        "template_be4yhmq",
        form.current,
        "LGcXk5aiidNnFQrJO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsSuccess(true);

    // btn.addEventListener("click", (e) => {
    //   alert.classList.remove("d-none");
    // });
    form.current.reset();
  };

  return (
    <section className=" contact section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 mx-auto">
            <h2 className="mb-4 text-center" data-aos="fade-up">
              Dont' be shy, write to me
            </h2>

            <form
              action="#"
              method="post"
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-lg-6 col-6" data-aos="fade-up">
                  <label htmlFor="name" className="form-label">
                    <h6>
                      Name <sup className="text-danger">*</sup>
                    </h6>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-6" data-aos="fade-up">
                  <label htmlFor="email" className="form-label">
                    <h6>
                      Email <sup className="text-danger">*</sup>
                    </h6>
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="col-12 my-4" data-aos="fade-up">
                  <label htmlFor="message" className="form-label">
                    <h6>
                      How can we help? <sup className="text-danger">*</sup>
                    </h6>
                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    id="message"
                    placeholder="Tell us secretly what's in your mind ：）"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-5 col-12 mx-auto mt-2">
                <button
                  type="submit"
                  className="form-control"
                  id="submit"
                  data-aos="fade-up"
                >
                  Send Message
                </button>
              </div>
              {isSuccess && (
                <div
                  id="errorMessage"
                  className="alert alert-success alert-dismissible mt-3 "
                  data-aos="fade-up"
                  role="alert"
                >
                  Message sent successfully!!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
