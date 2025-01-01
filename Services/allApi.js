import commonApi from './CommonApi';
import SERVER_URL from './ServerUrl';

// API for registering a user
export const registerApi = async (reqBody) => {
  return await commonApi("POST", `${SERVER_URL}/register`, reqBody);
};

// user login
export const loginApi =async(reqBody)=>{
  return await commonApi("POST",`${SERVER_URL}/login`, reqBody)
}
