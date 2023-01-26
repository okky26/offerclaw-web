import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeEss = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 px-6 pt-6 lg:px-0 lg:gap-y-10">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faHouse}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faHouse}
                size='2x'
                color="black"
              />
            }
            category={'Home essentials + decor'}
            path='/Categories/Home'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 pt-10 lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default HomeEss