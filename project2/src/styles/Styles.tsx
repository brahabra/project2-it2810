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

  // --------------- Commits page ---------------

  // The whole Graph-container
  graphContainer: {
    margin: "auto",
    width: "100%",
    height: "70vh",
    backgroundColor: "#f9f9f9",
    borderRadius: "25px",
    boxShadow: "8",
    overflow: "hidden",
  },

  // Only the graph
  chart: {
    height: "50vh",
  },

  // The names under the graph
  chartNames: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "4px",
    overflow: "hidden",
    overflowY: "scroll",
  },

  // One commit component 
  commitComponentPaper: {
    padding: "20px",
    borderRadius: "25px",
    margin: "20px",
  },

  // Only the scrollbar commits, not the filters above
  commitListContainer: {
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll",
  },

  // The whole commitList, with each commit and filtering options
  commitListBox: {
    width: "100%",
    height: "70vh",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "25px",
    boxShadow: "8",
    overflow: "hidden",
  },

  // select branch
  commitsSelectBranch: {
    margin: "auto",
    padding: "20px",
    textAlign: "center",
  },

  // ------------------ Issue page ------------------

  // The whole issueList, with each issue and filtering options
  issueListBox: {
    width: "100%",
    height: "80vh",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "25px",
    boxShadow: "8",
    overflow: "hidden",
  },

  // Only the scrollbar issues, not the filters above
  issuesContainer: {
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll",
  },

  // select name
  issueSelectName: {
    paddingTop: "15px",
    width: "50%",
    margin: "auto",
  },
  // select status
  issueSelectStatus: {
    paddingTop: "15px",
    width: "50%",
    margin: "auto",
  },

  // select date
  issueSelectDates: {
    paddingTop: "20px",
    width: "50%",
    margin: "auto",
  },

  // one issue component 
  issuePaper: {
    padding: "20px",
    borderRadius: "25px",
    width: "auto",
    margin: "20px",
  },
};
