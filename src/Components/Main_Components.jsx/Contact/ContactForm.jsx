import { useForm } from "react-hook-form";
// import "./f.css";

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const sub = (d) => {
    console.log(d);
  };

  return (
    <div className="container my-5">
      <div className="row g-0 b-wrap p-4">
        {/* COLUMN 1 — FORM */}
        <div className="col-lg-6 pe-lg-4">
          <h4 className="mb-4 t-gold">The Inquiry Form</h4>

          <form onSubmit={handleSubmit(sub)}>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label>Full Name*</label>
                <input
                  className="form-control f-i"
                  {...register("name", { required: true })}
                />
                {errors.name && <small className="err">Required</small>}
              </div>

              <div className="mb-3 col-lg-6">
                <label>Email Address*</label>
                <input
                  className="form-control f-i"
                  {...register("email", { required: true })}
                />
                {errors.email && <small className="err">Required</small>}
              </div>

              <div className="mb-3 col-lg-6">
                <label>Phone Number*</label>
                <input
                  className="form-control f-i"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <small className="err">Required</small>}
              </div>

              <div className="mb-3 col-lg-6">
                <label>Project Location*</label>
                <input
                  className="form-control f-i"
                  {...register("location", { required: true })}
                />
                {errors.location && <small className="err">Required</small>}
              </div>

              <div className="mb-3 col-lg-12">
                <label>Project Type*</label>
                <select
                  className="form-control f-i"
                  {...register("type", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Hospitality</option>
                  <option>Other</option>
                </select>
                {errors.type && <small className="err">Required</small>}
              </div>

              {/* <div className="mb-3 col-lg-12">
                <label>Tell Us About Your Vision*</label>
                <textarea
                  rows="3"
                  className="form-control f-i"
                  {...register("vision", { required: true })}
                />
                {errors.vision && <small className="err">Required</small>}
              </div> */}
            </div>

            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <small className="text-muted">
                Note: We respect your privacy. All submissions are confidential.
              </small>

              <button className="btn btn-outline-warning mt-2">
                Submit Inquiry
              </button>
            </div>
          </form>

        </div>

        {/* COLUMN 2 — CONTACT */}
        <div className="col-lg-6 ps-lg-4 mt-4 mt-lg-0 b-left">
          <h4 className="mb-4 t-gold">Atelier Coordinates</h4>

          <p className="mb-1">Our Atelier</p>
          <p>
            [Your Address, Line 1]
            <br />
            [Your Address, Line 2]
            <br />
            Mumbai, Maharashtra
          </p>

          <p>Viewing by Appointment Only</p>

          <p>
            Email{" "}:
            <a href="mailto:inquire@interiordesignermumbai.in" className="link-gold">
              inquire@interiordesignermumbai.in
            </a>
          </p>

          <p>
            Phone{" "}
            <a href="tel:+918108850109" className="link-gold">
              +91 8108850109
            </a>
          </p>

          <p>
            Hours
            <br />
            Monday - Friday: 10:00 AM - 6:00 PM
            <br />
            Saturday: By Appointment
          </p>
        </div>
      </div>
    </div>
  );
}
