
import { FaSubscript } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const AdminMenu = () => {
    return (
        <div>
                 <MenuItem
              label='All subscribers'
              address='allSubscribers'
              icon={FaSubscript}
              ></MenuItem>
             
              {/* All Trainers*/}
              <MenuItem
              label='All Trainers'
              address='allTrainers'
              icon={MdHomeWork}
              ></MenuItem>

              {/* Applied Trainer */}
              <MenuItem
              label='Applied Trainer'
              address='appliedTrainer'
              icon={MdHomeWork}
              ></MenuItem>  
              {/* Balance */}
              <MenuItem
              label='Balance'
              address='balance'
              icon={MdHomeWork}
              ></MenuItem>  
              {/* Add new Class */}
              <MenuItem
              label='Add new Class'
              address='addNewClass'
              icon={IoIosAddCircle}
              ></MenuItem>
               {/* Add new Forum */}
               <MenuItem
              label='Add new Forum'
              address='addForum'
              icon={MdOutlineManageHistory}
              ></MenuItem>   
        </div>
    );
};

export default AdminMenu;