import React from "react";
import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Form = (props) => {
  const [avatarImg, setAvatarImg] = useState("");
  const [username, setUsername] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantityLeft, setQuantityLeft] = useState("");
  const history = useHistory()

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
    history.push('/')
  };
  const profileImg = avatarImg ? avatarImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6mVep8mmwTbVD9A6_0tAkjhiPOUikhenZnH3NGEImOX4eW2pbXJ8E-WmJcWXjcXY-bA&usqp=CAU"
  const newProdImg = productImg ? productImg : "data:image/jpeg;base64,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"
  return (
    <div>
      <h2 className="subheader-form">ADD YOUR JUNK</h2>
      
      
    <form className="add-post" onSubmit={handleSubmit}>
      <label className="profile-label" htmlFor="avatarImg">Profile Picture</label>
      <img className="avatar" src={profileImg} alt="avatar" />
      <input
        type="text"
        id="profile"
          placeholder="Paste Image URL"
          value={avatarImg}
        onChange={(e) => setAvatarImg(e.target.value)}
      />
      <label className="username-label" htmlFor="username">Junkie Name</label>
      <input
        type="text"
          id="username"
          value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="zip-label" htmlFor="zipCode">Zip Code</label>
      <input
        type="text"
          id="zipCode"
          value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
     
      <label className="brand-label" htmlFor="brand">Brand</label>
      <input
        type="text"
          id="brand"
          value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <label className="productName-label" htmlFor="productName">Product Name</label>
      <input
        type="text"
          id="productName"
          value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label className="category-label" htmlFor="category">Category</label>
      <select
          name="category"
          id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled={category} selected>
          Pick One
        </option>
        <option value="Hair">HAIR</option>
        <option value="Skin">SKIN</option>
        <option value="Makeup">MAKEUP</option>
        <option value="Nails">NAILS</option>
      </select>
      <label className="quantity-label" htmlFor=" quantityLeft">What's Left:</label>
      <select
        type="text"
        id="quantityLeft"
        value={quantityLeft}
        onChange={(e) => setQuantityLeft(e.target.value)}
      >
        <option value="25">25%</option>
        <option value="50">50%</option>
        <option value="75">75%</option>
        <option value="100">100%</option>
      </select>
      <label className="productImg-label" htmlFor="productImg">Product Image Upload</label>
      <input
        type="text"
          id="productImg"
          value={productImg}
          placeholder="Paste Product Image URL"
        onChange={(e) => setProductImg(e.target.value)}
        />
        <img className="upload-prod" src={newProdImg} alt="products" />
      <button className="form-button"type="submit">Post Your Junk</button>
      
    </form>
    </div>
  );
};

export default Form;
