import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const list = () => {
  const [data, setData] = useState([]);


  // for getting data

  useEffect(() => {
    axios.get(`http://localhost:3000/api/getAll`).then((res) => {
      if (res.data) {
        setData(res.data);
      } else {
        alert("not fetch");
      }
    });
  });

  // for delete

  const DeleteButton = (id) => {
    axios.delete(`http://localhost:3000/api/delete/${id}`).then((res) => {
      if (res) {
        toast.warning("Deleted sucessfully 😊");

      } else {
        alert("not deleted");
      }
    });
  }


  return (
    <div className="container">
      <div className="ag-format-container">
        <div className="ag-courses_box">

          {
            data ? (
              data.map((items, index) => (
                <>
                  <div className="ag-courses_item" key={index}>
                    <a href="#" className="ag-courses-item_link">
                      <div className="ag-courses-item_bg">
                      </div>
                      <div className="ag-courses-item_title">
                        {items.title}
                      </div>
                      <div className="ag-courses-item_date-box">
                        <p>{items.description}</p>
                      </div>
                      <div className="ag-courses-item_date-box d-flex justify-content-around">
                        <div>
                          <i className="ri-delete-bin-line fs-4" onClick={() => DeleteButton(items._id)}></i>
                        </div>
                        <div>
                          <Link to={"/update/" + items._id}>
                            <i className="ri-file-edit-line fs-4"></i>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              ))
            ) : (
              <h1 className="text-uppercase">database under construcion😒 </h1>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default list