import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './website.css';




const Websites = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:3000";


  const [websites, setWebsites] = useState([]);

  const setWebsiteData = () => {
    axios.get(baseURL + "/websites").then((response) => {
      setWebsites(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setWebsiteData();
  }, []);


 

  return (
    <>
  

    <div className="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Website
        </button>
      </nav>


      <br></br>
      {/* <div className="col-md-6">
        <h4>Websites List</h4>

        <div className="tablecontainer">
        
            <div class="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>WebsiteName</th>
                    <th>URL</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    websites &&
                    websites.map((website, index) => (

                      <tr>
                        <th scope="row">{website.id}</th>
                        <td>{website.name}</td>
                        <td>{website.url}</td>


                        <td >

                          <Link to={"/edit/" + website.id}>                          </Link>
                          <button
                            className="button"
                          > Edit
                          </button>

                          <button
                            className="button"
                          > Delete
                          </button>

                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
      
       
      </div> */}

    </div>


    <table class="table table-light table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>

  {
                    websites &&
                    websites.map((website, index) => (

                      <tr>
                        <th scope="row">{website.id}</th>
                        <td>{website.name}</td>
                        <td>{website.url}</td>


                        <td >

                          <Link to={"/edit/" + website.id}>                          </Link>
                          <button
                            className="button"
                          > Edit
                          </button>

                          <button
                            className="button"
                          > Delete
                          </button>

                        </td>
                      </tr>

                    ))
                  }
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
   


<h2>Applicants Detalis</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            
        </tr>
        </thead>
        <tbody>
        {
                    websites &&
                    websites.map((website, index) => (

                      <tr>
                        <th scope="row">{website.id}</th>
                        <td>{website.name}</td>
                        <td>{website.url}</td>


                        <td >

                          <Link to={"/edit/" + website.id}>                          </Link>
                          <button
                            className="button"
                          > Edit
                          </button>

                          <button
                            className="button"
                          > Delete
                          </button>

                        </td>
                      </tr>

                    ))
                  }
        </tbody>
    </table>
</div>



  </>
  );
}
export default Websites;