

const Footer = () => {
  return (
   <>
   <div className="min-h-[405px] width-full flex flex-col items-center">
    <div className="flex w-full  h-[45vh]">
        <div className="flex-1 flex flex-col justify-center items-start pl-[114px]  gap-[5vh] ">
            <div>
                <img src="public/secondpage/footer/magpiie logo.svg" alt="" />
 
            </div>
            <div className="flex  justify-center items-center gap-[3vw] font-Poppins  ">
                <div className="flex flex-col">
                    <p className="font-[400] text-[14px] leading-[21px]">Email</p>
                    <p className="font-[400] text-[16px] leading-[24px]">support@metapher.io</p>
                </div>

                <div className="flex flex-col">
                    <p className="font-[400] text-[14px] leading-[21px]">Phone Number</p>
                    <p className="font-[400] text-[16px] leading-[24px]">+91 7600327545</p>
                </div>
            </div>

        </div>
        <div className="flex-1 h-full flex mt-[5vh] pl-[150px] ">
            <div className="flex-1 flex flex-col items-start justify-around h-[31vh] font-Poppins">
                <h1 className="font-[800] text-[14px] leading-[21px] ">Company</h1>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Features</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Solutions</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Pricing</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">About Us</p>

            </div>
            <div className="flex-1 flex flex-col items-start justify-around h-[31vh] font-Poppins">
            <h1 className="font-[800] text-[14px] leading-[21px] ">Legal</h1>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Terms Of Service</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Privacy Policy</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Cookies Policy</p>
                <p className="font-[400] text-[16px] leading-[24px] text-[rgba(4,5,5,0.8)]">Data Processing</p>

            </div>


        </div>
        <div className="flex-1 h-full flex flex-col items-start pl-[7vw] ">
            <h1 className="text-[24px] font-[600] leading-[36px] mt-[5vh] font-Poppins">Get started with the<br/> ultimate content <br/>management tool.</h1>
            <button 
               onClick={()=>{
                window.open('https://www.magpiie.com', '_blank');
              }}
            className="w-[320px] mt-[5vh] h-[48px] rounded-[8px] bg-[black] text-white">Join the Waitlist</button>

        </div>

    </div>

    <div className="w-[87%] h-[0.5px] bg-black"></div>
    <div className="w-full flex justify-between px-[6vw] mt-[3vh] items-center"  >
        <p className="text-[14px] leading-[21px] font-[400]">© 2024 Metapher.io  | All rights reserved.</p>
        <div className="flex ">
            <img src="public/secondpage/footer/Instagram.svg" className="ml-[10px]" alt="" />
            <img src="public/secondpage/footer/Facebook.svg" alt="" className="ml-[10px]"/>
            <img src="public/secondpage/footer/Twitter.svg" alt="" className="ml-[10px]"/>
            
        </div>
    </div>

   </div>
   </>
  )
}

export default Footer