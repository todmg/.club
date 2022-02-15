import SEO from '../components/SEO'
import HeaderMenu from '../components/HeaderMenu'
// @ts-ignore
const HomeLayout = ({ children, HomeData }) => {
    let Featured = HomeData.at(0)
    // console.log("HomeData", HomeData)
    return (
        <div className="master-container">
            <SEO isArtistPage={false} page="Home" />
            <HeaderMenu />
            <div>
                {/* HERO */}
            </div>
            {children}
            {/* FOOTER */}
        </div>
    )
}

export default HomeLayout