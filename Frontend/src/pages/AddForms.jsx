import React from "react";
import CreateForm from "../components/CreateForm";
import { useNavigate, useParams } from "react-router-dom";

function AddForms() {
  const params = useParams();

  return (
    <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
        {params.action === "New" ? "Create Form" : "Edit Form"}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
        <CreateForm />
      </div>
    </div>
  );
}

export default AddForms;
