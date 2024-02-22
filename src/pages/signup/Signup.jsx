import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import linkedin from "../../assets/images/linkedin.png"
import cancel from "../../assets/images/cancel.png"
// import Button from "../../component/shared/button/Button"
import logo2 from "../../assets/images/logo2.png"

import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { useState } from "react"

const Signup = () => {
  const[password, setPassword]=useState("")
    const[visible, setVisible]=useState(false)
  return (
    <div className="bg-[#e8e6e2] h-screen">
      <div className=" flex flex-col items-center py-[2rem]">
        <div className="flex flex-col items-start gap-3 w-[70%]">
          <div><img className="w-[9rem]" src={logo2} alt="logo" /></div>
        </div>
        <div className="flex flex-col gap-2 items-center mt-[3rem] mt-[6rem]">
          <div className="grid grid-cols-2 gap-5 ">
          <div className="flex flex-col">
         <p className="text-[0.9rem]">Surname</p>
          <div><input placeholder="Daniel regar" className="w-[18rem] text-sm bg-transparent border-b border-black outline-none" type="text" /></div>
         </div>
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Other-Name</p>
          <div><input placeholder="Daniel regar" className="w-[18rem] text-sm bg-transparent border-b  border-black outline-none" type="text" /></div>
         </div>
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Phone-Number</p>
          <div><input placeholder="+234-00000000" className="w-[18rem] text-sm bg-transparent  border-b border-black  outline-none" type="text" /></div>
         </div>
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Email</p>
          <div><input placeholder="sample@email.com" className="w-[18rem] text-sm bg-transparent border-b border-black outline-none" type="text" /></div>
         </div>
         {/* password */}
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Password</p>

         <div className="flex">
         <div><input  className="w-[18rem] text-sm bg-transparent border-b border-black outline-none" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="**********" type={visible ? "text": "password"} /></div>
          <div className="text-green-400 ml-[-3rem]" onClick={()=>setVisible(!visible)}>
                {
                    visible ? <div><BsEyeFill  className="text-black opacity-50" /></div> : <div><AiFillEyeInvisible  className="text-black opacity-50"/></div>
                }
            </div>
         </div>
         </div>
          {/* password */}
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Confirm Password</p>

         <div className="flex">
          <div><input  className="w-[18rem] text-sm bg-transparent border-b border-black outline-none" value={password} id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="**********" type={visible ? "text": "password"} /></div>
          <div className="text-green-400 ml-[-3rem]" onClick={()=>setVisible(!visible)}>
                {
                    visible ? <div><BsEyeFill  className="text-black opacity-50" /></div> : <div><AiFillEyeInvisible  className="text-black opacity-50"/></div>
                }
            </div>
         </div>
         </div>
          

         <div className="grid grid-cols-2 items-center text-[0.6rem] mt-[-1rem] font-bold opacity-70">
          <div className="flex gap-1 items-center ">
            <div><img className="w-[0.5rem] rounded-[50%]" src={cancel} alt="cancel" /></div>
            <div>8 characters minimum</div>
          </div>
          <div className="flex gap-1 items-center">
            <div><img className="w-[0.5rem] rounded-[50%]" src={cancel} alt="cancel" /></div>
            <div>1 special character</div>
          </div>
          <div className="flex gap-1 items-center">
            <div><img className="w-[0.5rem] rounded-[50%]" src={cancel} alt="cancel" /></div>
            <div>uppercase character</div>
          </div>
          <div className="flex gap-1 items-center">
            <div><img className="w-[0.5rem] rounded-[50%]" src={cancel} alt="cancel" /></div>
            <div>Lower character</div>
          </div>
         </div>
          </div>
          <div className="flex justify-center gap-1 text-sm items-center">
            <div><input className="w-[0.6rem]" type="checkbox" /></div>
            <div>By selecting create account, i agree to terms of services and privacy policy</div>
          </div>
          <div className=""><button className="w-[39rem] font-bold rounded-lg p-2 bg-[#EB7824] text-white">create account</button></div>
          <div className="flex gap-2 items-center"><div>__________</div> <div>OR</div> <div>__________</div></div>
          <div>continue with</div>
          <div className="flex justify-center gap-3">
            <div><button className="w-[9rem] font-bold rounded-lg p-2 bg-[#114c8d] text-white">Acess bank</button></div>
            <div><button className="w-[9rem] font-bold rounded-lg p-2 bg-[#14828a] text-white">Lend co</button></div>
          </div>
          <div className="flex justify-between w-[10rem]">
            <div><img className="w-[0.8rem]" src={facebook} alt="facebook" /></div>
            <div><img className="w-[1.2rem]" src={google} alt="google" /></div>
            <div><img className="w-[1.2rem]" src={linkedin} alt="linkedin" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup