import React,{useState}  from "react";

   
function MyForm() {
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
       // event.preventDefault();
        alert(`The name you entered was : ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <lable>Enter your first name:</lable>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <lable>Enter your lastname</lable>
            <input type="text" />
            <button type="submit"> Submit</button>

            
        </form>
    )
}

export default MyForm