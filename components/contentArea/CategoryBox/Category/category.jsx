
const Category = ({categoryComponent,content,index}) => {
  return (
    <div className={categoryComponent.containerStyle}>
      <h3 className={categoryComponent.style}>{content}</h3>
    </div>
  )
}

export default Category