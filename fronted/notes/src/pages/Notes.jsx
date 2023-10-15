import React from 'react'
import './Notes.css'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const Notes = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navi = useNavigate();

    // for sending data
    const Data = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:3000/api/`, { title, description })
            .then((res) => {
                if (res.data.Status === "Success") {
                    // alert("created successfully");
                    navi("/");
                    // window.location.reload();
                    toast.success("Created sucessfully 😊");
                } else {
                    toast.danger("oops sorrry something went wrong 🥷");
                }
            });
    };

    return (
        <div className="container">
            <div className="login-box m-form ">
                <h2>Note <i className="ri-pencil-line"></i></h2>
                <form onSubmit={Data}>
                    <div className="user-box">
                        <input type="text" name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} required />
                        <label >Note Title</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="description" value={description}
                            onChange={(e) => setDescription(e.target.value)} required />
                        <label >Note Description</label>
                    </div>
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button>Submit</button>
                    </a>
                </form>
            </div>
        </div>
    )
}
export default Notes