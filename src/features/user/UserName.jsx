import { useSelector } from "react-redux";
import { getName } from "./userSlice";

function UserName() {
  const userName = useSelector(getName);
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
