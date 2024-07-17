import { useNavigate } from "react-router-dom"
import SecondPage from "./aboutUsComponents/AboutUsSecondPage"
import GetInTouchPage from "./aboutUsComponents/GetInTouchPage"

import TeamMembers from "./aboutUsComponents/TeamMembers"
import Footer from "./Footer"

const AboutUsPage = () => {
    const nav=useNavigate();

    return (
  <>
            <div className="gradient_bg  ">

                <div className="  w-full h-[100vh] pt-[24px] ">
                    <nav className="w-[95vw] h-[66px]   mx-[auto]">
                        <div className="w-full h-full my-0 mx-[auto] rounded-custom32px   py-0 px-[30px]  flex justify-between items-center
  bg_customcss_nav
  ">

                            <div className="h-full flex items-center">
                                <img src="public/magpiie logo.svg" className="w-[149px] h-[37px] cursor-pointer" alt="not available" onClick={()=>{
            nav("/");
            
          }}/>
                                {/* <p>MAGPIIE</p> */}
                            </div>
                            <div className="w-[45%]">
                                <ul className="flex w-[76%] justify-around">
                                <li className="cursor-pointer"
                                onClick={()=>{
                                    nav("/");
                                    
                                  }}
          
          >Features</li>
          <li className="cursor-pointer">Solutions</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer"
          
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
                        <h1>Helping Businesses &</h1>
                        <h1>Individuals</h1>

                    </div>
                    <div className=" font-sans mt-[70px] w-[1248px]  mx-auto text-center leading-custom40px text-[24px] tracking-custom1.6 colorCustomFirstPage font-[500]">
                        <p>At Magpie's, we revolutionize how teams create and manage visual content. Our platform enhances <br /> collaboration and productivity, from ideation to execution.</p>

                    </div>


                </div>

                <div className="w-full flex justify-center items-center py-[10vh]">
                    <img className="w-[390px] h-[260px]" src="public/secondpage/aboutus/image-removebg-preview (24) 1.svg" alt="" />
                     
                </div>
                </div>


               <SecondPage/>
               <TeamMembers/>
               <GetInTouchPage/>
               <Footer/>
              

            </>
            )
}

            export default AboutUsPage