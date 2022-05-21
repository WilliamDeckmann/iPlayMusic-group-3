import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TokenContext } from "../context/TokenContext"

const Callback = () => {

    const {token, setToken} = useContext(TokenContext)
    const navigate = useNavigate()
    
    let url = window.location.search
    let params = new URLSearchParams(url)
    let code = params.get('code')

    const nav = () => {
        // window.location = 'http://localhost:8888/featured'
        navigate('/walkthrough')
    }

    useEffect(function(){
        axios.post('.netlify/functions/token', JSON.stringify({code})).then(response => {
            setToken(response.data.access_token)
            // console.log(response.data.access_token);
            setTimeout(nav, 500)

        })
    }, [code, setToken, nav])

    
    return null;
}
 
export default Callback;