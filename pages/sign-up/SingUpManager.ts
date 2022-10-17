import validator from "validator";
import axios from "axios";

// Interface for validation return
interface validationReturnInterface {
  status: boolean;
  message?: string;
}

export default class SignUpManager {

  // Method which validates the username
  public validateUsername(username: string): validationReturnInterface {
    if (!validator.isAlpha(username))
      return {
        status: false,
        message: "Nome de usuário deve conter apenas letras.",
      };
    if (validator.isEmail(username))
      return {
        status: false,
        message: "Nome de usuário não pode ser um e-mail.",
      };
    if (validator.isEmpty(username)) return { status: false };
    if (!validator.isLength(username, { max: 30, min: 10 }))
      return {
        status: false,
        message: "Nome de usuário deve conter entre 10 e 30 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the password
  public validatePassword(password: string): validationReturnInterface {
    if (!validator.isAlphanumeric(password))
      return { status: false, message: "Senha deve conter letras e números" };
    if (!validator.isLength(password, { max: 24, min: 8 }))
      return {
        status: false,
        message: "Senha deve conter entre 8 e 24 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the confirm password
  public validateConfirmPassword(confirmPassword: string, password: string) {
    if (!validator.equals(confirmPassword, password))
      return { status: false, message: "As senhas devem ser iguais" };
    return { status: true, message: "" };
  }

  // Method which validates the cep
  public validateCep(cep: string) {
    if (!validator.isNumeric(cep))
      return { status: false, message: "CEP deve conter apenas números" };
    if (!validator.isLength(cep, { max: 10, min: 8 }))
      return {
        status: false,
        message: "CEP deve conter entre 8 e 10 caractéres",
      };
    if (validator.isEmpty(cep))
      return {
        status: false,
        message: "CEP deve conter no mínimo 8 algarismos",
      };
    return { status: true, message: "" };
  }

  // Method which validates the street
  public validateStreet(street: string) {
    if (!validator.isLength(street, { max: 30, min: 1 }))
      return {
        status: false,
        message: "Rua deve conter entre 1 e 30 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the address number
  public validateAdressNumber(number: string) {
    if (!validator.isNumeric(number))
      return { status: false, message: "Número deve conter apenas algarismos" };
    if (!validator.isLength(number, { max: 8, min: 1 }))
      return {
        status: false,
        message: "Número deve conter entre 1 e 8 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the neighborhood
  public validateNeighborhood(neighborhood: string) {
    if (!validator.isAlpha(neighborhood))
      return { status: false, message: "Bairro deve conter apenas letras" };
    if (!validator.isLength(neighborhood, { max: 40, min: 2 }))
      return {
        status: false,
        message: "Bairro deve conter entre 2 e 40 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the city
  public validateCity(city: string) {
    if (!validator.isAlpha(city))
      return { status: false, message: "Cidade deve conter apenas letras" };
    if (!validator.isLength(city, { max: 40, min: 2 }))
      return {
        status: false,
        message: "Cidade deve conter entre 2 e 40 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which validates the state
  public validateState(state: string) {
    if (!validator.isAlpha(state))
      return { status: false, message: "Estado deve conter apenas letras" };
    if (!validator.isLength(state, { max: 2, min: 2 }))
      return {
        status: false,
        message: "Estado deve conter entre 2 e 40 caractéres",
      };
    return { status: true, message: "" };
  }

  // Method which handles the api sign-up request
  public handleSignUp(user: any, profilePic: string):boolean {
    let result = null;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/create-hospital`, {
        hosp_name: user.name,
        hosp_username: user.name,
        hosp_password: user.password,
        hosp_rua: user.street,
        hosp_cep: parseInt(user.cep),
        hosp_cidade: user.city,
        hosp_num_predial: parseInt(user.addressNumber),
        hosp_unidade_federal: user.state,
        hosp_pic: profilePic,
      })
      .then((res) => {
        if (res.status == 200) {
          result = res;
        }
      })

      if (result != null) {
        return true;
      }
      return false;
  }
}
