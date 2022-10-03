
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch code sourced from MDN

//Our projectID is 17381
//Project token: glpat-CRs4epaLyzKdvdpGzE_3
//refName attribute no longer works in Gitlab API since update on 30.09.2022 so fetching commits for branch other than main is deprecated
export async function getCommits(projectID = '', token = ''  /*, branch = ''*/) {
    const response = await fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/' + projectID + '/repository/commits' /*+ '?refName=' + branch*/ + '?per_page=100', {
  
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
    if(response.ok){
      return response.json(); // parses JSON response into native JavaScript objects
    }
};

export async function getIssues(projectID = '', token = '') {
  const response = await fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/' + projectID + '/issues', {

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

export async function getBranches(projectID = '', token = '') {
  const response = await fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/' + projectID + '/repository/branches/', {

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