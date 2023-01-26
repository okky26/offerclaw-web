import Card from "../Cards/card";
import Button from "../Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SectionContainer = ({sectionStyle, dataPosts}) => {
  return (
    <section className={`${sectionStyle} lg:px-[150px]`}>
        <Card
            cardComponent={{
                path : dataPosts[0].link,
                style : 'flex flex-row-reverse items-start justify-between gap-y-1 bg-white rounded-[16px] h-[120px] p-3 w-full lg:w-[554px] lg:h-[728px] lg:p-4 lg:gap-y-4 lg:rounded-[20px] lg:flex-col lg:col-start-1',
                imgComponent : {
                    containerStyle : 'w-[96px] flex items-center justify-center rounded-[12px] shadow-md h-[96px] lg:h-[398px] lg:rounded-[16px] lg:w-full',
                    style : 'w-[90px] h-[90px] aspect-auto object-contain lg:w-3/4 lg:h-3/4',
                    content : dataPosts[0]._embedded['wp:featuredmedia'][0].source_url
                },
                contentComponent : {
                    containerStyle : 'w-3/4 h-full flex flex-col items-start justify-start gap-y-3 pr-3 lg:w-full lg:h-2/5',
                    categoryContainer : {
                        content : dataPosts[0]._embedded['wp:term'][0],
                        categoryComponent : {
                            containerStyle : 'flex items-center justify-start',
                            style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-sm'
                        }
                    },
                    titleComponent : {
                        containerStyle : 'w-full flex items-center justify-start',
                        style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-4xl',
                        content : dataPosts[0].title.rendered
                    },
                    excerptComponent : {
                        containerStyle : 'w-3/4 items-center justify-start hidden lg:flex',
                        style : 'font-sans-serif text-base text-neutral-500/50',
                        content : dataPosts[0].excerpt.rendered
                    },
                    dateComponent : {
                        containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                        style : 'font-sans-serif font-light text-xs',
                        content : dataPosts[0].date
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
        <div className="flex flex-col gap-y-3 justify-start pb-3 items-start lg:grid lg:gap-x-10 lg:grid-cols-2 lg:grid-rows-2 lg:w-[554px] lg:h-[750px]">
            <Card
                cardComponent={{
                    path : dataPosts[1].link,
                    style : 'flex flex-row-reverse items-start justify-between gap-y-1 bg-white rounded-[16px] h-[120px] p-3 w-full lg:w-[262px] lg:h-[451px] lg:p-4 lg:flex-col',
                    imgComponent : {
                        containerStyle : 'w-[96px] flex items-center justify-center rounded-[12px] shadow-md h-[96px] lg:h-[230px] lg:w-full lg:rounded-[16px]',
                        style : 'w-[90px] h-[90px] aspect-auto object-contain lg:w-3/4 lg:h-3/4',
                        content : dataPosts[1]._embedded['wp:featuredmedia'][0].source_url
                    },
                    contentComponent : {
                        containerStyle : 'w-3/4 h-full flex flex-col items-start justify-start gap-y-3 pr-3 lg:w-full lg:h-2/5',
                        categoryContainer : {
                            content : dataPosts[1]._embedded['wp:term'][0],
                            categoryComponent : {
                                containerStyle : 'w-full flex items-center justify-start',
                                style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-1 text-xs lg:px-4 lg:py-2   lg:text-md'
                            }
                        },
                        titleComponent : {
                            containerStyle : 'w-full flex items-center justify-start',
                            style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                            content : dataPosts[1].title.rendered
                        },
                        excerptComponent : {
                            containerStyle : 'w-3/4 items-center justify-start hidden',
                            style : 'font-sans-serif text-base text-neutral-500/50',
                            content : dataPosts[1].excerpt.rendered
                        },
                        dateComponent : {
                            containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                            style : 'font-sans-serif font-light text-xs',
                            content : dataPosts[1].date
                        }
                    }
                }}
            />
            <Card
                cardComponent={{
                    path : dataPosts[2].link,
                    style : 'flex flex-row-reverse items-start justify-between gap-y-1 bg-white rounded-[16px] h-[120px] p-3 w-full lg:w-[262px] lg:h-[451px] lg:p-4 lg:flex-col',
                    imgComponent : {
                        containerStyle : 'w-[96px] flex items-center justify-center rounded-[12px] shadow-md h-[96px] lg:h-[230px] lg:w-full lg:rounded-[16px]',
                        style : 'w-[90px] h-[90px] aspect-auto object-contain lg:w-3/4 lg:h-3/4',
                        content : dataPosts[2]._embedded['wp:featuredmedia'][0].source_url
                    },
                    contentComponent : {
                        containerStyle : 'h-full w-3/4 flex flex-col items-start justify-start gap-y-3 pr-3 lg:w-full lg:h-2/5',
                        categoryContainer : {
                            content : dataPosts[2]._embedded['wp:term'][0],
                            categoryComponent : {
                                containerStyle : '"w-full flex items-center justify-start',
                                style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-md'
                            }
                        },
                        titleComponent : {
                            containerStyle : 'w-full flex items-center justify-start',
                            style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                            content : dataPosts[2].title.rendered
                        },
                        excerptComponent : {
                            containerStyle : 'w-3/4 items-center justify-start hidden',
                            style : 'font-sans-serif text-base text-neutral-500/50',
                            content : dataPosts[2].excerpt.rendered
                        },
                        dateComponent : {
                            containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                            style : 'font-sans-serif font-light text-xs',
                            content : dataPosts[2].date
                        }
                    }
                }}
            />
            <Card
                cardComponent={{
                    path : dataPosts[3].link,
                    style : 'flex flex-row-reverse items-start justify-between gap-y-1 bg-white rounded-[16px] h-[120px] p-3 w-full lg:w-[543px] lg:h-[255px] lg:p-4 lg:col-start-1 lg:row-start-2 lg:flex-row lg:mt-[95px] lg:gap-x-6',
                    imgComponent : {
                        containerStyle : 'w-[96px] flex items-center justify-center rounded-[12px] shadow-md h-[96px] lg:h-[223px] lg:w-[223px]',
                        style : 'w-[90px] h-[90px] aspect-auto object-contain lg:w-3/4 lg:h-3/4',
                        content : dataPosts[3]._embedded['wp:featuredmedia'][0].source_url
                    },
                    contentComponent : {
                        containerStyle : 'h-full w-3/4 flex flex-col items-start justify-start gap-y-3 pr-3 lg:gap-y-3 lg:h-full lg:justify-between lg:items-stretch lg:w-1/2 lg:pr-0',
                        categoryContainer : {
                            content : dataPosts[3]._embedded['wp:term'][0],
                            categoryComponent : {
                                containerStyle : '"w-full flex items-center justify-start',
                                style : 'bg-primary-cat font-sans-serif text-neutral-700 rounded-[6px] capitalize shadow-md px-3 py-1 text-xs lg:px-4 lg:py-1 lg:text-md'
                            }
                        },
                        titleComponent : {
                            containerStyle : 'w-full flex items-center justify-start',
                            style : 'w-fit font-sans-serif font-bold capitalize text-neutral-800 text-sm lg:text-lg',
                            content : dataPosts[3].title.rendered
                        },
                        excerptComponent : {
                            containerStyle : 'w-3/4 items-center justify-start hidden lg:flex',
                            style : 'font-sans-serif text-xs text-neutral-500/50',
                            content : dataPosts[3].excerpt.rendered
                        },
                        dateComponent : {
                            containerStyle : 'w-full flex items-center justify-start gap-x-2 mt-auto',
                            style : 'font-sans-serif font-light text-xs',
                            content : dataPosts[3].date
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
    </section>
  )
}

export default SectionContainer