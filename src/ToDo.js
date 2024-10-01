import Icon from "@mdi/react";
import { mdiCheckCircleOutline, mdiCircleOutline } from "@mdi/js";

function ToDo(props) {
  return (
    <div
      style={{
        background: props.background || "red",
        width: "100%",
        height: "50px",
        border:
          "solid " + props.borderWidth || "1px" + props.borderColor || "black",
      }}
    >
      <Icon
        path={props.done ? mdiCheckCircleOutline : mdiCircleOutline}
        title="User Profile"
        size={2}
        color={props.done ? "green" : "black"}
      />
      {props.text || "no text"}
    </div>
  );
}

export default ToDo;
