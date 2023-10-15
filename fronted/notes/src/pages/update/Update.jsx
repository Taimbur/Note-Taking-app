import React from 'react'
import { useState, useEffect } from "react";
import '../Notes.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const Update = () => {

    const [title, setTitle] = useState("");
    const [data, setData] = useState("");
    const [description, setDescription] = useState("");
    const navi = useNavigate();
    const id = useParams();

    // for updating data

    const Data = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:3000/api/update/${id.id}`, { title, description })
            .then((res) => {
                if (res) {
                    // alert("updated successfully");
                    navi("/");
                    // window.location.reload();
                    toast.success("updated sucessfully");
                } else {
                    alert("sorrry something went wrong 🥷");
                }
            });
    };





    //   for getting one

    const getOne = async () => {
        axios.get(`http://localhost:3000/api/getOne/${id.id}`).then((res) => {
            if (res.data) {
                setData(res.data);
                setTitle(res.data.title)
                setDescription(res.data.description)
            } else {
                alert("not fetch data");
            }
        });
    }

    useEffect(() => {
        getOne();
    }, [])



    return (
        <div className="container">
            <div className="login-box m-form ">
                <h2 className='bg-danger'>Update Note <i className="ri-pencil-line"></i></h2>
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

export default Update