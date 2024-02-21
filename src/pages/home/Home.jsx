import Container from "../../component/shared/container/Container"
// import { Carousel } from "@material-tailwind/react";
import slide1 from "../../assets/images/slide1.png"
import mutual from "../../assets/images/mutual.png"
import leadway from "../../assets/images/leadway.png"
import aiico from "../../assets/images/aiico.png"
import nemlogo from "../../assets/images/nemlogo.png"
import conerstone  from "../../assets/images/conerstone.png"
import family from "../../assets/images/family.png"
import android from "../../assets/images/android.png"
import gooplay from "../../assets/images/googleplay.png"
import apple from "../../assets/images/apple.png"
import madam from "../../assets/images/madam.png"
import logo from "../../assets/images/logo.jpeg"

// import { Carousel } from '@coreui/react';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';



import '@coreui/coreui/dist/css/coreui.min.css'




const Home = () => {
  return (
    <Container>

<CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slide1} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slide1} alt="slide 2" />
    <CCarouselCaption className="">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slide1} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>

<div className="flex justify-between bg-[#f7f6f3] p-2 items-center">
  <div><img src={mutual} alt="mutial" /></div>
  <div><img src={leadway} alt="leadway" /></div>
  <div><img src={aiico} alt="aiico" /></div>
  <div><img src={nemlogo} alt="nemlogo" /></div>
  <div><img src={conerstone} alt="conerstone" /></div>
</div>

<div className="flex justify-center gap-3 my-[2rem] items-center">
  <div><img src={family} className="w-[25rem]" alt="family2" /></div>
  <div className="flex flex-col gap-3">
    <div className="text-[#EB7824] text-[0.9rem] font-semibold">Secure your future </div>
    <div className="w-[19rem] font-bold text-[2rem]">it’s more affordable than you think</div>
    <div className="w-[24rem]">Protecting your loved ones with life insurance doesn't have to be difficult or expensive thanks to Access Insurance Brokers.</div>
    <div><button className="rounded p-1 bg-[#ffffff] w-[8rem] border-2 border-[#EB7824] text-[#EB7824]">Get quote</button></div>
  </div>
</div>

<div className="bg-[#057A82] flex justify-center p-10">
  <div>
  <div className="text-[#ffffff] text-[1rem] text-center leading-normal font-bold">How it works</div>
  <div>
    <div className="text-[#ffffff] text-[2.5rem] font-bold">Your in safe Hands </div>
    <div className="text-[#ffffff] w-[24rem] text-[0.7rem] font-bold">We have a partnership with a reliable insurance company, one of the biggest and most reputable in the world. this implies</div>
  </div>
  <div className="flex gap-3">
    <div className="rounded-lg w-[14rem] bg-white flex flex-col justify-center gap-2">
      <div className="text-[#eb7824] text-[4rem] font-bold">1</div>
      <div className="text-[1rem]">Get quote </div>
      <div className="w-[11rem] text-sm">Choose the amount you would want cover, and we'll provide you with a quote.</div>
    </div>
    <div className="rounded-lg w-[14rem] bg-white flex flex-col justify-center gap-2">
      <div className="text-[#eb7824] text-[4rem] absolute font-bold">2</div>
      <div className="text-[1rem]">Apply </div>
      <div className="w-[11rem] text-sm">Respond to each question to determine your ultimate cost.</div>
    </div>
    <div className="rounded-lg w-[14rem] bg-white flex flex-col justify-center text-center">
      <div>
      <div className="text-[#eb7824] text-[4rem] font-bold ">3</div>
      <div className="text-[1rem]">your Policy</div>
      <div className="w-[11rem] text-sm text-center">Congratulations for protecting the financial future of your loved one.</div>
      </div>
    </div> 
  </div>
  </div>
</div>



<div className="flex justify-center bg-[#f3f1ed] py-[2rem]">
  <div className="flex flex-col gap-5">
    <div>
      <div className="text-[2.2rem] font-bold">Insurance plans </div>
      <div className="w-[34rem] text-[0.8rem] font-semibold">We would be pleased to assist you if you require insurance guidance or help planning for retirement with a life. Learn more about our business insurance policies, which are intended to protect company(s), employees, and owners from damages resulting from situations that might arise during routine business operations.</div>
    </div>
    <div className="flex gap-3 text-[#ec7e2e] font-semibold">
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">Motor insurance </div></div>
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">Fire/ <br /> burglary insurance </div></div>
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">MArine/ <br /> aviation insurance</div> </div>
    </div>
    <div className="flex gap-3 text-[#ec7e2e] font-semibold">
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">Motor insurance </div></div>
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">Fire/ <br /> burglary insurance </div></div>
      <div className="rounded-lg w-[15rem] bg-white drop-shadow-sm"><div className="w-[7rem] p-10">MArine/ <br /> aviation insurance</div> </div>
    </div>
  </div>
</div>




<div className="flex justify-center bg-[#ffffff] py-[2rem] items-center">
  <div className="flex gap-5">
    <div>
     <img src={android} className="w-[15rem]" alt="android" />
    </div>
    <div className="flex flex-col gap-3">
      <div className="font-bold text-[2.2rem] w-[32rem]">Get the Access insurance broker’s Mobile App</div>
      <div className="w-[20rem]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conseq</div>
      <div className="flex gap-4">
        <div><img className="w-[9rem]" src={gooplay} alt="googleplay" /></div>
        <div><img className="w-[9rem]" src={apple} alt="apple" /></div>
      </div>
    </div>
  </div>
</div>


<div className="flex justify-center bg-[#ffffff] py-[2rem] items-center">
  <div className="bg-[#A5C61F] w-[40rem] p-10 rounded-lg text-[#ffffff]">
    <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </div>
    <div className="text-center">do eiusmod tempor incididunt ut labore</div>
    <div><img src={madam} className="mx-auto " alt="madam" /></div>
    <div className="text-center">Coker Oluwafemi</div>
  </div>
</div>
</Container>
    
  )
}

export default Home