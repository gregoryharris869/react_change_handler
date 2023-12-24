import Billing from "./Billing";
import { useState } from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <h2>Billing Info</h2>

      <Billing data={data} handleChange={handleChange} />

      <button className="button" disabled={!canSave}>
        Submit
      </button>
    </form>
  );

  return content;
};
export default Form;
