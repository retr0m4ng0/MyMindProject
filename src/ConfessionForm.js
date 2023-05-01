import './styles.css';
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ConfessionForm = () => {
    const [title, setTitle] = useState("");
    const [confession, setConfession] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (confession.trim() === "") {
        toast.error("Please enter a confession before submitting!"); 
        return;
      }
      if (title.trim() === "") {
        toast.error("Please enter a title before submitting!");
        return;
      }
      const db = firebase.firestore();
      db.collection("confessions")
        .add({
          title: title,
          text: confession,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setTitle("");
          setConfession("");
          setError("");
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={23}
          placeholder="Title"
        />
        <textarea
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
          placeholder="Confession"
        />
        {error && <p>{error}</p>}
        <button type="submit">SUBMIT</button>
      </form>
    );
  };
  
export default ConfessionForm;
