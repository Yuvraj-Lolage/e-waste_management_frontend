import React, { useState } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

import './ewasteform.css';
import { useNavigate } from 'react-router-dom';
const EwasteForm = () => {
    const navigator = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [organization, setOrganization] = useState('');
    const [typeOfWaste, setTypeOfWaste] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [address, setAddress] = useState('');
    const [file, setFile] = useState();
    const [date, setDate] = useState('');
    const [collectionAddress, setCollectionAddress] = useState('');
    const [other, checkother] = useState(false);
    // const [userId, setUserId] = useState();

    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.id; 
    const handleFormSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append('file', file);
            formData.append('name', name);
            formData.append('email',email);
            formData.append('phoneNo',phoneNo);
            formData.append('organization', organization);
            formData.append('typeOfWaste', typeOfWaste);
            formData.append('quantity', quantity);
            formData.append('address', address);
            formData.append('date',date);
            formData.append('collectionAddress', collectionAddress);
            formData.append('userId',userId);
            formData.append('status', "pending");
            await axios.post("http://localhost:5000/request/create", formData);
            navigator('/successMessage');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className=''>
            <div class="container mt-3">
                <section className='text-center'>
                    <h2 id='title'>E-Waste Generation Request</h2>
                </section>

                <form method="post" encType="multipart/form-data" onSubmit={ handleFormSubmit }>
                    <section className='mb-3'>
                        <h4 id='section-titles'>Requester Information</h4>
                    </section>
                    <div class="mb-3">
                        <label for="customerName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="customerName" placeholder="Enter your name" required 
                        onInput={ (event)=>{ setName(event.target.value) }}/>
                    </div>

                    <div class="mb-3">
                        <label for="customerEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="customerEmail" placeholder="Enter your email" required 
                        onInput={(e) => { setEmail(e.target.value) }}/>
                    </div>

                    <div class="mb-3">
                        <label for="customerPhone" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="customerPhone" placeholder="Enter your phone number" required 
                        onInput={(e)=>{ setPhoneNo(e.target.value) }}/>
                    </div>

                    <div class="mb-3">
                        <label for="organization" class="form-label">Organization (if applicable)</label>
                        <input type="text" class="form-control" id="organization" placeholder="Enter your organization" 
                        onInput={(e)=>{ setOrganization(e.target.value) }}/>
                    </div>
                    <section className='mt-5 mb-3'>
                        <h4 id='section-titles'>Request Details</h4>
                    </section>
                    <div class="mb-3">
                        <label for="wasteType" class="form-label">Type of E-Waste</label>
                        <select class="form-select" id="wasteType" onInput={(event) => { 
                            setTypeOfWaste(event.target.value);
                            if(event.target.value === 'other'){
                                checkother(true);
                            }
                            }} required>
                            <option selected disabled value="">Choose...</option>
                            <option value='electronics'>Electronics</option>
                            <option value='batteries'>Batteries</option>
                            <option value='small appliances'>Small Appliances</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>

                    {other &&
                        <div class="mb-3">
                            <label for="quantity" class="form-label">E-waste Category</label>
                            <input type="text" class="form-control" id="other" placeholder="Enter type of e-waste" 
                            onInput={(e)=>{ setTypeOfWaste(e.target.value) }}/>
                        </div>}
                    <div class="mb-3">
                        <label for="quantity" class="form-label">Quantity (kgs)</label>
                        <input type="number" class="form-control" id="quantity" placeholder="Enter quantity" required 
                        onInput={(e)=>{ setQuantity(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control" id="address" rows="2"
                            placeholder="Enter your address"
                            onInput={(e)=>{ setAddress(e.target.value) }}></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="wasteImage" class="form-label">Upload Image of E-Waste</label>
                        <input class="form-control" type="file" id="wasteImage" accept="image/*" onChange={(event) => setFile(event.target.files[0])} required />
                    </div>

                    <section className='mt-5 mb-3'>
                        <h4 id='section-titles'>Collection Details</h4>
                    </section>
                    <div class="mb-3">
                        <label for="pickupDate" class="form-label">Preferred Pickup Date</label>
                        <input type="date" class="form-control" id="pickupDate" required 
                        onInput={(e)=>{ setDate(e.target.value) }}/>
                    </div>

                    <div class="mb-3">
                        <label for="collectionaddress" class="form-label">Collection Address</label>
                        <textarea class="form-control" id="collectionaddress" rows="2"
                            placeholder="Enter collection address" onInput={(e)=>{ setCollectionAddress(e.target.value) }}></textarea>
                    </div>

                    <div class="btn-div text-center mb-3">
                        <button type="submit" class="btn btn-success">Apply for Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EwasteForm