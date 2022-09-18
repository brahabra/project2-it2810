import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Commit } from "../components/Commit";
import { getData } from "../api/fetch";
import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
   <div>
     <div className="content">
        <h1>GitLab details</h1>
        <div className="input">
          Her kommer input til GitLab
        </div>
     </div>
   </div>
  );
}
