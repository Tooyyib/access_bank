import { PiHouseLineLight } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { CiAlignBottom } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { VscSignOut } from "react-icons/vsc";







const LeftSidebar = () => {
  return (
    <div>
        <div className="bg-[#faf8f4] items-center font-semibold text-[2rem] w-[15rem] h-screen flex flex-col justify-between p-2">
            <div className="flex gap-3 flex-col text-[1.5rem]">
              <div className="flex gap-1 items-center">
                <div><PiHouseLineLight /></div>
                <div className=""><a className="text-[#f09b5c] no-underline" href="/Dashboard">Dashboard</a></div>
              </div>
            
            <div className="flex gap-1 items-center">
              <div><CgMenuGridO /></div>
              <div className=""><a className="text-[#b0b4b8] no-underline" href="/Event">Buy insurance</a></div>
            </div>
            
            <div className="flex gap-1 items-center">
              <div><LuMessagesSquare /></div>
            <div className=""><a className="text-[#b0b4b8] no-underline" href="/Signup">Messages</a></div>
            </div>
            
            <div className="flex gap-1 items-center">
              <div><CiAlignBottom /></div>
            <div className=""><a className="text-[#b0b4b8] no-underline" href="/Login">Claims</a></div>
            </div>
           
            <div className="flex gap-1 items-center">
              <div><TfiHeadphoneAlt className="w-[1.2rem]" /></div>
            <div className=""><a className="text-[#b0b4b8] no-underline" href="/Scroll">My broker</a></div>
            </div>
            
            <div className="flex gap-1 items-center">
            <div>  <HiOutlineDevicePhoneMobile /></div>
              <div className=""><a className="text-[#b0b4b8] no-underline" href="/Scroll">Mobile app</a></div>
            </div>
            
            </div>
            <div className="flex gap-1 items-center">
              <div><VscSignOut  className="w-[1.5rem]"/></div>
              <div><a className="text-[#b0b4b8] no-underline text-[1.5rem]" href="/Home">Sign out</a></div>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar