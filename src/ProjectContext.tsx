import React from "react";
import App from "./App";
import { LocalStorageClass } from "./WebStorageClass";

interface AppContextInterface {
  projectID: string;
  token: string;
  branchName: string;
}

const storage = new LocalStorageClass();

const defaultContext = {
  projectID: "",
  token: "",
  branchName: "main",
};

export const ProjectContext =
  React.createContext<AppContextInterface>(defaultContext);

const appContext: AppContextInterface = {
  projectID: (storage.getPropValue("projectID") !== null
    ? storage.getPropValue("projectID")
    : "")!,
  token: (storage.getPropValue("projectToken") !== null
    ? storage.getPropValue("projectToken")
    : "")!,
  branchName: (storage.getPropValue("branchName") !== null
    ? storage.getPropValue("branchName")
    : "main")!,
};

export const ProjectContextProvider = () => {
  return (
    <ProjectContext.Provider value={appContext!}>
      <App />
    </ProjectContext.Provider>
  );
};
