import React, { useState } from "react";


function MyForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState();

    const updateName = e => {
        console.log(e);
        setName(e.target.value);
    }
    const updateAge = e => {
        console.log(e);
        setAge(e.target.value);
    }
    // const handleSubmit = (event) => {
    //    // event.preventDefault();
    //     alert(`The name you entered was : ${name}`)
    // }
    return (

        <form>
            <input type="text" placeholder="your name" value={name} onChange={updateName} />
            <input type="text" placeholder="your age" value={age} onChange={updateAge} />

            {/* <button onClick={submit}> Submit</button> */}

        </form>

    )

}

export default MyForm