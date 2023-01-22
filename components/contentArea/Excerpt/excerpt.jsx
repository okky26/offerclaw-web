
const Excerpt = ({excerptComponent}) => {
  return (
    <div className={excerptComponent.containerStyle}>
      <h2 className={excerptComponent.style}>{excerptComponent.content}</h2>
    </div>
  )
}

export default Excerpt