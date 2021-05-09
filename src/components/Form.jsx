import React from "react";
import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";

const Form = (props) => {
  const [avatarImg, setAvatarImg] = useState("");
  const [username, setUsername] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantityLeft, setQuantityLeft] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      avatarImg,
      username,
      zipCode,
      productImg,
      brand,
      productName,
      category,
      quantityLeft,
    };

    await axios.post(baseURL, { fields: newPost }, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="avatarImg">Profile Picture</label>
      <input
        type="file"
        id="country"
        onChange={(e) => setAvatarImg(e.target.value)}
      />
      <label htmlFor="username">Junkie Name</label>
      <input
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="zipCode">zipCode</label>
      <input
        type="text"
        id="zipCode"
        onChange={(e) => setZipCode(e.target.value)}
      />
      <label htmlFor="productImg">Product Image Upload</label>
      <input
        type="file"
        id="productImg"
        onChange={(e) => setProductImg(e.target.value)}
      />
      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        id="brand"
        onChange={(e) => setBrand(e.target.value)}
      />
      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        id="productName"
        onChange={(e) => setProductName(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled selected>
          Pick One
        </option>
        <option value="Hair">HAIR</option>
        <option value="Skin">SKIN</option>
        <option value="Makeup">MAKEUP</option>
        <option value="Nails">NAILS</option>
      </select>
      <label htmlFor=" quantityLeft">What's Left:</label>
      <select
        type="number"
        id="quantityLeft"
        value={quantityLeft}
        onChange={(e) => setQuantityLeft(e.target.valueAsNumber)}
      >
        <option value="25">25%</option>
        <option value="50">50%</option>
        <option value="75">75%</option>
        <option value="100">100%</option>
      </select>
      <button type="submit">Post Your Junk</button>
    </form>
  );
};

export default Form;
