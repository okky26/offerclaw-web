import CategoryBox from "./CategoryBox/categoryBox";
import Date from "./Date/date";
import Excerpt from "./Excerpt/excerpt";
import Title from "./Title/title";


const ContentArea = ({contentComponent,buttonComponent}) => {
  return (
    <div className={contentComponent.containerStyle}>
      <CategoryBox
        categoryContainer={contentComponent.categoryContainer}
      />
      <Title
        titleComponent={contentComponent.titleComponent}
      />
      <Excerpt
        excerptComponent={contentComponent.excerptComponent}
      />
      <>
        {buttonComponent}
      </>
      <Date
        dateComponent={contentComponent.dateComponent}
      />
    </div>
  )
}

export default ContentArea