

// eslint-disable-next-line react/prop-types
const DivForSecondPage = ({src,heading,comment}) => {
  return (
    <>
    <div className="w-full flex items-center mt-[31px] ">
        <img src={src} alt=""  className="h-[56px] w-[56px]"/>
        <div className="flex flex-col justify-start ml-[25px]">
            <h1 className="w-full h-[24px] text-[20px] leading-[24px] font-[500] text-[white]">{heading}</h1>
            <p className=" w-full h-[20px] 
            text-[rgba(146,135,164,1)]

            text-[16px] font-[400] leading-[20px] mt-[5px]">{comment}</p>

        </div>

    </div>
    </>

  )
}

export default DivForSecondPage