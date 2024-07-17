import "./customcss.css"
const GetInTouchPage = () => {
  return (
   <>
   <div className="min-h-[100vh] w-full flex  bg-[rgba(231,228,245,1)]">
    <div className="flex-1 flex flex-col h-[100vh] justify-center items-start ml-[10%]">
        <h1 className="font-[700] text-[81.35px] leading-[95px] letusknowclass ">Let Us Know <br/>What You Think!</h1>
        <p className="font-[400] text-[20px] leading-[35px] mt-[10px] text-[rgba(89,75,113,1)] text-start ">Send us your comments, suggestions, questions or feedback. <br/>
        At Magpiie, we’re extremely good listeners!</p>

    </div>
    <div className="flex-1  flex justify-center items-center h-[100vh] ">
        <div className="w-[469px] h-[596px] bg-[rgba(255,255,255,1)] rounded-[15px]">
            <h1 className="font-[600] text-[32px] leading-[44px] text-center text-[rgba(89,75,113,1)] font-Poppins mt-[6vh]">Get in touch</h1>
            <div className="flex flex-col items-start w-[80%] mx-auto ">
                <input type="text" className="w-[389px] h-[42px] border-[1.5px]  border-[rgba(214,217,222,1)] font-[500] text-[16px] leading-[20.16px] px-[10px] rounded-[10px]  mt-[4vh]" placeholder="Just say hi" />
                <input type="text" className="w-[389px] h-[42px] border-[1.5px]  border-[rgba(214,217,222,1)] font-[400] text-[16px] leading-[20.16px] px-[10px] rounded-[10px] mt-[4vh]  text-[rgba(135,144,158,1)]" placeholder="Full name" />
                <input type="text" className="w-[389px] h-[42px] border-[1.5px]  border-[rgba(214,217,222,1)] font-[400] text-[16px] leading-[20.16px] px-[10px] rounded-[10px] mt-[4vh] font-Plus-Jakarta text-[rgba(135,144,158,1)]" placeholder="example@domain.com" />
                <textarea type="text" className="w-[389px] h-[120px] border-[1.5px]  border-[rgba(214,217,222,1)] font-[400] text-[16px] leading-[20.16px] px-[10px] py-[15px] rounded-[10px] mt-[4vh] text-base  outline-none resize-none font-Plus-Jakarta text-[rgba(135,144,158,1)]" placeholder="Your message" />
                <button className="w-[389px] h-[42px] rounded-[10px] bg-[rgba(127,106,160,1)] font-[600] text-[16px] leading-[20.16px] text-center text-[rgba(255,255,255,1)] mt-[4vh]">Send Message</button>
            </div>

        </div>


    </div>

   </div>

   
   </>
  )
}

export default GetInTouchPage