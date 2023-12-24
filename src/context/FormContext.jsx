import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = { 0: "Billing Info", 1: "Shipping Info", 2: "Opt-In" };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    billFirstName: "",
    billLastName: "",
    billAddress1: "",
    billAddress2: "",
    billCity: "",
    billState: "",
    billZipCode: "",
    sameAsBilling: false,
    shipFirstName: "",
    shipLastName: "",
    shipAddress1: "",
    shipAddress2: "",
    shipCity: "",
    shipState: "",
    shipZipCode: "",
    optInNews: false,
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // eslint-disable-next-line no-unused-vars
  const { billAddress2, ...otherProps } = data;

  const canSave = [...Object.values(otherProps)].every(Boolean);
  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
