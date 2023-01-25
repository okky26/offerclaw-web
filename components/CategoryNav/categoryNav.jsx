import IconTextBox from "./IconTextBox/iconTextBox";
import ViewTextBox from "./ViewTextBox/viewTextBox";


const CategoryNav = ({iconMobile, iconDesktop, category, path}) => {
  return (
    <section className="w-full flex items-center justify-between border-b-2 pt-2 pb-3 mt-3 border-blue-300/50 lg:bg-blue-300/50 lg:px-32 lg:pt-4">
        <IconTextBox
            iconMobile={iconMobile}
            iconDesktop={iconDesktop}
            category={category}
        />
        <ViewTextBox
            path={path}
        />
    </section>
  )
}

export default CategoryNav