
const Category = ({categoryComponent,content}) => {
  return (
    <div key={Math.random()} className={categoryComponent.containerStyle}>
      <h3 className={categoryComponent.style}>{content}</h3>
    </div>
  )
}

export default Category