import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const Pets = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 px-6 pt-6 lg:px-0">
        <CategoryNav
            iconMobile={
              <FontAwesomeIcon
                icon={faDog}
                size='lg'
                color="black"
              />
            }
            iconDesktop={
              <FontAwesomeIcon
                icon={faDog}
                size='2x'
                color="black"
              />
            }
            category={'Pets'}
            path='/Categories/Pets'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'flex flex-col gap-y-3 pt-10 lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-6'} 
        />
    </article>
  )
}

export default Pets