export const style = {
  /*
  style template:

  classname: {
    styleProp: 'value',
    styleProp: 'value',  
    styleProp: 'value',  
  },

  to use this in material ui component, add sx={style.classname} to the component prop
  */
  // Graph
  graphContainer: {
    margin: "auto",
    width: "75%",
    height: "70vh",
    backgroundColor: "#f9f9f9", 
    borderRadius: "25px",
    boxShadow: "8",
  },

  chart: {
    height: "50vh",
  },

  chartNames: {
    margin: "auto",
    heigth: "20vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  removeTextMarg: {
    padding: "0px",
    paddingLeft: "4px",
    margin: "0",
  },

 // Commits page

   commitComponentPaper: {
    padding: "20px",
    borderRadius: "25px",
    margin: "20px",
    backgroundColor: "white",
  }, 

  commitListBox: {
    width: "75%",
    heigth: "50%",
    margin: "auto",
    backgroundColor: "#f9f9f9", 
    borderRadius: "25px",
    boxShadow: "8",
    overflow: "hidden",
    overflowY: "scroll" 
  },

  commitsSelectBranch: {
    margin: "auto",
    padding: "20px",
    textAlign: "center"
  },

  
  // Issue page
  issueListBox: {
    width: "100%",
    height: "80vh",
    margin: "auto",
    backgroundColor: "#f9f9f9", 
    borderRadius: "25px",
    boxShadow: "8",
    overflow: "hidden"
  },

  issuesContainer : {
    height: "70%",
    overflow: "hidden",
    overflowY: "scroll",
  },
  
  issueSelectName: {
    paddingTop: "15px",
    width: "50%",
    margin: "auto"
  },

  issueSelectStatus: {
    paddingTop: "15px",
    width: "50%",
    margin: "auto"
  },

  issueSelectDates: {
    paddingTop: "20px",
    width: "50%",
    margin: "auto"
  },

  issuePaper: {
    padding: '20px',
    borderRadius: '25px',
    width: 'auto',
    margin: '20px',
  }
};
