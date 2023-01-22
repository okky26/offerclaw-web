import Card from "@/components/Cards/card";
import Button from "@/components/Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Slider = (data) => {
  const post = data.postData

  console.log(post)

  return (
    <div className="w-full grid grid-flow-col auto-cols-max gap-4 overflow-scroll place-items-center lg:grid-cols-2 lg:grid-rows-2 lg:h-[728px] lg:gap-0 lg:gap-x-3 lg:place-items-stretch lg:overflow-hidden item">
      <Card
        cardComponent={{
            path : post[1].link,
            style : 'flex flex-col items-start justify-start gap-y-3 bg-white rounded-[16px] h-[318px] w-[215px] p-3 lg:w-[230px] lg:h-[451px] lg:p-4',
            imgComponent : {
                containerStyle : 'w-full flex items-center justify-center rounded-[12px] shadow-md h-[190px] lg:h-[230px]',
                style : 'w-1/2 aspect-auto object-cover',
                content : post[1]._embedded['wp:featuredmedia'][0].source_url
            },
            contentComponent : {
                containerStyle : 'h-2/5 flex flex-col items-start justify-start gap-y-2 lg:gap-y-3',
                categoryContainer : {
                    content : post[1]._embedded['wp:term'][0],
                    categoryComponent : {
                        containerStyle : '"w-full flex items-center justify-start',
                        style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-[0.5rem] text-xs lg:px-4 lg:py-1 lg:text-md'
                    }
                },
                titleComponent : {
                    containerStyle : 'w-full flex items-center justify-start',
                    style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                    content : post[1].title.rendered
                },
                excerptComponent : {
                    containerStyle : 'hidden',
                    style : '',
                    content : ''
                },
                dateComponent : {
                    containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                    style : 'font-sans-serif font-light text-xs',
                    content : post[1].date
                }
            }
        }}
      />  
      <Card
        cardComponent={{
            path : post[2].link,
            style : 'flex flex-col items-start justify-start gap-y-3 bg-white rounded-[16px] h-[318px] w-[215px] p-3 lg:w-[230px] lg:h-[451px] lg:p-4 lg:col-start-2 lg:row-start-1',
            imgComponent : {
                containerStyle : 'w-full flex items-center justify-center rounded-[12px] shadow-md h-[190px] lg:h-[230px]',
                style : 'w-1/2 aspect-auto object-cover',
                content : post[2]._embedded['wp:featuredmedia'][0].source_url
            },
            contentComponent : {
                containerStyle : 'h-2/5 flex flex-col items-start justify-start gap-y-2 lg:gap-y-3',
                categoryContainer : {
                    content : post[2]._embedded['wp:term'][0],
                    categoryComponent : {
                        containerStyle : '"w-full flex items-center justify-start',
                        style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-[0.5rem] text-xs lg:px-4 lg:py-1 lg:text-md'
                    }
                },
                titleComponent : {
                    containerStyle : 'w-full flex items-center justify-start',
                    style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                    content : post[2].title.rendered
                },
                excerptComponent : {
                    containerStyle : 'hidden',
                    style : '',
                    content : ''
                },
                dateComponent : {
                    containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                    style : 'font-sans-serif font-light text-xs',
                    content : post[2].date
                }
            }
        }}
      />  
      <Card
        cardComponent={{
            path : post[3].link,
            style : 'flex flex-col items-start justify-start gap-y-3 bg-white rounded-[16px] h-[318px] w-[215px] p-3 lg:w-[480px] lg:h-[255px] lg:p-4 lg:col-start-1 lg:row-start-2 lg:flex-row lg:mt-[110px] lg:gap-x-6',
            imgComponent : {
                containerStyle : 'w-full flex items-center justify-center rounded-[12px] shadow-md h-[190px] lg:h-[223px] lg:w-[223px]',
                style : 'w-1/2 aspect-auto object-cover',
                content : post[3]._embedded['wp:featuredmedia'][0].source_url
            },
            contentComponent : {
                containerStyle : 'h-2/5 flex flex-col items-start justify-start gap-y-2 lg:gap-y-3 lg:h-full lg:justify-between lg:items-stretch lg:w-1/2',
                categoryContainer : {
                    content : post[3]._embedded['wp:term'][0],
                    categoryComponent : {
                        containerStyle : '"w-full flex items-center justify-start',
                        style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-[0.5rem] text-xs lg:px-4 lg:py-1 lg:text-md'
                    }
                },
                titleComponent : {
                    containerStyle : 'w-full flex items-center justify-start',
                    style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                    content : post[3].title.rendered
                },
                excerptComponent : {
                    containerStyle : 'items-center justify-start hidden lg:flex',
                    style : 'font-sans-serif text-sm text-neutral-500/50',
                    content : post[3].excerpt.rendered
                },
                dateComponent : {
                    containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                    style : 'font-sans-serif font-light text-md',
                    content : post[3].date
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
    </div>
  )
}

export default Slider