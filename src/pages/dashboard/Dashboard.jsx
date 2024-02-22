import Sidebar from "../../component/shared/leftSideBar/LeftSidebar"
import Right from "../../component/shared/right/Right"
import logo from "../../assets/images/logo.jpeg"
import bell from "../../assets/images/bell.png"
import customer from "../../assets/images/customer.png"
import indicator from "../../assets/images/indicator.png"
import portfolio from "../../assets/images/portfolio.png"



const Dashboard = () => {
  const today = new  Date()
  const  year = today.getFullYear()
  const  month = today.getMonth ()
  const  day = today.getDate()
  return (
    <>
    <div className="flex justify-between px-[2rem] items-center py-[1rem] bg-[#ffffff] border">
      <div><img src={logo} className="w-[7rem]" alt="logo" /></div>
      <div className="flex gap-2 items-center">
        <div><img src={bell} className="w-[1.3rem]" alt="bell" /></div>
        <div><img src={customer} className="w-[3rem]" alt="customer" /></div>
      </div>
    </div>
      <div className="flex justify-between h-screen items-center">
        <Sidebar />
        <div className="h-screen w-[69%] bg-[#f3f1ed] rounded-tl-lg pt-[1.5rem] pl-[1.5rem]">
         <div>
          <div className="text-[1.5rem] font-bold">Welcome, Coker Adewale</div>
          <div className="text-[0.7rem] mt-[-0.2rem] opacity-60 font-semibold">{`${day} - ${month +1} - ${year} `} </div>
         </div>

         <div className="flex gap-10 items-center mt-[0.8rem]">
         <div className="flex flex-col justify-around boder p-2 w-[8rem] h-[6rem] rounded-lg bg-[#cbd6df]">
                <div className="text-[1rem] text-[#eb7824] font-bold">Buy</div>
                <div className="font-bold">Insurance</div>
                <div className="flex justify-between items-center">
                    <div>
                        
                    </div> 
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
            <div className="flex flex-col justify-around boder p-2 w-[8rem] h-[6rem] rounded-lg bg-[#f1d9c5]">
                <div className="text-[1rem] text-[#eb7824] font-bold">Get</div>
                <div className="font-bold">Quote</div>
                <div className="flex justify-between items-center">
                    <div>
                        
                    </div> 
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
          <div className="w-[40rem] h-[6rem] rounded-lg text-[0.7rem] flex flex-col gap-3 p-3 font-bold bg-[#ffffff] drop-shadow-sm">
            <div>Want to insure your family through termplan?</div>
            <div>Support your families <br /> financials in your absence</div>
          </div>
         </div>

         <div className="rounded-lg mt-[1rem]">
          <img src={portfolio} className="w-[96%] h-[16rem]" alt="portfolio" />
         </div>


         <div className="flex flex-col gap-2 my-[2rem] w-[96%] border">
          <div className="flex justify-between bg-[#057a82] text-sm p-2 font-semibold text-white rounded items-center"> 
            <div>Underwriter</div>
            <div>policy </div>
            <div>policy-No</div>
            <div>Expiration </div>
            <div>Status</div>
            <div>Action</div>
          </div>
          <div className="flex justify-between bg-[#f8f7f5] text-sm p-2 font-semibold items-center"> 
            <div>Leadway insurance </div>
            <div>Motor  insurance </div>
            <div>P-292820</div>
            <div>2023-02-31</div>
            <div>Active</div>
            <div>View</div>
          </div>
          <div className="flex justify-between bg-[#ffffff] text-sm p-2 font-semibold items-center"> 
            <div>Leadway insurance</div>
            <div>Life insurance </div>
            <div>P-098766</div>
            <div>2023-02-31</div>
            <div>Active</div>
            <div>View</div>
          </div>
          <div className="flex justify-between bg-[#ffffff] text-sm p-2 font-semibold items-center"> 
            <div>Leadway insurance </div>
            <div>Life insurance</div>
            <div>P-876576</div>
            <div>2023-02-31</div>
            <div>Active</div>
            <div>View</div>
          </div>
          <div className="flex justify-between bg-[#ffffff] text-sm p-2 font-semibold items-center"> 
            <div>Leadway insurance </div>
            <div>Life insurance</div>
            <div>P-876576</div>
            <div>2023-02-31</div>
            <div>Active</div>
            <div>View</div>
          </div>
         </div>
        </div>
       <Right />
       
      </div>
    </>
  )
}

export default Dashboard