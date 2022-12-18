import Modal from "./Modal";
import "./Notification.scss";

const Notification: React.FC<any> = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }
  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `${"notification"} ${specialClasses}`;

  return (
    <Modal>
      <div className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    </Modal>
  );
};

export default Notification;
