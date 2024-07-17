
import "../src/assets/custom.css"
import SecondPage from "./components/SecondPage.jsx"
import ThirdPageProductivity from "./components/ThirdPageProductivity.jsx"
import FourthPageLookingFor from "./components/FourthPageLookingFor.jsx"
import FifthPageFeatures from "./components/FifthPageFeatures.jsx"
import SixthPagePlan from "./components/SixthPagePlan.jsx"
import ImageDashboard from "./components/ImageDashboard.jsx"
import Footer from "./components/Footer.jsx"
import { Navigate, useNavigate } from "react-router-dom"

const LandingPageFirstPage = () => {
  const nav=useNavigate();
  return (
   <>
   <>
   <div className="gradient_bg ">

<div className="  w-full h-[100vh] pt-[24px]">
  <nav className="w-[95vw] h-[66px]   mx-[auto]">
    <div className="w-full h-full my-0 mx-[auto] rounded-custom32px   py-0 px-[30px]  flex justify-between items-center
  bg_customcss_nav
  ">

      <div className="h-full flex items-center">
        <img src="public/magpiie logo.svg" className="w-[149px] h-[37px] cursor-pointer" alt="not available"  onClick={()=>{
            nav("/");
            
          }}/>
        {/* <p>MAGPIIE</p> */}
      </div>
      <div className="w-[45%]">
        <ul className="flex w-[76%] justify-around">
          <li className="cursor-pointer"
          
          >Features</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer"
          onClick={()=>{
            nav("/AboutUs");
            
          }}
          >About Us</li>
        </ul>

      </div>
      <div>
      <button 
      onClick={()=>{
        window.open('https://www.magpiie.com', '_blank');
      }}
      className="w-[180px] font-Inter font-[400] text-[16px] leading-[24px] tracking-[2px]   h-[52px] rounded-[8px] bg-[rgba(17,10,28,1)] text-white ">
                                    JOIN WAITLIST
                                </button>
      </div>


    </div>


  </nav>

  <div className="font-sans w-[80vw] mt-[247px] mx-auto  text-center  text-[96px] leading-custom104px tracking-custom1.6 font-[500] colorCustomFirstPage ">
    <h1>Collaborate for</h1>
    <h1>Content Excellence</h1>

  </div>
  <div className=" font-sans mt-[70px] w-[1248px]  mx-auto text-center leading-custom40px text-[24px] tracking-custom1.6 colorCustomFirstPage font-[500]">
    <p>Empower teams for seamless collaboration and heightened productivity. Our innovative <br /> features simplify task management, streamline workflows, and foster effective communication.</p>

  </div>


</div>
<ImageDashboard/>

</div>

<SecondPage/>
<ThirdPageProductivity/>
<FourthPageLookingFor/>
<FifthPageFeatures/>
{/* <SixthPagePlan/> */}
<Footer/>
   </></>
  )
}

export default LandingPageFirstPage