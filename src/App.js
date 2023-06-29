import React from "react";
import Form from "./components/Form/form";
import List from "./components/List/list";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-Local-Storage-State";

function App() {
  const [activities, setActivities] = useState([
    {
      id: "abc",
      name: "brot",
      weather: true,
    },
  ]);

  function handleActivities(data) {
    setActivities([...activities, { ...data, id: uid() }]);
  }
  return (
    <>
      <h1>Weather App</h1>
      <List activities={activities} />
      <Form onAddActivity={handleActivities} />
    </>
  );
}

export default App;
