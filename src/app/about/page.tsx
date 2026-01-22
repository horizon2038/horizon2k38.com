import Image from "next/image";
import {GitHubIcon, XIcon, MailIcon} from "@/components/ui/Icon";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">
                About horizon
            </h1>
            <div className="max-w-2xl mx-auto">
                <Image
                    src="/images/horizon-real.jpeg"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="neu-surface rounded-full mx-auto mb-6"
                />
                <div className="flex items-center justify-center text-center mb-6 gap-4 mx-auto">
                    <a className="text-text-default" href="mailto:horizon@sfc.wide.ad.jp"><MailIcon className="neu-surface neu-pressable p-2 text-5xl" /></a>
                    <a className="text-text-default" href="https://github.com/horizon2038"><GitHubIcon className="neu-surface neu-pressable p-2 text-5xl" /></a>
                    <a className="text-text-default" href="https://x.com/horizon2k38"><XIcon className="neu-surface neu-pressable p-2 text-5xl" /></a>
                </div>
                <p>I am a Japanese software developer with a passion for everything from low-level programming to software architecture.
                    My main interests lie in <i>Microkernel</i> and <i>Hypervisor</i>.</p>
                <h2>Personal Information</h2>
                <ul>
                    <li>Name: Rekka &quot;horizon&quot; IGUMI <span className="whitespace-nowrap">(Japanese: <i>伊組烈火</i>)</span></li>
                    <li>Date of Birth: 2005-07-28</li>
                    <li>Residence: Tokyo, Japan </li>
                </ul>
                <h2>Affiliations</h2>
                <ul>
                    <li>2023-05 - 2023-11: Creator, <a href="https://jr.mitou.org/projects/2023/a9n">MITOU Jr Program</a></li>
                    <li>2024-06 - Present: Member, <a href="https://diver-x.jp/">Diver-X, Inc.</a></li>
                    <li>2024-06 - 2025-03: Creator, <a href="https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-sg-2.html">MITOU IT Program</a></li>
                    <li>2024-07 - Present: Member, <a href="https://mitou.org/">MITOU Foundation</a></li>
                    <li>2025-04 - Present: Undergraduate Student, <a href="https://www.sfc.keio.ac.jp/">Faculty of Environment and Information Studies, Keio University</a></li>
                    <li>2025-04 - Present: Member, <a href="https://rg.sfc.keio.ac.jp/">SFC-RG</a> VIRT/<a href="https://arch.sfc.wide.ad.jp/">Arch</a> (Kusumoto/Takashio/Van Meter/Uehara/Mitsugi/Nakazawa/Okoshi Joint Research Group)</li>
                    <li>2025-12 - Present: Technical Staff, <a href="https://www.digiarc.aist.go.jp/team/ccirt/">Continuum Computing Infrastructure Research Team</a>, <a href="https://unit.aist.go.jp/ipri/">Intelligent Platform Research Institute (IPRI)</a>, <a href="https://www.aist.go.jp/">National Institute of Advanced Industrial Science and Technology (AIST)</a></li>
                </ul>
                <h2>Certificate</h2>
                <ul>
                    <li>
                        2023-12: <a href="https://jr.mitou.org/projects/2023">&apos;23 MITOU Jr Super-Creator</a>
                        <ul>
                            <li><i>A9N - A Microkernel Achieving Portability Using HAL</i></li>
                            <li>The presentation video is available <a href="https://youtu.be/VJOOFltOJJk?si=LBfk2IhD_jKtejJa">here</a></li>
                            <li><a href="https://prtimes.jp/main/html/rd/p/000000014.000022934.html">Press Release</a></li>
                        </ul>
                    </li>
                    <li>
                        2025-05: <a href="https://www.ipa.go.jp/jinzai/mitou/koubo/career/2024/2024-supercreator-14.html">&apos;24 MITOU IT Super-Creator</a>
                        <ul>
                            <li><i>Secure User-Level Memory Management System with a Capability-Based Microkernel</i></li>
                            <li>The presentation video is available <a href="https://youtu.be/YG5ikc-X_Kg?si=bVjdbYTw5z3Zx7Pl">here</a></li>
                            <li><a href="https://www.meti.go.jp/press/2025/05/20250529001/20250529001.html">Press Release</a></li>
                        </ul>
                    </li>
                </ul>
                <h2>Presentations</h2>
                <ul>
                    <li>2025-08-09: <a href="https://speakerdeck.com/horizon2038/boot-sequence-in-the-a9n-microkernel">Boot Sequence in the A9N Microkernel</a>, <a href="https://kernelvm.connpass.com/event/355100/">Kernel/VM探検隊@東京 No18</a></li>
                    <li>2026-01-10: A9N: 高速なIPC機構を備えるマイクロカーネルの開発 (en: A9N: Development of a Microkernel with a High-Speed IPC Mechanism), <a href="https://prosym.org/67/">67th Programming Symposium</a></li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>
                        Domains
                        <ul>
                            <li>Microkernel</li>
                            <li>Hypervisor</li>
                            <li>Linker/Loader</li>
                            <li>Compiler</li>
                            <li>Software Architecture</li>
                            <li>Performance Optimization</li>
                            <li>Network (Layer 2-4)</li>
                        </ul>
                    </li>
                    <li>
                        Programming Languages
                        <ul>
                            <li>C++</li>
                            <li>C</li>
                            <li>Rust</li>
                            <li>ASM (x86_64)</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>Haskell</li>
                        </ul>
                    </li>
                </ul>
                <h2>Contacts</h2>
                <ul>
                    <li>Email: <a href="mailto:horizon@sfc.wide.ad.jp">horizon@sfc.wide.ad.jp</a></li>
                    <li>X: <a href="https://x.com/horizon2k38">@horizon2k38</a></li>
                    <li>Mastodon: <a href="https://mstdn.jp/@horizon2k38">@horizon2k38@mstdn.jp</a></li>
                    <li>GitHub: <a href="https://github.com/horizon2038">@horizon2038</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/%E7%83%88%E7%81%AB-%E4%BC%8A%E7%B5%84-b73858369/">Rekka IGUMI</a></li>
                    <li>Wantedly: <a href="https://www.wantedly.com/id/horizon2k38">@horizon2k38</a></li>
                </ul>
            </div>
        </div>
    );
}
