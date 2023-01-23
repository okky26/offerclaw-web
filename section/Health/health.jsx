import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Health = ({data}) => {
    
  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 px-6 pt-6 lg:px-0">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faUser}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faUser}
                size='2x'
                color="black"
              />
            }
            category={'Health & Wellnes'}
            path='/Categories/Health'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 pt-10 lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default Health