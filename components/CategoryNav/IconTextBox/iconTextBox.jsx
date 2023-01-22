
const IconTextBox = ({iconMobile, iconDesktop, category}) => {
  return (
    <div className="w-1/2 flex items-center justify-start gap-x-2 lg:gap-x-12">
        <div className="h-full flex items-center justify-center p-1 bg-neomorphism rounded-[14px] shadow-lg lg:hidden">
            {iconMobile}
        </div>
        <div className="h-full hidden items-center justify-center p-1 bg-white rounded-[14px] shadow-xl lg:flex lg:p-4">
            {iconDesktop}
        </div>
        <h3 className="flex items-center justify-center font-gothic font-bold text-xl text-primary-text capitalize lg:text-5xl">{category}</h3>
    </div>
  )
}

export default IconTextBox