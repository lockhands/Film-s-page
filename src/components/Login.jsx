import { users } from "../api/users";
import { useState } from "react";

export const Login = ({esLogin})  =>{

    const [value,setValue]=useState({name:"",email:"",password:""});
    const HandleSubmit = () =>{
        
       
        const new_array = [...users,{nombre:value.name,apellido:value.email}];
        console.log(new_array);
        users.map(...user =>{
            users=[...user,new_array];
        })
    }

    return(
        <div className="w-screen h-screen rounded-lg flex justify-center items-center ">
        <div className="w-3/5 h-1/2 bg-emerald-400 rounded-lg shadow-lg shadow-blue-300 lg:w-1/5">
            <div className="flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">{(esLogin) ? "Registrar" : "Ingresar"}</h3>
            </div>
            <div className="text-white underline font-bold flex-col mt-2 ml-2 lg:ml-5 items-center justify-center space-y-2 ">
               
                    
                   
                   {(esLogin) ? 
                   <div> 
                    <p >Usuario</p>
                    <input className=" rounded-lg ml-2 text-emerald-600" onChange={(event) =>{setValue({name:event.target.value})}}></input> 
                    </div>: false }
                  
                   
                  
                    <p>Correo</p>
                    <input className="ml-2 rounded-lg ml-2 text-emerald-600" onChange={(event) =>{setValue({email:event.target.value})}} ></input>
                 
                    <p>Contraseña</p>
                    <input className=" ml-2 rounded-lg ml-2 text-emerald-600" onChange={(event) =>{setValue({password:event.target.value})}}></input>
                   
                    <div className="flex justify-center ">
                        <button className=" mt-5 w-1/2 bg-emerald-600 text-white rounded-lg" onClick={HandleSubmit}>Continuar</button>
                     </div>
                  
            </div>
           
        </div>
        </div>
    );
}