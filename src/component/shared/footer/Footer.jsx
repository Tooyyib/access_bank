import logo from "../../../assets/images/logo.jpeg"




const Footer = () => {
  return (
    <div className="bg-[#fdf0e7] mt-[2rem] p-5">
      <div className="flex justify-around">
  <div><img src={logo} className="w-[10rem]" alt="logo" /></div>
  <div className="flex gap-5">
    <div>
      <div className="font-bold">Mobile app</div>
      <div className="text-sm">Features</div>
      <div className="text-sm">Live share</div>
      <div className="text-sm">Video record</div>
    </div>
    <div>
      <div className="font-bold">community</div>
      <div className="text-sm">Featured artists</div>
      <div className="text-sm">The Portal</div>
      <div className="text-sm">Live events</div>
    </div>
    <div>
      <div className="font-bold">company</div>
      <div className="text-sm">About us</div>
      <div className="text-sm">Contact us</div>
    </div>
  </div>
  <div className="flex flex-col gap-2 ">
    <div><button className="bg-[#A5C61F] w-[9rem] text-[#ffffff] p-2 rounded">sign up</button></div>
    <div><button className="bg-[#ffffff] w-[9rem] border p-2 rounded">sign in</button></div>
  </div>
</div>
<div className="flex justify-center">
    <div className="flex flex-col gap-3 w-[80%]">
      <div><hr  className="text-[#A5C61F]"/></div>
      <div>© Access insurance brokers 2023. We love our users!</div>
    </div>
</div>
    </div>
  )
}

export default Footer