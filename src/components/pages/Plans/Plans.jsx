import { Helmet } from "react-helmet";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import { Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import { IoMdDoneAll } from "react-icons/io";
import CreatePlan from "./components/CreatePlan";

const Plans = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet>
        <title>Monthly Plan</title>
      </Helmet>
      <div className="w-full p-1 lg:p-8 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuItem>
              <Tooltip content="View your pending plans" relationship="label">
                <Button
                  size="large"
                  icon={<CalendarMonthRegular />}
                  iconPosition="after"
                >
                  Pending Plans
                </Button>
              </Tooltip>
            </MenuItem>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>Expense October</MenuItem>
              <MenuItem>Music plannings</MenuItem>
              {/* <MenuItem disabled>Zoom In</MenuItem> */}
              <MenuItem>Problem Solving</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        {/* <MenuItem>
              <Tooltip content="Create a plan" relationship="label">
                <Button
                  size="large"
                  icon={<IoMdAdd />}
                  iconPosition="after"
                >
                  Create a Plan
                </Button>
              </Tooltip>
            </MenuItem> */}
        <MenuItem>
          <CreatePlan />
        </MenuItem>

        <MenuItem>
          <Tooltip content="Completed plans" relationship="label">
            <Button size="large" icon={<IoMdDoneAll />} iconPosition="after">
              Completed Plans
            </Button>
          </Tooltip>
        </MenuItem>
      </div>
    </div>
  );
};

export default Plans;
