import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import HealthIcon from "public/BlackIcon/personal-black.svg";

const Health = ({data}) => {
    
  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4  lg:gap-y-10">
        <CategoryNav
            icon={HealthIcon}
            category={'Health & Wellnes'}
            path='/Categories/Health'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'w-full flex-col gap-y-3 lg:flex lg:flex-row lg:justify-center lg:items-center'} 
        />
    </article>
  )
}

export default Health