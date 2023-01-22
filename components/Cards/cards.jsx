import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Cards = ({containerStyle,imgContainer,src,srcSet,category,title,date,path,key,titleStyle,categoryStyle,excerptStyle,excerpt,button}) => {
  return (
    <Link
      key={key} 
      href={path}
      className={`flex flex-col items-start justify-start gap-y-3 bg-white rounded-[16px] ${containerStyle} lg:rounded-[20px]`
    }>
      <div className={`w-full flex items-center justify-center rounded-[12px] shadow-md ${imgContainer} lg:rounded-[16px]`}>
        <img 
          src={src} 
          alt='post image' 
          srcSet={srcSet}
          className='w-1/2 aspect-auto object-cover'
        />
      </div>
      <div className="h-2/5 flex flex-col items-start justify-start gap-y-3">
        <div className="w-full flex items-center justify-start">
          <h3 className={`bg-primary-cat font-sans-serif text-neutral-700 ${categoryStyle} rounded-[6px] capitalize shadow-md`}>{category}</h3>
        </div>
        <div className="w-full flex items-center justify-start">
          <h1 className={`w-fit font-sans-serif font-bold capitalize text-neutral-800 ${titleStyle}`}>{title}</h1>
        </div>
        <div className="w-3/4 items-center justify-start hidden lg:flex">
          <h2 className={`font-sans-serif text-base text-neutral-500/50 ${excerptStyle}`}>{excerpt}</h2>
        </div>
        <>
          {button}
        </>
        <div className="w-full flex items-center justify-start gap-x-2 mt-auto">
          <FontAwesomeIcon
            icon={faCalendar}
            size='sm'
            color="#787878"
          />
          <h3 className="font-sans-serif font-light text-xs">{date}</h3>
        </div>
      </div> 
    </Link>
  )
}

export default Cards