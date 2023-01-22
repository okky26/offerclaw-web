import CategoryNav from "@/components/CategoryNav/categoryNav";
import BannerContainer from "@/components/CardContainer/bannerContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Banner = ({data}) => {
  
  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 px-6 pt-6 lg:px-0">
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
        sectionStyle={'w-full flex flex-col items-center justify-center gap-y-3 lg:flex-row lg:px-28 lg:pt-10'}
      />
    </article>
  )
}

export default Banner