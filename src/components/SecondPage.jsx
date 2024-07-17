
import DivForSecondPage from "../AdditionalComponents/DivForSecondPage"
import ImageForSecondPage from "../AdditionalComponents/ImageForSecondPage"
import "../assets/custom.css"
const SecondPage = () => {
  return (
    <>
    <div className="h-[100vh] w-full bgSecondPage flex   ">

      <div className="h-full flex flex-1  text-[white] flex-col items-center justify-center ">
                <div className="flex flex-col ">
                <h1 className="text-[80px] font-[600] leading-custom104px tracking-[-3px]">It starts <br/> with an idea</h1>
                <p className="w-[25vw] font-[400] text-[16px] leading-[29px] text-[rgba(191,175,218,1)] mt-[19px]">Magpiie introduces groundbreaking sequential step method making video creation and progress tracking a seamless and psychologically rewarding experience.</p>
                </div>

        <div className="customForSecondpageButtonAtfirstDiv mt-[69px]">
          <button
          className=" flex items-center buttonInthesecondDiv"
          > <img src="public/secondpage/1.svg" alt="" /></button>
          <ImageForSecondPage  src={"/public/secondpage/script-icon.svg"}/>
          <ImageForSecondPage  src={"public/secondpage/voiceover-icon.svg"}/>
          <ImageForSecondPage  src={"public/secondpage/video-shoot-icon.svg"}/>
          <ImageForSecondPage  src={"public/secondpage/video-edit-icon.svg"}/>
          <ImageForSecondPage  src={"public/secondpage/video-setup-icon.svg"}/>
       
         
        
        </div>

      </div>

      <div className="h-full flex-1 flex flex-col justify-start items-start">
        <div className="mt-[15px]">
          <p className="font-[500] text-[20px] leading-[24px] tracking-[5px]    text-[rgba(219,115,115,1)]
]
          ">SEQUENTIAL</p>
          <h1 className="CustomClassforh1inseconddiv">Progress tracking with sequential video subtasks</h1>
        </div>

        <DivForSecondPage src={"/public/secondpage/secondDiv/content-idea-icon.svg"} heading={"Content Ideation"} comment="Automate your development pipeline"/>
        <DivForSecondPage src={"/public/secondpage/secondDiv/script-icon.svg"} heading={"Content Scripting"} comment="From automated testing to deployment pipelines"/>
        <DivForSecondPage src={"/public/secondpage/secondDiv/voiceover-icon.svg"} heading={"Voiceover"} comment="Our platform streamlines the release process"/>

        <DivForSecondPage src={"/public/secondpage/secondDiv/video.svg"} heading={"Video Shoot"} comment="Organize and Prioritize Your Tasks"/>

        <DivForSecondPage src={"/public/secondpage/secondDiv/video-edit-icon.svg"} heading={"Video Editing"} comment="Enhance Team Collaboration"/>

        <DivForSecondPage src={"/public/secondpage/secondDiv/video-setup-icon.svg"} heading={"Video Setup"} comment="Enhance Team Collaboration"/>

        <button
        className="customforbuttonsecondpageseconddiv"
        onClick={()=>{
          window.open('https://www.magpiie.com', '_blank');
        }}
        > Join The Waitlist</button>

      </div>
        

    </div>
    </>
  )
}

export default SecondPage