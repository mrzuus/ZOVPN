import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ServerLocationsList } from "./serverLocations/ServerLocationsList";
import { ServerLocationsCreate } from "./serverLocations/ServerLocationsCreate";
import { ServerLocationsEdit } from "./serverLocations/ServerLocationsEdit";
import { ServerLocationsShow } from "./serverLocations/ServerLocationsShow";
import { SubscriptionPlansList } from "./subscriptionPlans/SubscriptionPlansList";
import { SubscriptionPlansCreate } from "./subscriptionPlans/SubscriptionPlansCreate";
import { SubscriptionPlansEdit } from "./subscriptionPlans/SubscriptionPlansEdit";
import { SubscriptionPlansShow } from "./subscriptionPlans/SubscriptionPlansShow";
import { VpnConnectionsList } from "./vpnConnections/VpnConnectionsList";
import { VpnConnectionsCreate } from "./vpnConnections/VpnConnectionsCreate";
import { VpnConnectionsEdit } from "./vpnConnections/VpnConnectionsEdit";
import { VpnConnectionsShow } from "./vpnConnections/VpnConnectionsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
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
        title={"VPNService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ServerLocations"
          list={ServerLocationsList}
          edit={ServerLocationsEdit}
          create={ServerLocationsCreate}
          show={ServerLocationsShow}
        />
        <Resource
          name="SubscriptionPlans"
          list={SubscriptionPlansList}
          edit={SubscriptionPlansEdit}
          create={SubscriptionPlansCreate}
          show={SubscriptionPlansShow}
        />
        <Resource
          name="VpnConnections"
          list={VpnConnectionsList}
          edit={VpnConnectionsEdit}
          create={VpnConnectionsCreate}
          show={VpnConnectionsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
