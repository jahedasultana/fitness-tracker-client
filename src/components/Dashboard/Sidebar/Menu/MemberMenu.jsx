import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { FcSettings } from "react-icons/fc";

const MemberMenu = () => {
  return (
    <div>
      {/* Add new Class */}
      <MenuItem
        label="Activity Log"
        address="activityLog"
        icon={MdHomeWork}
      ></MenuItem>

      {/* Add new Class */}
      <MenuItem
        label="Booked Trainer"
        address="bookedTrainer"
        icon={MdHomeWork}
      ></MenuItem>
    </div>
  );
};

export default MemberMenu;
