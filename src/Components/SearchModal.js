import React from "react";

export default function SearchModal() {
  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="was-validated">
              <div className="mb-3">
                <div className="text-center mb-3">
                  <label htmlFor="search-article" className="col-form-label">
                    Search For An Article
                  </label>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control custom-form"
                    placeholder="Search Article"
                    id="search-article"
                    required
                  />
                  <div className="valid-feedback mt-2">Valid.</div>
                  <div className="invalid-feedback mt-2">
                    Please fill out this field.
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="w-100 btn custom-button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
