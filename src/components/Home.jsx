function Home(props) {
  
  const { avatarImg, username, createdTime, productImg, brand,
    productName, quantityLeft } = props.post.fields
  
  return (
   
      
    <div className="post-container">
      <img src={avatarImg} />
      <p>{username}</p>
      <p>{createdTime}</p>
      <img src={productImg} />
      <p>{brand}</p>
      <p>{productName}</p>
      <p>{quantityLeft}</p>
      </div>
    
  )
}

export default Home