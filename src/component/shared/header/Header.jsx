import logo from "../../../assets/images/logo.jpeg"
// import { useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md";



const Header = () => {
  // const [open, setOpen] = useState(false);

  // function showMenu() {
  //   setOpen(!open);
  // }


  return (
    <>
      <div className="flex justify-between px-[8rem] bg-[#ffffff] border py-[0.7rem] items-center ">
        <div>
          <img className="w-[12rem]" src={logo} alt="logo" />
        </div>
        <div className="flex gap-10 items-center">
          <div><a href="/Home">Home</a></div>
          <div className="flex items-center gap-2"><div>product</div><div><MdKeyboardArrowUp /></div></div>
          <div>About</div>
          <div>Contact us</div>
          <div><button className="border border-2 border-[#36689f]  bg-[#ffffff] text-[#36689f] hover:text-[#ffffff] rounded-[0.4rem] w-[11rem] py-2 hover:bg-[#36689f]">Get quote</button></div>
          <div><button className="bg-[#eb7824] hover:bg-orange-300 hover:bg-opacity-14 text-[#ffffff] rounded-[0.4rem] w-[11rem] py-2"><a href="/Signup">Sign in</a></button></div>
        </div>
      </div>  
      {/* <div onClick={showMenu} className="flex justify-evenly mt-[-3.5rem] mr-[10rem]">
            <div>
              {open ? (<><p className="">product<span className="ml-[0.5rem]">v</span></p></>):(<><div className="flex flex-col justify-center rounded-[0.5rem] drop-shadow-lg w-[16rem] h-[15rem] bg-[#ffffff] p-3 gap-4 font-semibold ">
              <div><p>-<span>Motor insurance</span></p></div>
              <div><p>-<span>Fire/burglary insurance</span></p></div>
              <div><p>-<span>Marine/avation insurance</span></p></div>
              <div><p>-<span>Life insurance</span></p></div>
              <div><p>-<span>Other</span></p></div>
              </div></>)}
            </div>
              </div> */}
    </>
  )
}

export default Header