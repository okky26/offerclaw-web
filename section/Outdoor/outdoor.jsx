import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";

const Outdoor = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faCampground}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faCampground}
                size='2x'
                color="black"
              />
            }
            category={'Outdoors'}
            path='/Categories/Outdoors'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 pt-10 lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default Outdoor