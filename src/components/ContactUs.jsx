"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      ...
      <div className="row justify-content-center align-items-center text-light">
        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100">
            <div className="card-body text-center">
              {/* ✅ Clickable Image */}
              <a
                href="https://wa.me/2349164675884"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/lp.jpeg" // Put your image in /public/images
                  alt="Chat on WhatsApp"
                  width={160}
                  height={100}
                  className="mb-3 rounded-circle"
                />
              </a>

              {/* mubarak adam bako */}
              <a
                href="tel:+2349164675884"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 rounded-3 bg-primary fw-bold getbtn"
              >
                call me
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100">
            <div className="card-body text-center">
              {/* ✅ Clickable Image */}
              <a
                href="https://wa.me/2349164675884"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/kkk.webp" // Put your image in /public/images
                  alt="Chat on WhatsApp"
                  width={160}
                  height={100}
                  className="mb-3 rounded-circle"
                />
              </a>

              {/* mubarak adam bako */}
              <a
                href="https://wa.me/2349164675884"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 rounded-3 bg-primary fw-bold getbtn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <div className="card bg-secondary h-100">
            <div className="card-body text-center">
              {/* ✅ Clickable Image */}
              <a
                href="https://wa.me/2349164675884"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/R.png" // Put your image in /public/images
                  alt="Chat on WhatsApp "
                  width={100}
                  height={100}
                  className="mb-3 rounded-circle"
                />
              </a>

              {/* mubarak adam bako */}
              <a
                href="mailto:mubarakadambako@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 rounded-3 bg-primary fw-bold getbtn"
              >
                message me on email
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Left: Image */}
          <div className="col-lg-6 text-center mb-4 mb-md-0">
            <img
              src="/abdull.jpg" // Ensure this path is correct
              alt="Contact illustration"
             ange to actual image height
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">

             <div className="card bg-dark  ">
            <div className="card-body rounded-8">
              <div className="col-lg-12">
                <h2 className="text-center text-primary mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-danger">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 text-danger">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 text-danger">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 text-danger">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
            </div>
          {/* Right: Form */}
         
        </div>
      </div>
    </>
  );
};
export default ContactUs;
