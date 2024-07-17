
import "../../assets/custom.css"
const SecondPage = () => {
    return (
        <>
            <div className="h-[100vh] w-full bgSecondPage flex   ">

                <div className="h-full flex flex-1  text-[white] flex-col items-center justify-center ">
                    <div className="flex flex-col ">
                        <h1 className="text-[80px] font-[600] leading-custom104px tracking-[-3px]">About US</h1>
                        <p className="w-[25vw] font-[400] text-[16px] leading-[29px] text-[rgba(191,175,218,1)] mt-[19px]">Metapher Media Labs is an innovative media tech  startup aiming to revolutionize the way content is created, consumed, and distributed.  </p>
                    </div>



                </div>

                <div className="h-full flex-1 flex flex-col justify-start items-start">
                    <div className="mt-[102px]">
                        <p className="font-[500] text-[20px] leading-[24px] tracking-[5px]    text-[rgba(219,115,115,1)]
]
          ">THIS IS WHO WE ARE</p>
                        <h1 className="CustomClassforh1inseconddiv w-[70%] mt-[3vh]">We are committed to helping our global customers succeed</h1>
                    </div>


                    <div className="text-white mt-[10vh]">
                        <h1 className="font-[500] text-[20px] leading-[24px] ">Our Mission</h1>
                        <p className="font-[400] text-[16px] leading-[24px] text-[rgba(191,175,218,1)] mt-[3vh] w-[33vw]">Our mission is to redefine the industry landscape, enabling creators to achieve unprecedented success and reach new heights in their creative endeavors. We aim to revolutionize the way content is produced and consumed, fostering an environment where innovation thrives and creators can flourish like never before.</p>
                    </div>
                    <div className="text-white mt-[10vh]">
                        <h1 className="font-[500] text-[20px] leading-[24px] ">Our Presence</h1>
                        <p className="font-[400] text-[16px] leading-[24px] text-[rgba(191,175,218,1)] mt-[3vh] w-[33vw]">With employees located in our headquarters in 2 countries, our support teams are available 24/7, worldwide. Our global presence enables us to provide peerless support and availability, assisting customers all over the world.</p>
                    </div>



                </div>


            </div>
        </>
    )
}

export default SecondPage