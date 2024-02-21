import indicator from "../../../assets/images/indicator.png"



const Right = ()=>{

    return(
<>
<div>
<div className="bg-[#faf8f4]   w-[15rem] h-screen flex flex-col gap-5 p-2 items-center">
            <div className="flex flex-col gap-2 p-2 w-[11rem]">
                <div className="font-bold">Quick actions !</div>
                <div className="text-[0.8rem] font-semibold opacity-60">You can get a cover up and running in 3minutes, click on the product below to get started</div>
            </div>
            <div className="flex flex-col justify-around boder p-2 w-[11rem] h-[7rem] rounded-lg bg-[#cbd6df]">
                <div className="text-[0.7rem] font-bold">Motor Third Party Insurance </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-[0.6rem] opacity-50">Coverage</div>
                        <div className="text-[0.7rem] font-semibold">N5,000.00</div>
                    </div>
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
            <div className="flex flex-col justify-around boder p-2 w-[11rem] h-[7rem] rounded-lg bg-[#cbd6df]">
                <div className="text-[0.7rem] font-bold">Life Insurance </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-[0.6rem] opacity-50">Coverage</div>
                    </div>
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
            <div className="flex flex-col justify-around boder p-2 w-[11rem] h-[7rem] rounded-lg bg-[#cbd6df]">
                <div className="text-[0.7rem] font-bold">Health  Insurance  </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-[0.6rem] opacity-50">Coverage</div>
                        <div className="text-[0.7rem] font-semibold">N5,000.00</div>
                    </div> 
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
            <div className="flex flex-col justify-around boder p-2 w-[11rem] h-[7rem] rounded-lg bg-[#cbd6df]">
                <div className="text-[0.7rem] font-bold">Travels  Insurance</div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-[0.6rem] opacity-50">Coverage</div>
                        <div className="text-[0.7rem] font-semibold">N5,000.00</div>
                    </div> 
                    <div><img className="w-[1.5rem]" src={indicator} alt="indicator" /></div>
                </div>
            </div>
        </div>
</div>
</>
    )
}
export default Right