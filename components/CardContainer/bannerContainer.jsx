import Card from "../Cards/card";
import Button from "../Button/button";
import CardCarousel from "../Carousel/CardCarousel/cardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const BannerContainer = ({sectionStyle,bannerPosts}) => {

  return (
    <section className={sectionStyle}>
        <Card
            cardComponent={{
                path : bannerPosts[0].link,
                style : 'flex flex-col items-start justify-start gap-y-3 bg-white rounded-[16px] h-[340px] p-3 w-full lg:w-[554px] lg:h-[728px] lg:p-4 lg:gap-y-4 lg:rounded-[20px]',
                imgComponent : {
                    containerStyle : 'w-full flex items-center justify-center rounded-[12px] shadow-md h-[212px] lg:h-[398px] lg:rounded-[16px]',
                    style : 'w-1/2 aspect-auto object-cover',
                    content : bannerPosts[0]._embedded['wp:featuredmedia'][0].source_url
                },
                contentComponent : {
                    containerStyle : 'h-2/5 flex flex-col items-start justify-start gap-y-3',
                    categoryContainer : {
                        content : bannerPosts[0]._embedded['wp:term'][0],
                        categoryComponent : {
                            containerStyle : '"w-full flex items-center justify-start',
                            style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-1 text-sm lg:px-4 lg:py-2 lg:text-md'
                        }
                    },
                    titleComponent : {
                        containerStyle : 'w-full flex items-center justify-start',
                        style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-2xl lg:text-4xl',
                        content : bannerPosts[0].title.rendered
                    },
                    excerptComponent : {
                        containerStyle : 'w-3/4 items-center justify-start hidden lg:flex',
                        style : 'font-sans-serif text-base text-neutral-500/50',
                        content : bannerPosts[0].excerpt.rendered
                    },
                    dateComponent : {
                        containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                        style : 'font-sans-serif font-light text-xs',
                        content : bannerPosts[0].date
                    }
                }
            }}
            buttonComponent = {
                <Button
                type={'button'}
                style={`w-1/2 h-7 items-center justify-center group relative hidden lg:flex`}
                content={
                    <div className="w-full h-full flex items-center justify-center gap-x-4">
                      <p className="font-sans-serif text-base font-bold uppercase">explore</p>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        size='xl'
                        color="black"
                      />
                    </div>
                }
            />
            }
        />
        <CardCarousel
            carouselData={bannerPosts}
        />
    </section>
  )
}

export default BannerContainer