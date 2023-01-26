import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Tech = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faHeadphones}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faHeadphones}
                size='2x'
                color="black"
              />
            }
            category={'Tech'}
            path='/Categories/Tech'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 pt-10 lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default Tech