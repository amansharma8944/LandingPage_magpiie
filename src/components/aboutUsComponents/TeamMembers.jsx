
import "./customcss.css"
import ImageForTeamMembers from "./ImageForTeamMembers"
const TeamMembers = () => {
  return (
    <>
    <div className="min-h-[100vh] w-full flex flex-col justify-start items-center bg-[rgba(17,10,28,1)] " >
        <p  className="font-[500] text-[20px] leading-[24px] text-center tracking-[0.3em] text-[rgba(219,115,115,1)] mt-[20vh]">MEET THE TEAM</p>
        <div className="min-h-[100vh] flex flex-col items-center justify-start">
        <h1 className="font-[700] text-[56px] leading-[72px] text-center w-[949px] bglineargradient mt-[10vh]">Professionals who are passionate
        about what they do</h1>


           <div className="flex gap-[50px] mt-[10vh] py-[5vh]">
            <ImageForTeamMembers/>
            <ImageForTeamMembers/>
            <ImageForTeamMembers/>

           </div>

        </div>
    </div>


    </>
  )
}

export default TeamMembers