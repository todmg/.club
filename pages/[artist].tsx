import Link from "next/link";
import useSWR from "swr";
import fs from "fs"
import path from "path"
import SEO from "../components/SEO";

export async function getStaticProps({ params: { artist } }: { params: { artist: string }; }) {

    let Artist = require(`../public/data/artist/${artist}.json`);

    return {
        props: {
            artist: Artist
        },
    };
}

export async function getStaticPaths() {
    // console.log(fs.readdirSync(path.join(__dirname, "../../../public/data/artist")))
    let artists = fs.readdirSync(path.join(__dirname, "../../../public/data/artist"));
    let paths = artists.map(artist => ({ params: { artist: artist.replace('.json', '') } }))
    return { paths, fallback: false }

}

const Artist: React.FC<{ artist?: string }> = ({ artist }) => {

    // console.log(artist);



    return (
        <div className="content">
            {/* @ts-ignore */}
            <SEO isArtistPage={true} page={artist.title} Artist={artist} />
            <div className="artist">
                <div className="artist-info">
                    <div className="artist-info-image">
                        {/* @ts-ignore */}
                        <h1>{artist.title}</h1>
                        {/* @ts-ignore */}
                        <img style={{ width: "10%", height: "auto" }} src={artist.artwork} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artist;