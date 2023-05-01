import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const ConfessionList = () => {
    const [confessions, setConfessions] = useState([]);
  
    useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db
        .collection("confessions")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          const newConfessions = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setConfessions(newConfessions);
        });
      return unsubscribe;
    }, []);
  
    return (
      <ul className="confession-list">
        {confessions.map((confession) => (
          <li key={confession.id}>
            <h2 className="confession-title">
              {confession.title}
              <span className="confession-date">
                {new Date(
                  confession.timestamp?.toDate()
                ).toLocaleDateString()}
              </span>
            </h2>
            <p className="confession-text">{confession.text}</p>
          </li>
        ))}
      </ul>
    );
  };
  
export default ConfessionList;