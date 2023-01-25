const Title = ({titleComponent}) => {
  return (
    <div className={`${titleComponent.containerStyle}`}>
      <h1 className={`${titleComponent.style}`}>{titleComponent.content}</h1>
    </div>
  )
}

export default Title