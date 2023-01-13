import { Notif } from "../../Models/types";

const Notification: React.FC<Notif> = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }
  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `${"notification"} ${specialClasses}`; // Take advantage of the names you are using. If the value of the variable is the name of your class so use it directly. You don't need to check it values and then change another variable, just use your variable
  // Like this -> const cssClasses = `${"notification"} ${props.status}`;

  return (
    <div className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
