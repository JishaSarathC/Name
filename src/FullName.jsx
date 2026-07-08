import {useState } from "react";
export default function FullName(){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName]=useState("");
    const [message, setMessage]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        setMessage(`Full Name:${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
        if (!firstName || !lastName){
            alert(`Please fill out this field`);
        }
    }
    
    return(
        <div>
            <h1>
                Full Name Display
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input 
                    type="text"
                    id="firstname"
                    onChange={(event)=>setFirstName(event.target.value)}
                    value={firstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                    type="text"
                    id="lastname"
                    onChange={(event)=>setLastName(event.target.value)}
                    value={lastName} />
                </div>
                <button>Submit</button>
                <h2>{message}</h2>
            </form>
        </div>
    )
}