import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Date = ({dateComponent}) => {
  return (
    <div className={dateComponent.containerStyle}>
      <FontAwesomeIcon
        icon={faCalendar}
        size='sm'
        color="#787878"
      />
       <h3 className={dateComponent.style}>{dateComponent.content}</h3>
    </div>
  )
}

export default Date