import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../mutation/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const disabled = !name || !email || !phone;
  const [addClients] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClients } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClients] },
      });
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addClients(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add new client <FaUser />
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New client
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="name"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    disabled={disabled}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
