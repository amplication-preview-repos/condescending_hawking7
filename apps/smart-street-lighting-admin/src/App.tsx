import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SensorDataList } from "./sensorData/SensorDataList";
import { SensorDataCreate } from "./sensorData/SensorDataCreate";
import { SensorDataEdit } from "./sensorData/SensorDataEdit";
import { SensorDataShow } from "./sensorData/SensorDataShow";
import { StreetLightList } from "./streetLight/StreetLightList";
import { StreetLightCreate } from "./streetLight/StreetLightCreate";
import { StreetLightEdit } from "./streetLight/StreetLightEdit";
import { StreetLightShow } from "./streetLight/StreetLightShow";
import { PedestrianList } from "./pedestrian/PedestrianList";
import { PedestrianCreate } from "./pedestrian/PedestrianCreate";
import { PedestrianEdit } from "./pedestrian/PedestrianEdit";
import { PedestrianShow } from "./pedestrian/PedestrianShow";
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
        title={"SmartStreetLighting"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SensorData"
          list={SensorDataList}
          edit={SensorDataEdit}
          create={SensorDataCreate}
          show={SensorDataShow}
        />
        <Resource
          name="StreetLight"
          list={StreetLightList}
          edit={StreetLightEdit}
          create={StreetLightCreate}
          show={StreetLightShow}
        />
        <Resource
          name="Pedestrian"
          list={PedestrianList}
          edit={PedestrianEdit}
          create={PedestrianCreate}
          show={PedestrianShow}
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
