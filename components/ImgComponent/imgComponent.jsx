
const ImgComponent = ({imgComponent}) => {
  return (
    <div className={imgComponent.containerStyle}>
        <img src={imgComponent.content} alt="" className={imgComponent.style} />
    </div>
  )
}

export default ImgComponent