import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";


const TrainerMenu = () => {
    return (
        <>
          
          <MenuItem
              label='Manage Slots'
              address='manageSlots'
              icon={BsFillHouseAddFill}
              ></MenuItem>
             
              {/* Add New slot */}
              <MenuItem
              label='Add New slot'
              address='addNewSlot'
              icon={MdHomeWork}
              ></MenuItem>
              {/* Add new Forum */}
              <MenuItem
              label='Add new Forum'
              address='addNewForum'
              icon={MdHomeWork}
              ></MenuItem>  
        </>
    );
};

export default TrainerMenu;