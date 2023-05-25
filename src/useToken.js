import { useState } from "react"


const useToken = () => {

    const [token, setToken] = useState(getToken())
    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
       }
       
       function getToken() {
           const tokenString = sessionStorage.getItem('token')
           const userToken = JSON.parse(tokenString)
           return userToken?.token
       }

       return{
        setToken: saveToken,
        token
       }
}

export default useToken;