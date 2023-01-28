import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import TechIcon from 'public/BlackIcon/tech-black.svg';


const Tech = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 px-6 pt-6 lg:px-0">
        <CategoryNav
            icon={TechIcon}
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