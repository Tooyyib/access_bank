import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import linkedin from "../../assets/images/linkedin.png"

// import Button from "../../component/shared/button/Button"


import { GoArrowLeft } from "react-icons/go";
import logo2 from "../../assets/images/logo2.png"


const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#e8e6e2] w-[50%] flex flex-col items-center  h-screen pt-3">
        <div className="flex flex-col items-start gap-3 w-[70%]">
          <div><img className="w-[9rem]" src={logo2} alt="logo" /></div>
          <div className="flex gap-2 items-center"><div><GoArrowLeft className="text-black opacity-60 font-bold" /></div><div className="text-black opacity-20">back</div></div>
        </div>
        <div className="flex flex-col gap-4 items-center mt-[3rem]">
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Email</p>
          <div><input placeholder="sample@gmail.com" className="w-[18rem] text-sm bg-transparent  border-b border-black  outline-none" type="text" /></div>
         </div>
         <div className="flex flex-col">
         <p className="text-[0.9rem]">Password</p>
          <div><input placeholder="Enter your password" className="w-[18rem] text-sm bg-transparent  border-b border-black  outline-none" type="text" /></div>
         </div>
          <div className=""><button className="w-[18rem] font-bold rounded-3 p-2 bg-[#EB7824] text-white">Log in</button></div>
          <div className="text-sm font-semibold">Forgot your password?</div>
          <div className="flex gap-2 items-center"><div>__________</div> <div>OR</div> <div>__________</div></div>
          <div>continue with</div>
          <div className="flex justify-center gap-3">
            <div><button className="w-[9rem] font-bold rounded-3 p-2 bg-[#114c8d] text-white">Acess bank</button></div>
            <div><button className="w-[9rem] font-bold rounded-3 p-2 bg-[#14828a] text-white">Lend co</button></div>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <div><img className="w-[0.8rem]" src={facebook} alt="facebook" /></div>
            <div><img className="w-[1.2rem]" src={google} alt="google" /></div>
            <div><img className="w-[1.2rem]" src={linkedin} alt="linkedin" /></div>
          </div>
          <div className="text-sm">Dont have an account ?<span className="text-blue-700 text-sm"><a href="/Signup">SIGNUP</a></span></div>
        </div>
      </div>
      <div className="dredlock w-[50%] flex flex-col  pl-[2rem]">
        <div className="w-[24%] bg-[#CA7F12] bg-opacity-40 text-white font-bold pt-3 mt-[18rem] leading-normal px-3">
          HEALTH INSURANCE POLICIES COVERS THE COST OF YOUR MEDICAL <span className="text-orange-300">TREATMENTS.</span> 
        </div>
        <div className="mt-[14rem] text-white opacity-100 leading-normal text-sm">© Access insurance brokers 2023. We love our users!</div>
      </div>
    </div>
  )
}

export default Login 