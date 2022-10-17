import { createContext, useState } from "react";
import SignUpManager from "./SingUpManager";

// Creating the context
export const SignUpContext = createContext(null);

// Creating the provider which contains the values and methods
// needed for signing-up a hospital user.
export const SignUpProvider = ({ children }) => {
  
  // Instance of SignUpManager for making validation and
  // the sign-up request
  const validation = new SignUpManager();

  // User object
  const user = {
    name: "",
    password: "",
    confirmPassword: "",
    street: "",
    cep: "",
    neighborhood: "",
    city: "",
    addressNumber: "",
    state: "",
  };

  // Set methods for User's attributes
  // applying validation 
  function setName(value, setError) {
    const validationResult = validation.validateUsername(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.name = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setPassword(value, setError) {
    const validationResult = validation.validatePassword(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.password = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setConfirmPassword(value, setError) {
    const validationResult = validation.validateConfirmPassword(
      value,
      user.password
    );
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.confirmPassword = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setCep(value, setError) {
    const validationResult = validation.validateCep(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.cep = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setNeighborhood(value, setError) {
    const validationResult = validation.validateNeighborhood(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.neighborhood = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setCity(value, setError) {
    const validationResult = validation.validateCity(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.city = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }
  function setStreet(value, setError) {
    const validationResult = validation.validateStreet(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.street = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setAddressNumber(value, setError) {
    const validationResult = validation.validateAdressNumber(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.addressNumber = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  function setState(value, setError) {
    const validationResult = validation.validateState(value);
    if (validationResult.status) {
      setError({ status: false, message: "" });
      user.state = value;
      return;
    }
    setError({ status: true, message: validationResult.message });
  }

  // Provider with the user object and its 'set' methods
  return (
    <SignUpContext.Provider
      value={{user, setName, setPassword, setConfirmPassword, setCep, setStreet, setAddressNumber, setState, setNeighborhood, setCity}}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;
