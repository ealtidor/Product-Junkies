import React from 'react';
import { useState } from 'react'
import {baseURL, config} from "../services"
import axios from 'axios'


const Form = (props) => {
  const [avatarImg, setAvatarImg] = useState('');
  const [username, setUsername] = useState('');
  const [zipCode, setZipCode] = useState(0)
  const [productImg, setProductImg] = useState('');
  const [brand, setBrand] = useState('');
  const [productName, setProductName] = useState('');
  const [quantityLeft, setQuantityLeft] = useState(0);
  
  const handleSubmit = async (e) => {
  e.preventDefault()

  const newPost = {
    avatarImg,
    username,
    zipCode,
    productImg,
    brand,
    productName,
    quantityLeft,
  }
  
  await axios.post(baseURL, { fields: newPost }, config);
props.setToggleFetch((curr) => !curr)
}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="avatarImg">Profile Picture</label>
      <input
        type='text'
        id='country'
        onChange={ (e) => setAvatarImg(e.target.value)}
      />
      <label htmlFor="username">Junkie Name</label>
      <input
        type='text'
        id='username'
        onChange={ (e) => setUsername(e.target.value)}
      />
       <label htmlFor="zipCode">Location</label>
      <input
        type='text'
        id='zipCode'
        onChange={ (e) => setZipCode(e.target.value)}
      />
      <label htmlFor="productImg">Product Image Upload</label>
      <input
        type='img'
        id='productImg'
        onChange={ (e) => setProductImg(e.target.value)}
      />
      <label htmlFor="brand">Brand</label>
      <input
        type='text'
        id='brand'
        onChange={ (e) => setBrand(e.target.value)}
      />
      <label htmlFor="productName">Product Name</label>
      <input
        type='text'
        id='productName'
        onChange={ (e) => setProductName(e.target.value)}
      />
      <label htmlFor=" quantityLeft">What's Left:</label>
      <input
        type=''
        id=' quantityLeft'
        onChange={ (e) => setQuantityLeft(e.target.valueAsNumber)}
      />
      <input
        type='number'
        id=' quantityLeft'
        onChange={ (e) => setQuantityLeft(e.target.valueAsNumber)}
      />
    </form>
  );
};

export default Form;


