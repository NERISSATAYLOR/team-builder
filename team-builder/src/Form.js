import React, { useState } from 'react';


const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>

            <input
                type="text"
                id="Date.now()"
                name="name"
                placeholder="Name"
                onChange={changeHandler}
                value={props.name} />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="Date.now()"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
                value={props.email}
            />
            <label htmlFor="role">Role</label>
            <input
                type="role"
                id="Date.now()"
                name="role"
                placeholder="Role"
                onChange={changeHandler}
                value={props.role} />
            <button type="submit">Add Member</button>


        </form>
    )
}

export default Form;

