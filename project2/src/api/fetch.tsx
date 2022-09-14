import React from "react";

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch code sourced from MDN

//Our projectID is 17381
//Project token: glpat-CRs4epaLyzKdvdpGzE_3

export async function getData(projectID = '', token = '') {
    const response = await fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/' + projectID + '/repository/commits/', {
      method: 'GET', 
      mode: 'cors', 
      cache: 'default',
      credentials: 'same-origin', 
      headers: {
        'PRIVATE-TOKEN': token,
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
    });
    return response.json(); // parses JSON response into native JavaScript objects
};

  