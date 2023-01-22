import Slider from "../Slider/slider";

const Viewport = ({sliderData}) => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center lg:w-[555px] lg:justify-stretch">
        <Slider
            postData = {sliderData}
        />
    </div>
  )
}

export default Viewport