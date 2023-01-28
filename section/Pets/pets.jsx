import CategoryNav from "@/components/CategoryNav/categoryNav"
import SectionContainer from "@/components/CardContainer/sectionContainer";
import PetsIcon from 'public/BlackIcon/pets-black.svg';


const Pets = ({data}) => {

  return (
    <article className="w-full flex flex-col items-center justify-center gap-y-4 lg:gap-y-10">
        <CategoryNav
            icon={PetsIcon}
            category={'Pets'}
            path='/Categories/Pets'
        />
        <SectionContainer 
            dataPosts={data}
            sectionStyle={'w-full flex-col gap-y-3 lg:flex lg:flex-row lg:justify-center lg:items-center'} 
        />
    </article>
  )
}

export default Pets