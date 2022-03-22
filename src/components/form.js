import React, { useState } from "react";


function MyForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState();
    const [users, setUsers] = useState([]);

    const updateName = e => {
        // console.log(e);
        setName(e.target.value);
    }
    const updateAge = e => {
        // console.log(e);
        setAge(e.target.value);
    }
    // const handleSubmit = (event) => {
    //    // event.preventDefault();
    //     alert(`The name you entered was : ${name}`)
    // }
    return (

        <div>
            <input type="text" placeholder="your name" value={name} onChange={updateName} />
            <input type="text" placeholder="your age" value={age} onChange={updateAge} />

            <button  type="button" onClick={submit}> Submit</button>

            </div>

    )

    function submit() {
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                age: age
            })
        }
        const promise = fetch(" http://localhost:8000/users", config);
        const promise1 = promise.then((response) => {
            console.log(response);
            return response.json(); //this will convert the response into json object
        });
        promise1.then(user => {
            console.log(user);
            setUsers([...users, user])
        });
        console.log("button works");
    }

}

export default MyForm