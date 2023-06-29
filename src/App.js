import React from "react";
import Form from "./components/Form/form";
import List from "./components/List/list";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("Activities", {
    defaultValue: [
      {
        id: "abc",
        name: "brot",
        weather: true,
      },
    ],
  });

  function handleActivities(data) {
    setActivities([...activities, { ...data, id: uid() }]);
  }
  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <List activities={activities} />
        <Form onAddActivity={handleActivities} />
      </div>
    </>
  );
}

export default App;
