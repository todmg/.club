import { Helmet } from "react-helmet";

type SEO = {
    isArtistPage: boolean
    page: string
    Artist?: any
}

const SEO = (props: SEO) => {
    let PageTitle = `${props.page} • THRIVE OR DIE`;
    let isArtistPage = props.isArtistPage;
    let SEOPIC = isArtistPage === true ? "https://todmg.club" + props.Artist.artwork : `https://todmg.club/assets/static/logo.png`;
    let Raw = () => {
        if (isArtistPage === true) {
            return `https://todmg.club/${props.Artist.tags[0]}`
        } else if (isArtistPage === false) {
            return `https://todmg.club/${props.page.toLowerCase()}`
        } else if (props.page === "Home") {
            return `https://todmg.club/`
        }
    }
    return (
        <Helmet>
            <title>{PageTitle}</title>

            <meta name="title" content={PageTitle} />
            <meta name="description" content="NO COMPROMISE." />
            <link rel="icon" href="/favicon.ico" />

            {/* OG */}
            <meta name="og:type" content="website" />
            {/* @ts-ignore */}
            <meta name="og:url" content={Raw()} />
            <meta name="og:title" content={PageTitle} />
            <meta name="og:description" content="NO COMPROMISE." />
            <meta name="og:image" content={SEOPIC} />

            {/* TWITTER */}
            <meta property="twitter:card" content="summary_large_image" />
            {/* @ts-ignore */}
            <meta property="twitter:url" content={Raw()} />
            <meta property="twitter:title" content={PageTitle} />
            <meta property="twitter:description" content="NO COMPROMISE." />
            <meta property="twitter:image" content={SEOPIC} />
        </Helmet>
    )
}

export default SEO