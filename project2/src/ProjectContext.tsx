import React from "react";
import App from "./App";
import { WebStorageClass } from "./WebStorageClass";

interface AppContextInterface {
    projectID: string;
    token: string;
    branchName: string;
}

const storage = new WebStorageClass();

const defaultContext = {
  projectID: '17381',
  token: 'glpat-CRs4epaLyzKdvdpGzE_3',
  branchName: 'main'
}

export const ProjectContext = React.createContext<AppContextInterface>(defaultContext);

const appContext: AppContextInterface = {
      projectID: ((storage.getPropValue('projectID') !== null ) ?  storage.getPropValue('projectID') : '17381')!,
      token: ((storage.getPropValue('projectToken') !== null ) ?  storage.getPropValue('projectToken'): 'glpat-CRs4epaLyzKdvdpGzE_3')!,
      branchName: ((storage.getPropValue('branchName') !== null ) ?  storage.getPropValue('branchName'): 'main')!
}

export const ProjectContextProvider = () => { 
    return(
        <ProjectContext.Provider value={appContext!}>
            <App/>
        </ProjectContext.Provider>
    );
 }
