import React from "react";

function Home() {
  function handleGetRequest() {
    fetch("https://api.example.com/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handlePutRequest() {
    fetch("https://api.example.com/data/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: "value" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handlePostRequest() {
    fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers as needed
      },
      body: JSON.stringify({ key: "value" }), // Replace with the data you want to send
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleDeleteRequest() {
    fetch("https://api.example.com/data/1", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Deleted successfully");
        } else {
          throw new Error("Deletion failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return <div>Home</div>;
}

export default Home;
