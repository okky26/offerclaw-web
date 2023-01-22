import Banner from "@/section/Banner/banner"
import { getPostData } from "@/utils/getDataPost"

const Home = ({bannerData}) => {
    const banner = bannerData
    return(
        <>
           <Banner
                data={banner}
           />
           <article className="h-screen"></article>
        </>
    )
}

export const getStaticProps = async () => {
    const bannerData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed')

    return{
        props : {
            bannerData
        }
    }

}

export default Home