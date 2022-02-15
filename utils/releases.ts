import { readdirSync as read, readFileSync as readFile } from "fs"
import path from "path"

export default async function releases() {
    const releases = await read(path.join(__dirname, "../../", "public/data/releases"))
    // console.log(releases)
    return releases.map(release => {
        const releaseName = release.split("-").at(-1)?.replace(".json", "")
        // 
        const releaseData = readFile(path.join(__dirname, "../../", `public/data/releases/${release}`), "utf8")
        return {
            name: releaseName,
            data: JSON.parse(releaseData)
        }
    }).sort((a, b) => {
        return a.data.date > b.data.date ? -1 : 1
    })
}