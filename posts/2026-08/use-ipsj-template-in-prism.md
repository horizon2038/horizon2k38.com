---
title: "IPSJの論文テンプレートをPrismで利用する"
date: 2026-08-06T10:53:20
tags: ["Paper", "TeX"]
---

## ToC

## はじめに

[OpenAI Prism](https://prism.openai.com/)という$\TeX$ Editorがある．これは，OpenAIのLLMによる支援が受けられる - いわば，OverleafにChatGPTが統合されたようなサービスである．
これは非常に便利なのだが，日本語環境・独自テンプレート・pLaTeXの環境において罠がある．具体的には，情報処理学会に投稿するための[論文テンプレート](https://www.ipsj.or.jp/journal/submit/style.html)を簡単には利用できず，Compile Errorや不正なPDFの生成に悩まされるという問題がある．

よって今回は，Prismで情報処理学会の論文テンプレートを利用する方法を紹介する．

## 初期設定

まず，前述した[情報処理学会の論文テンプレート](https://www.ipsj.or.jp/journal/submit/style.html)をダウンロードしておく．Shift-JIS版とUTF-8版があるが，PrismではUTF-8版を利用する．
また，OpenAIのアカウントを作成しておこう．

## Prismでのプロジェクト作成

[prism.openai.com](https://prism.openai.com/)にアクセス・ログインしたら，右上の「インポート」→「フォルダをインポート」を選択し，先ほどダウンロードしたテンプレートのフォルダを選択する．すると，そのフォルダが丸々Prismのプロジェクトとしてインポートされる．
プロジェクト名はフォルダ名がそのまま利用される（今回の場合，UTF8というフォルダ名がそのままプロジェクト名になっていると思う）．基本的にはプロジェクト名を変更しておいた方が良いだろう．

また，このプロジェクトは今後のためにテンプレートとすることを推奨する．

## `.latexmkrc`の作成

PrismはデフォルトでXeLaTeX，LuaLaTeXが利用される．しかし，情報処理学会のテンプレートはpLaTeXを前提としているため，LuaLaTeXではCompile Errorが発生する．
普通に`% !TeX program = platex`と書いても利用できないが，`.latexmkrc`を作成することでPrismでもpLaTeXを利用できるようになる [^1]．この部分の記述は引用元を参照してほしい．

## Auto Formatの無効化

このテンプレートではマクロとして`\def\|{verb|}`が定義されている．よって，`\|\begin{document}`のようなコードは`\verb|\begin{document}|`へ置換される．

―― なのだが，これがどうもPrismのAuto Formatと相性が悪い．`\|`の直後に自動で改行が入ってしまい，`\verb|\begin{document}|`が`\verb| \begin{document}|`のように変換されてしまう．これが原因でCompile Errorが発生する．

ということで，我々が取れる対策は2つある：

### 1. 全体的にAuto Formatを無効化する

Prismの設定（左下，自分のアカウント情報をクリック→設定）から，「エディタ」→「自動整形」をオフにする．これにより，`\|`の直後に改行が入ることはなくなる（それはそう）．
とはいえ，Auto Formatを使い続けたいユースケースも存在する．よって，対策2も紹介する．

### 2. Auto Formatを部分的に無効化する

OpenAI Prismでは内部的に`tex-fmt`を利用しているようだ．よって，Formatを無効化したい部分を`% tex-fmt: off`と`% tex-fmt: on`で囲むことで，その部分だけ無効化できる．
具体的には，`\|`を利用しているブロック周辺の`tex-fmt`を無効化すればよい．

### 3. 頑張って自分でマクロを書き換える

やればできると思う．が，面倒なのでここには書かないしやっていない．

## まとめ

OpenAI Prismは非常に便利な$\TeX$ Editorであるが，情報処理学会の論文テンプレートを利用する場合には注意が必要である．うまく使いこなし，快適な論文執筆環境を構築しよう．

[^1]: [OpenAI PrismのLaTeXで日本語を使う](https://okumuralab.org/~okumura/misc/260131.html)
