---
title: 'ポートフォリオ/ブログのリニューアル'
date: '2025-08-29T22:00'
tags: ['introduction']
---

## Hello, World!

Next.jsとTailwind CSSで個人サイトを一新した．

ずっと個人サイト（ポートフォリオ/ブログ）を持ちたいと思っていたが，持ち前の怠惰に呪われてしまいなかなか実現できていなかった．
この実現というのは，単なる遊びでない - 自分の納得がいくものを作る，という意味だ．

納得のいかないものは幾つか作ってきた．
1つ目が，未踏ジュニア時代（2023年）遊びで作っていたポートフォリオだ．Web技術に触れる目的で書いたものだったが，これはバグだらけだったので放棄した．
2つ目は，大学に入学してすぐ作った[アカデミックなポートフォリオ](https://web.sfc.wide.ad.jp/~horizon)である．ただ，これも大学のサーバーでホストする以上制約が多いという問題があった．

そこで，今回はまずDomainから取得するところから始めた．無論取得には金銭が必要であるが，これが逆説的にサイト構築のモチベーションとなった．この手法はコミケのサークル参加にも通じるものがある．
結果として[horizon2k38.com](https://horizon2k38.com)をCloudflare Registrarから取得できた．

次に，サイト本体の実装を行った．Next.js + Tailwind CSSで原型を作成し，続けてBlogを実装した．
記事はMarkdownで作成可能にした．実装方針としては，remarkとrehypeでHTMLへ変換し，gray-matterでMeta-data（e.g., 作成日，タグ）をMarkdown自体から読み取っている．

こうして作成した[horizon2k38.com](https://horizon2k38.com)はCloudflare PagesでHostしている．CloudflareのEco-systemは最高で，Domain取得からHostingまで一貫して行える．これは非常に良いUser Experienceを齎す．

## これからの予定

ニッチな技術に関する記事を書いていきたい．幸い散文はぼくの[Cosense](https://cosen.se/horizon2038)に幾つもあるので，これをまとめていくことになるだろう．
とりあえず，MicrokernelやHypervisorの構造をオタク語りしていくことにする．

