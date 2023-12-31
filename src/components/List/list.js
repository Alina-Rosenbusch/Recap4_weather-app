import "../List/list.css";

export default function List({ activities }) {
  return (
    <ul className="list">
      {activities.map((activity) => {
        return (
          <li key={activity.id}>
            {activity.name} -{" "}
            {activity.weather ? "good weather" : "Bad weather"}
          </li>
        );
      })}
    </ul>
  );
}
