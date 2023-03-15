import "./confirming.css";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useEffect} from 'react'

function Confirming(){
    let { Id } = useParams();
    let formField = new FormData()
    formField.append('token',Id)
    useEffect(()=>{
      axios({
        method: 'post',
        url:'http://127.0.0.1:8000/account-verified',
        data: formField
      }).then(response =>{  
         
          console.log(response.status);
        })


})
    return(
        <div className="hhhh">
      <h3>account has been verified</h3>
    </div>
    )
}
export default Confirming