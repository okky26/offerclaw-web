import Image from "next/image"


const IconTextBox = ({icon, category}) => {
  return (
    <div className="w-3/4 flex items-center justify-start gap-x-2 lg:gap-x-12">
        <div className="h-full flex items-center justify-center p-1 bg-neomorphism rounded-[14px] shadow-lg lg:hidden">
            <Image
              width={16}
              height={16}
              src={icon.src}
              alt={'Icon'}
            />
        </div>
        <div className="h-full hidden items-center justify-center p-1 bg-white rounded-[14px] shadow-xl lg:flex lg:p-4">
          <Image
            width={32}
            height={32}
            src={icon.src}
            alt={'Icon'}
          />
        </div>
        <h3 className="flex items-center justify-center font-gothic font-bold text-xl text-primary-text capitalize lg:text-5xl">{category}</h3>
    </div>
  )
}

export default IconTextBox