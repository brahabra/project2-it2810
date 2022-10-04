//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch code sourced from MDN

//refName attribute for fetching branch no longer in use
/*+ '?ref_name=' + branch*/
export async function getCommits(projectID = '', token = ''  /*, branch = ''*/) {
  const response = await fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/' + projectID + '/repository/commits?per_page=100', {

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
  if (response.ok) {
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

/* getBranches is deprecated, se comment on getCommits
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
};*/
