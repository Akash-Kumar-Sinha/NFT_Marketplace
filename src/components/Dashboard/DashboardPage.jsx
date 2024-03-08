import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { RiCollageLine, RiNftLine } from "react-icons/ri";
import { CiHome, CiSettings } from "react-icons/ci";

const DashboardPage = () => {
  return (
    <div>
      <Sidebar className="h-screen">
        <Menu className="pl-5">
          <div className="flex flex-row gap-3.5 items-center justify-center ml-4 md:ml-[0] mt-4 w-[67%] md:w-full">
            <img
              className="h-14 md:h-auto rounded-[50%] w-14"
              src="profilePlaceholder.jpg"
              alt="PF"
            />
            <div className="flex gap-1.5">
              <h1
                className="text-black-900 text-lg tracking-[0.18px]"
                size="txtOutfitSemiBold18"
              >
                Akash Kumar Sinha
              </h1>
            </div>
          </div>
        </Menu>
        <Menu className="pl-5 pt-6">
          <MenuItem>
            <div className="flex gap-3.5">
              <CiHome className="text-gray-400" size={30} />
              Dashboard
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex gap-3.5">
              <CiSettings className="text-gray-400" size={30} />
              Settings
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex gap-3.5">
              <RiNftLine className="text-gray-400" size={30} />
              Marketplace
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex gap-3.5">
              <RiCollageLine className="text-gray-400" size={30} />
              Collection
            </div>
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
};

export default DashboardPage;
