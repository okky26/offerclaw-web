import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const Other = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faRandom}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faRandom}
                size='2x'
                color="black"
              />
            }
            category={'Other'}
            path='/Categories/Other'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 lg:flex-row lg:justify-center lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default Other