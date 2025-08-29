/*
<h2>About Me</h2>
    <img src="resources/horizon_IPA.JPG" height=200px>
    <p>I am a Japanese software developer with a passion for everything from low-level programming to software architecture.
My main interests lie in <i>Microkernel</i> and <i>Hypervisor</i>.</p>
    <h2>Personal Information</h2>
    <ul>
     <li>Name: Rekka "horizon" IGUMI <nobr>(Japanese: <i>伊組烈火</i>)</nobr></li>
     <li>Date of Birth: 2005-07-28</li>
     <li>Residence: Tokyo, Japan
    </ul>
    <h2>Afflications</h2>
    <ul>
      <li>2024-06 - Present: Member, <a href="https://diver-x.jp/">Diver-X, Inc.</a></li>
      <li>2024-07 - Present: Member, <a href="https://mitou.org/">MITOU Foundation</a></li>
      <li>2025-04 - Present: Undergraduate Student, <a href="https://www.sfc.keio.ac.jp/">Faculty of Environment and Information Studies, Keio University</a></li>
      <li>2025-04 - Present: Member, <a href="https://rg.sfc.keio.ac.jp/">SFC-RG</a> VIRT/<a href="https://arch.sfc.wide.ad.jp/">Arch</a> (Kusumoto/Takashio/Van Meter/Uehara/Mitsugi/Nakazawa/Okoshi Joint Research Group)</li>
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
          <li>Network (Layer 3-4)</li>
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
      </ul>
    <h2>Personal Projects</h2>
    <dl>
      <dt>
        <a href="https://github.com/horizon2038/A9N">
          A9N Microkernel
        </a>
      </dt>
      <dd><img src="resources/a9n_project.png" height=200px> <img src="resources/about_a9n.png" height=200px></dd>
      <dd>
        A9N is a capability-based microkernel, primarily implemented in C++20. It features a highly portable Hardware Abstraction Layer (HAL) and leverages the object-capability model to ensure strong security. The kernel also achieves exceptionally high performance in inter-process communication (IPC).
      </dd>
      <dd>
        Achieved world-leading IPC performance in cross-domain round-trip IPC benchmarks <nobr>(590 cycles: Intel N150@3.6GHz)</nobr>.
      </dd>
      <dt>
        <a href="https://github.com/horizon2038/Nun">
          Nun Operating System Framework
        </a>
      </dt>
      <dd><img src="resources/about_nun.png" height=200px></dd>
      <dd>
        Designed and implemented Nun, a framework and runtime for building user-mode operating systems on top of A9N Microkernel.
      </dd>
      <dd>
        Demonstrated the rapid development of a functional user-mode OS in under 3 minutes during a live demo <a href="https://youtu.be/YG5ikc-X_Kg?si=Y2bl2xmjPRgs90_p&t=856">in this video</a>.
      </dd>
      <dt>
        <a href="https://github.com/horizon2038/A9NLoader">
          A9NLoader
        </a>
      </dt>
      <dd><img src="resources/about_a9nloader.png" height=200px></dd>
      <dd>
        A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the A9N Boot Protocol (x86_64). It properly loads the Kernel Executable and Init Executable, making the system operational.
It is implemented using EDK2.
      </dd>
    </dl>
    <h2>Awards</h2>
    <ul>
      <li>
        2023-05: <a href="https://jr.mitou.org/projects/2023/a9n">'23 MITOU Jr Creator</a>
        <ul>
          <li><i>A9N - A Microkernel Achieving Portability Using HAL</i></li>
          <li>The presentation video is available <a href="https://youtu.be/VJOOFltOJJk?si=LBfk2IhD_jKtejJa">here</a></li>
        </ul>
      </li>
      <li>
        2023-12: <a href="https://jr.mitou.org/projects/2023">'23 MITOU Jr Super-Creator</a>
        <ul>
          <li><a href="https://prtimes.jp/main/html/rd/p/000000014.000022934.html">Press Release</a></li>
        </ul>
      </li>
      <li>
        2024-06: <a href="https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-sg-2.html">'24 MITOU IT Creator</a>
        <ul>
          <li><i>Secure User-Level Memory Management System with a Capability-Based Microkernel</i></li>
          <li>The presentation video is available <a href="https://youtu.be/YG5ikc-X_Kg?si=bVjdbYTw5z3Zx7Pl">here</a></li>
        </ul>
      </li>
      <li>
        2025-05: <a href="https://www.ipa.go.jp/jinzai/mitou/koubo/career/2024/2024-supercreator-14.html">'24 MITOU IT Super-Creator</a>
        <ul>
          <li><a href="https://www.meti.go.jp/press/2025/05/20250529001/20250529001.html">Press Release</a></li>
        </ul>
      </li>
    </ul>
*/

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 text-text-default">
            <h1 className="text-center mb-12">
                About Me
            </h1>
            <div className="max-w-2xl mx-auto">
                { /* <img src="resources/horizon_IPA.JPG" height=200px> */}
                <p>I am a Japanese software developer with a passion for everything from low-level programming to software architecture.
                    My main interests lie in <i>Microkernel</i> and <i>Hypervisor</i>.</p>
                <h2>Personal Information</h2>
                <ul>
                    <li>Name: Rekka "horizon" IGUMI (Japanese: <i>伊組烈火</i>)</li>
                    <li>Date of Birth: 2005-07-28</li>
                    <li>Residence: Tokyo, Japan </li>
                </ul>
                <h2>Afflications</h2>
                <ul>
                    <li>2024-06 - Present: Member, <a href="https://diver-x.jp/">Diver-X, Inc.</a></li>
                    <li>2024-07 - Present: Member, <a href="https://mitou.org/">MITOU Foundation</a></li>
                    <li>2025-04 - Present: Undergraduate Student, <a href="https://www.sfc.keio.ac.jp/">Faculty of Environment and Information Studies, Keio University</a></li>
                    <li>2025-04 - Present: Member, <a href="https://rg.sfc.keio.ac.jp/">SFC-RG</a> VIRT/<a href="https://arch.sfc.wide.ad.jp/">Arch</a> (Kusumoto/Takashio/Van Meter/Uehara/Mitsugi/Nakazawa/Okoshi Joint Research Group)</li>
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
                            <li>Network (Layer 3-4)</li>
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
                </ul>
                <h2>Personal Projects</h2>
                <dl>
                    <dt>
                        <a href="https://github.com/horizon2038/A9N">
                            A9N Microkernel
                        </a>
                    </dt>
                    { /* <dd><img src="resources/a9n_project.png" height="200px/> <img src=" resources /about_a9n.png" height=200px /></dd> */}
                    <dd>
                        A9N is a capability-based microkernel, primarily implemented in C++20. It features a highly portable Hardware Abstraction Layer (HAL) and leverages the object-capability model to ensure strong security. The kernel also achieves exceptionally high performance in inter-process communication (IPC).
                    </dd>
                    <dd>
                        Achieved world-leading IPC performance in cross-domain round-trip IPC benchmarks (590 cycles: Intel N150@3.6GHz).
                    </dd>
                    <dt>
                        <a href="https://github.com/horizon2038/Nun">
                            Nun Operating System Framework
                        </a>
                    </dt>
                    { /* <dd><img src="resources/about_nun.png" height=200px></dd> */}
                    <dd>
                        Designed and implemented Nun, a framework and runtime for building user-mode operating systems on top of A9N Microkernel.
                    </dd>
                    <dd>
                        Demonstrated the rapid development of a functional user-mode OS in under 3 minutes during a live demo <a href="https://youtu.be/YG5ikc-X_Kg?si=Y2bl2xmjPRgs90_p&t=856">in this video</a>.
                    </dd>
                    <dt>
                        <a href="https://github.com/horizon2038/A9NLoader">
                            A9NLoader
                        </a>
                    </dt>
                    { /* <dd><img src="resources/about_a9nloader.png" height=200px></dd> */}
                    <dd>
                        A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the A9N Boot Protocol (x86_64). It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using EDK2.
                    </dd>
                </dl>
                <h2>Awards</h2>
                <ul>
                    <li>
                        2023-05: <a href="https://jr.mitou.org/projects/2023/a9n">'23 MITOU Jr Creator</a>
                        <ul>
                            <li><i>A9N - A Microkernel Achieving Portability Using HAL</i></li>
                            <li>The presentation video is available <a href="https://youtu.be/VJOOFltOJJk?si=LBfk2IhD_jKtejJa">here</a></li>
                        </ul>
                    </li>
                    <li>
                        2023-12: <a href="https://jr.mitou.org/projects/2023">'23 MITOU Jr Super-Creator</a>
                        <ul>
                            <li><a href="https://prtimes.jp/main/html/rd/p/000000014.000022934.html">Press Release</a></li>
                        </ul>
                    </li>
                    <li>
                        2024-06: <a href="https://www.ipa.go.jp/jinzai/mitou/it/2024/gaiyou-sg-2.html">'24 MITOU IT Creator</a>
                        <ul>
                            <li><i>Secure User-Level Memory Management System with a Capability-Based Microkernel</i></li>
                            <li>The presentation video is available <a href="https://youtu.be/YG5ikc-X_Kg?si=bVjdbYTw5z3Zx7Pl">here</a></li>
                        </ul>
                    </li>
                    <li>
                        2025-05: <a href="https://www.ipa.go.jp/jinzai/mitou/koubo/career/2024/2024-supercreator-14.html">'24 MITOU IT Super-Creator</a>
                        <ul>
                            <li><a href="https://www.meti.go.jp/press/2025/05/20250529001/20250529001.html">Press Release</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
