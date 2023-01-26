import CategoryNav from "@/components/CategoryNav/categoryNav";
import BannerContainer from "@/components/CardContainer/bannerContainer";
import SectionContainer from "@/components/CardContainer/sectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Banner = ({data}) => {
  
  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-10 lg:mb-[45px]">
      <CategoryNav
        iconMobile={
          <FontAwesomeIcon
            icon={faFire}
            size='lg'
            color="black"
          />
        }
        iconDesktop={
          <FontAwesomeIcon
            icon={faFire}
            size='2x'
            color="black"
          />
        }
        category={'featured post'}
        path='/featuredPost'
      />
      <BannerContainer
        bannerPosts={data}
        sectionStyle={'w-full flex flex-col items-center justify-center gap-y-3 lg:gap-x-6 lg:flex-row lg:hidden'}
      />
      <SectionContainer 
            dataPosts={data}
            sectionStyle={'hidden w-full flex-col gap-y-3 lg:flex lg:flex-row lg:justify-center lg:h-[728px] lg:items-center lg:gap-x-10'} 
      />
    </article>
  )
}

export default Banner