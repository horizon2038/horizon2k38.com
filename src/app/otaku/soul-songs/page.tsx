import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "The iDOLM@STER: Soul Songs | kernel of horizon2k38",
    description: "The iDOLM@STER: Soul Songs",
};

type ImasBrand = "AS" | "シンデレラガールズ" | "ミリオンライブ!" | "シャイニーカラーズ" | "SideM" | "学園" | "その他";

function SongItem({title, link}: {title: string; link: string | undefined}) {
    return (
        <li className="neu-surface flex flex-col gap-2 rounded-md p-4">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className
                    ="text-text-link underline">
                    {title}
                </a>
            ) : (
                <span>{title}</span>
            )}
        </li>
    );
}

// Type, SongItem[]を配置, neu-surfaceでブランドごとに区切る, 表示順はAS > シンデレラガールズ > ミリオンライブ! > シャイニーカラーズ > SideM > 学園 > その他
function SongsList({songs}: {songs: {title: string; link: string | undefined; brand: ImasBrand}[]}) {
    const brandOrder: ImasBrand[] = ["AS", "シンデレラガールズ", "ミリオンライブ!", "SideM", "シャイニーカラーズ", "学園", "その他"];
    return (
        <div className="flex flex-col gap-5">
            {brandOrder.map((brand) => {
                const brandSongs = songs.filter((song) => song.brand === brand);
                if (brandSongs.length === 0) return null;
                return (
                    <div key={brand} className="neu-surface rounded-md p-4">
                        <h2 className="mb-2 text-lg font-semibold text-text-default">{brand}</h2>
                        <ul className="flex flex-col gap-2">
                            {brandSongs.map((song) => (
                                <SongItem key={song.title} title={song.title} link={song.link} />
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}


export default function ArchivementGeneratorPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">The iDOLM@STER: Soul Songs</h1>
            <p>WIP: このリストは現時点で不完全です！！！</p>
            <div className="flex flex-col gap-5 rounded-md p-5">
                <SongsList
                    songs={[
                        {title: "アマテラス（M@STER VERSION）", link: undefined, brand: "AS"},
                        {title: "私たちはずっと…でしょう？ -Ryo Watanabe Remix-", link: undefined, brand: "AS"},
                        {title: "Halftone", link: undefined, brand: "AS"},
                        {title: "ロイヤルストレートフラッシュ", link: "https://music.apple.com/jp/album/%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5/1844765012?i=1844765013", brand: "AS"},
                        {title: "DIAMOND", link: "https://music.apple.com/jp/album/diamond/1659371784?i=1659371805", brand: "AS"},
                        {title: "アルストロメリア", link: "https://music.apple.com/jp/album/%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%AA%E3%82%A2/1734551408?i=1734551409", brand: "シャイニーカラーズ"},
                        {title: "i", link: "https://music.apple.com/jp/album/i-remix/1659357818?i=1659357824", brand: "AS"},
                        {title: "あの日のナミダ（M@STER VERSION）", link: undefined, brand: "AS"},
                        {title: "START!!", link: "https://music.apple.com/jp/album/start/1659368274?i=1659368508", brand: "AS"},
                        {title: "楽園", link: "https://music.apple.com/jp/album/%E6%A5%BD%E5%9C%92/1440570188?i=1440570189", brand: "シンデレラガールズ"},
                        {title: "DELIGHT", link: undefined, brand: "シンデレラガールズ"},
                        {title: "STEREOPHONIC ISOTONIC", link: "https://music.apple.com/jp/album/stereophonic-isotonic/1718674689?i=1718674693", brand: "ミリオンライブ!"},
                        {title: "見て", link: "https://music.apple.com/jp/album/%E8%A6%8B%E3%81%A6/1846266414?i=1846266418", brand: "学園"},
                        {title: "サンフェーデッド", link: "https://music.apple.com/jp/album/%E3%82%B5%E3%83%B3%E3%83%95%E3%82%A7%E3%83%BC%E3%83%87%E3%83%83%E3%83%89/1825279996?i=1825279997", brand: "学園"},
                        {title: "空と約束", link: "https://music.apple.com/jp/album/%E7%A9%BA%E3%81%A8%E7%B4%84%E6%9D%9F/1845254519?i=1845254522", brand: "学園"},
                        {title: "ソライロ!", link: "https://music.apple.com/jp/album/%E3%82%BD%E3%83%A9%E3%82%A4%E3%83%AD/1878069220?i=1878069226", brand: "その他"},
                    ]}
                />
            </div>
        </div>
    );
}

