import IconTextBox from "./IconTextBox/iconTextBox";
import ViewTextBox from "./ViewTextBox/viewTextBox";

const CategoryNav = ({icon, category, path}) => {
  return (
    <section className="w-full flex items-center justify-between border-b-2 pt-2 pb-3 border-blue-300/50 lg:bg-blue-300/50 lg:px-[150px] lg:py-8">
        <IconTextBox
            icon={icon}
            category={category} 
        />
        <ViewTextBox
            path={path}
        />
    </section>
  )
}

export default CategoryNav