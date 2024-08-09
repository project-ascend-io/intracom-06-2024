import { LoginFormType } from "../types/login";
import { ResponseObject } from "../types/auth";

//TODO: update base url with backend route
const BASE_URL = "http://localhost:8080";

//TODO: update returns type with response object typescript schema
/**
 * Login user
 * @param {object} loginInfo - An object containing the user email and password
 * @returns {ResponseObject} The response from the server
 */
export const loginUser = async (loginInfo: LoginFormType): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
      credentials: "include",
    });

    if (!response.ok) {
      //convert string to object
      const errorBody = JSON.parse(await response.text());

      console.error(`Failed to login user ${response.status}:`, errorBody);
      return errorBody;
    } else {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("session", JSON.stringify(data.cookie));
      localStorage.setItem("user", JSON.stringify(data.responseObject));
      return data;
    }
  } catch (error) {
    console.error("loginUser error:", error);

    throw error;
  }
};

/**
 * Check user session
 * @returns {ResponseObject} Response from the server containing user object
 */
export const checkUser = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      const errorBody = JSON.parse(await response.text());

      console.error(`Failed to get user ${response.status}:`, errorBody);
      return errorBody;
    } else {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("session", JSON.stringify(data.cookie));
      localStorage.setItem("user", JSON.stringify(data.responseObject));
      return data;
    }
  } catch (error) {
    console.error("checkUser error:", error);

    throw error;
  }
};

/**
 * Logout user
 * @returns {ResponseObject} The response from the server
 */
export const logoutUser = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      const errorBody = JSON.parse(await response.text());

      console.error(`Failed to logout user ${response.status}:`, errorBody);
      return errorBody;
    } else {
      const data = await response.json();
      localStorage.removeItem("session");
      localStorage.removeItem("user");
      return data;
    }
  } catch (error) {
    console.error("logoutUser error:", error);

    throw error;
  }
};
