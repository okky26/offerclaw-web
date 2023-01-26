import Banner from "@/section/Banner/banner";
import Tech from "@/section/Tech/tech";
import Health from "@/section/Health/health";
import HomeEss from "@/section/Home/home";
import Outdoor from "@/section/Outdoor/outdoor";
import Pets from "@/section/Pets/pets";
import Other from "@/section/Other/other";
import { getPostData } from "@/utils/getDataPost";

const Home = ({bannerData,techData,healthData,homeData,outdoorData,petsData,otherData}) => {
    const banner = bannerData

    
    return(
        <>
           <Banner
                data={banner}
           />
           <Tech
                data={techData}
            />
            <Health
                data={healthData}
            />
            <HomeEss
                data={homeData}
            />
            <Outdoor
                data={outdoorData}
            />
            <Pets
                data={petsData}
            />
            <Other
                data={otherData}
            />
        </>
    )
}

export const getStaticProps = async () => {
    const bannerData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed')
    const techData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed&categories=7')
    const healthData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed&categories=8')
    const homeData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed&categories=9')
    const outdoorData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed&categories=14')
    const petsData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed&categories=15')
    const otherData = await getPostData('https://offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,category,date&page=1&per_page=4&order_by=date&order=asc&_embed')
    

    return{
        props : {
            bannerData,
            techData,
            healthData,
            homeData,
            outdoorData,
            petsData,
            otherData
        }
    }

}

export default Home