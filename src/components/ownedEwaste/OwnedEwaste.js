import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const OwnedEwaste = () => {
  const [requests, setRequests] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const handleGetOwnedRequest = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
        console.log('User Id = ' + decodedToken.id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    handleGetOwnedRequest();
  }, []);
  
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const result = await axios.get(`http://localhost:5000/request/getOwnedRequests/${userId}`);
          setRequests(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }
  }, [userId]);
  

  return (
    <div className='container'>
      <div className='text-center my-3'>
        <h1>Owned E-waste</h1>
      </div>
      {requests ? requests.map((object, index) => (
                <div class="card card-horizontal my-3" key={index}>
                    <div id='image'>
                        <img src={`http://localhost:5000/${object.imageUrl}`} alt="Image" className="card-img-top" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{object.name}</h5>
                        <p class="card-text">Type of Waste: {object.typeOfEwaste}</p>
                        <p class="card-text">Quantity: {object.quantity} kg</p>
                        <p class="card-text">Generated By: {object.generatedBy}</p>
                        <p class="card-text">Current Owner: {object.currentOwener}</p>
                        <p class="card-text row-sm">
                            <button type="button" class="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                                Explore More
                            </button>
                        </p>

                    </div>


                    <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id={`exampleModalLabel${index}`}>{object.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Type of Waste: {object.typeOfEwaste}</p>
                                    <p>Quantity: {object.quantity} kg</p>
                                    <p>Generated By: {object.generatedBy}</p>
                                    <p>Current Owner: {object.currentOwener}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-success">Buy Ewaste</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            )) : <div className='text-center'>
                <h1>No requests yet.. Create one</h1>
            </div>}
    </div>
  );
};

export default OwnedEwaste;
