import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FolderList } from "./folder/FolderList";
import { FolderCreate } from "./folder/FolderCreate";
import { FolderEdit } from "./folder/FolderEdit";
import { FolderShow } from "./folder/FolderShow";
import { BacklogItemList } from "./backlogItem/BacklogItemList";
import { BacklogItemCreate } from "./backlogItem/BacklogItemCreate";
import { BacklogItemEdit } from "./backlogItem/BacklogItemEdit";
import { BacklogItemShow } from "./backlogItem/BacklogItemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProductManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Folder"
          list={FolderList}
          edit={FolderEdit}
          create={FolderCreate}
          show={FolderShow}
        />
        <Resource
          name="BacklogItem"
          list={BacklogItemList}
          edit={BacklogItemEdit}
          create={BacklogItemCreate}
          show={BacklogItemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
