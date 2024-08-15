import Proptypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.prototype = {
  name: Proptypes.string.isRequired,
};

RenderName.prototype = {
  name: "Zach",
};
export default RenderName;
