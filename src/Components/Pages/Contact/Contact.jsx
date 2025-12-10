import "./Contact.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/home");
  };

  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    emailAddress: "",
    city: "",
    dist: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "contactNumber" || id === "pincode") {
      const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (id === "pincode" && numericValue.length <= 6) {
        setFormData({ ...formData, [id]: numericValue });
      } else if (id === "contactNumber" && numericValue.length <= 10) {
        setFormData({ ...formData, [id]: numericValue });
      }
    } else if (id === "customerName" || id === "city" || id === "dist") {
      const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
      setFormData({ ...formData, [id]: alphabeticValue });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer name is required";
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (formData.contactNumber.length !== 10) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.dist.trim()) {
      newErrors.dist = "District is required";
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (formData.pincode.length !== 6) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.info("Sending...");
      setIsSubmitting(true);

      const formDataToSend = {
        ...formData,
        access_key: "3086c577-5b4f-41b1-a79e-0810fdc7a167",
      };

      try {
        const response = await axios.post(
          "https://website-backend-royal.onrender.com/api/contact",
          formDataToSend
        );

        console.log("Response data:", response.data);

        if (response.data.success) {
          toast.dismiss();
          setTimeout(() => {
            toast.success("Contact data saved successfully!");
            setSuccessMessage(
              `Thank you, ${formData.customerName}! Your inquiry has been submitted. Our team will connect with you.`
            );
          }, 1000);

          setFormData({
            customerName: "",
            contactNumber: "",
            emailAddress: "",
            city: "",
            dist: "",
            pincode: "",
          });
        } else {
          console.error("Error response:", response.data.message);
          toast.dismiss();
          toast.error(`Error: ${response.data.message}`);
        }
      } catch (error) {
        console.error("Error occurred during submission:", error);
        toast.dismiss();
        toast.error("This user is already registered.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <>
      <div className="text-center py-5">
        <h3 className="display-5 mt-5">Contact Us</h3>
        <p>
          If you have any queries related to our IT services, please contact us
          by filling out the form below or call us at the provided number.
        </p>
      </div>
      <div className="container contact-container">
        <div className="row contact-row">
          <div className="contact-column">
            <div className="form-main">
              <ToastContainer />
              <div className="container form-size">
                <img
                  src="https://i.postimg.cc/G25Fvy5s/icons8-back-48.png"
                  alt="Back"
                  onClick={handleBookNowClick}
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                />
                <h2 className="text-center">Quick Inquiry</h2>
                <form
                  className="p-4 shadow rounded form-container"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row mb-3">
                    <div className="col-12">
                      <label htmlFor="customerName">Enter Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.customerName ? "is-invalid" : ""
                        }`}
                        id="customerName"
                        placeholder="Enter your name"
                        value={formData.customerName}
                        onChange={handleChange}
                      />
                      {errors.customerName && (
                        <div className="invalid-feedback">
                          {errors.customerName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input
                        type="tel"
                        className={`form-control ${
                          errors.contactNumber ? "is-invalid" : ""
                        }`}
                        id="contactNumber"
                        placeholder="Enter contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        maxLength={10}
                      />
                      {errors.contactNumber && (
                        <div className="invalid-feedback">
                          {errors.contactNumber}
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="emailAddress">Email Address</label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors.emailAddress ? "is-invalid" : ""
                        }`}
                        id="emailAddress"
                        placeholder="Enter email address"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                      {errors.emailAddress && (
                        <div className="invalid-feedback">
                          {errors.emailAddress}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col-12">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.city ? "is-invalid" : ""
                        }`}
                        id="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && (
                        <div className="invalid-feedback">{errors.city}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="dist">District</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.dist ? "is-invalid" : ""
                        }`}
                        id="dist"
                        placeholder="Enter your district"
                        value={formData.dist}
                        onChange={handleChange}
                      />
                      {errors.dist && (
                        <div className="invalid-feedback">{errors.dist}</div>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.pincode ? "is-invalid" : ""
                        }`}
                        id="pincode"
                        placeholder="Enter your pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        maxLength={6}
                      />
                      {errors.pincode && (
                        <div className="invalid-feedback">{errors.pincode}</div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  {successMessage && (
                    <div className="alert alert-success mt-3">
                      {successMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/address.png"
                    alt="Address Icon"
                  />
                </div>
                <div className="details">
                  <strong>ADDRESS</strong>
                  A/p-: Kakdi, tal: Kopergon, dist: Ahamdnager, Near Shirdi
                  International Airport
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/email.png"
                    alt="Email Icon"
                  />
                </div>
                <div className="details">
                  <strong>EMAIL ADDRESS</strong>
                  royalshetkariitcompany@example.com
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/phone.png"
                    alt="Phone Icon"
                  />
                </div>
                <div className="details">
                  <strong>PHONE NO</strong>
                  +91 1234567890
                  <br />
                  +91 9876543210
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
