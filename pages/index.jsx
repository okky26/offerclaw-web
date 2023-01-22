import Banner from "@/section/Banner/banner"
import { getPostData } from "@/utils/getDataPost"

const Home = ({posts, bannerData}) => {
    const data = posts
    const banner = bannerData
    return(
        <>
           <Banner
                posts={data}
                data={banner}
           />
           <article className="h-screen"></article>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed')
    
    const posts = await res.json()
    const bannerData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed')

    return{
        props : {
            posts,
            bannerData
        }
    }

}

export default Home