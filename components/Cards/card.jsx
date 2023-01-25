import ImgComponent from "../ImgComponent/imgComponent"
import ContentArea from "../contentArea/contentArea"
import Link from "next/link"


const Card = ({cardComponent,buttonComponent,key}) => {

  return (
    <Link
        key={key}
        href={cardComponent.path}
        className={`${cardComponent.style}`}
    >
        <ImgComponent
          imgComponent={cardComponent.imgComponent}
        />
        <ContentArea
          contentComponent={cardComponent.contentComponent}
          buttonComponent={buttonComponent}
        />
    </Link>
  )
}

export default Card