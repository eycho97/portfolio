import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_RXtQk9xbkcuxeI8Wr9FD4";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.sendForm(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contact" className="contact">
      <div className="container">
        <h1>Contact Me</h1>
        

        <div className="row">
          <div className="col-md-6 col-xs-12">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="text-center">
              <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              {...register('name', {
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters"
                }
                })
              }
              />
            </div>
            <span className="error-message">
              {errors?.name && errors?.name?.message}
            </span>
            {/* Phone Input */}
            <input
            id="phone"
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            {...register('phone', {
                required: "Please add your phone number.",
              })
            }
            />
            <span className="error-message">
              {errors?.phone && errors?.phone?.message}
            </span>
            {/* Email Input */}
            <input
            id="email"
            ype="email"
            className="form-control"
            placeholder="Email"
            name="email"
            {...register('email', {
              required: "Please provide you email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid Email"
              }
              })
            }
            />
            <span className="error-message">
              {errors?.email && errors?.email?.message}
            </span>
            {/* Subject Input */}
            <input
            id="subject"
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
            {...register('subject', {
                required: "Please add the subject.",
              })
            }
            />
            <span className="error-message">
              {errors?.subject && errors?.subject?.message}
            </span>
            {/* Description */}
            <textarea
            id="message"
            type="text"
            className="form-control"
            placeholder="Message"
            name="message"
            {...register('message', {
              required: "Please add the message.",
            })
          }
            ></textarea>
            <span className="error-message">
              {errors?.message && errors?.message?.message}
            </span>
            <button form="contact-form" className="button btn-main-offer contact-btn" type="submit">Contact Me</button>
            </form>
          </div>
          <div className="col-md-6 col-xs-12 contact-prompt">
            <div className="prompt-message">
              <p>Feel free to reach out to me <br></br>if you would like to work together!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
