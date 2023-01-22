import Category from "./Category/category"

const CategoryBox = ({categoryContainer}) => {
  
  return (
    <div className="w-full flex items-center justify-start gap-x-2">
      {categoryContainer.content.map((category) => 
        (
          <Category
            content={category.name}
            categoryComponent={categoryContainer.categoryComponent}
          />
        )
        )}
    </div>
  )
}

export default CategoryBox