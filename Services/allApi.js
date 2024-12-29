import commonApi from './CommonApi'
import ServerUrl from './ServerUrl'

// api for register user
export const registerApi = async(reqBody)=>{
   await commonApi("POST",`${ServerUrl}/register`,reqBody)
}