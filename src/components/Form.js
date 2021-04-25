import React from "react";
import { useState } from 'react'
import { useForm } from "react-hook-form";
import "./Form.css"
import Done from "./Done/Done"



export default function Form() {
    const [done, setDone] = useState(false)
    const { register, handleSubmit, formState: { errors }, watch, reset} = useForm();
    const onSubmit = () => {reset(); setDone(true)};

    const errorMessage = error => {
        return <div className="invalid-feedback">{error}</div>;
    };

    if (done) return <Done setDone = {setDone} />

    return (
        <div className="main-form-wrapper">
            <h2 className = "main-form-header">Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className = "main-form">
                <label className = "input-label" for="email">Email</label>
                <input
                    id = "email"
                    className="form-input"
                    type="text"
                    placeholder="Email"
                    name="Email"
                    {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                />
                {errors.Email && errors.Email.type === "required" && errorMessage("The mail should contain")}
                {errors.Email && errors.Email.type === "pattern" && errorMessage("Wrong format")}

                <label className = "input-label" for="password">Password</label>
                <input
                    className="form-input"
                    type="password"
                    placeholder="password"
                    name="password"
                    id = "password"
                    {...register('password', {required: true, minLength: 6, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm})}
                />
                    {errors.password && errors.password.type === "required" && errorMessage("You must specify a password")}
                    {errors.password && errors.password.type === "minLength" && errorMessage("Password must have at least 8 characters")}
                    {errors.password && errors.password.type === "pattern" && errorMessage("Password must have at least 1 uppercase, 1 lowercase and 1 number")}

            
                <label className = "input-label" for="password_repeat">Repeat password</label>
                <input
                    className="form-input"
                    type="password"
                    placeholder="Repeat password"
                    name="password_repeat"
                    id = "password_repeat"
                    {...register('password_repeat', {validate: value => value === watch('password')})}
                />
                    {errors.password_repeat && errorMessage("The passwords do not match")}
            
                <button type="submit" className = "form-submit-btn">Register</button>

            </form>
        </div>
    );
}