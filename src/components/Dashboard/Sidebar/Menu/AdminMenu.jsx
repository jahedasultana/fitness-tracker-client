import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdHomeWork } from "react-icons/md";


const AdminMenu = () => {
    return (
        <div>
                 <MenuItem
              label='All subscribers'
              address='allSubscribers'
              icon={BsFillHouseAddFill}
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
              icon={MdHomeWork}
              ></MenuItem>  
        </div>
    );
};

export default AdminMenu;