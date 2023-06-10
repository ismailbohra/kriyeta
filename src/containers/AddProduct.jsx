import React, { useState } from "react";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("details", productDetails);
    formData.append("price", productPrice);
    formData.append("image", productImage);

    fetch("https://api.example.com/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductName("");
        setProductDetails("");
        setProductPrice("");
        setProductImage(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        <label htmlFor="productDetails">Product Details:</label>
        <input
          type="text"
          id="productDetails"
          value={productDetails}
          onChange={(event) => setProductDetails(event.target.value)}
        />

        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />

        <label htmlFor="productImage">Product Image:</label>
        <input
          type="file"
          id="productImage"
          onChange={(event) => setProductImage(event.target.files[0])}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
