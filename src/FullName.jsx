import {useState} from "react";
import {useSnackbar} from "notistack";
export default function FullName(){
    
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[message, setMessage]=useState("");
    const {enqueueSnackbar}=useSnackbar();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!firstName || !lastName){
            enqueueSnackbar('Please fill out this field');
        }else {
        setMessage(`FullName:${firstName} ${lastName}`);
        }
    }
    return(
        <div>
            <h1>Full Name Display</h1>
        <form>
            <div>
        <label>First Name:</label>
        <input
         type="text"  id="name"
  name="first name"
  value={firstName}
  onChange={(e) => {
    const value = e.target.value;

    if (/^[A-Za-z]*$/.test(value)) {
      setFirstName(value);
      setMessage("");
    }
  }}
   />
        </div>
        <div>
        <label>Last Name:</label>
        <input
        type="text" id="name" name="last name" value={lastName}
        onChange={(e) => {
    const value = e.target.value;

    if (/^[A-Za-z]*$/.test(value)) {
      setLastName(value);
      setMessage("");
    }
  }}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
       
       </form>
       <h3>{message}</h3>
       </div>
    
    )
}