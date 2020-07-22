---
title: Next.js + Netlify CMS + Netlify で自己紹介サイトを公開しました
date: '2020-07-21'
topics: 'React,Next.js,TypeScript,Netlify CMS, Netlify'
---
## はじめに
[React](https://reactjs.org)のフレームワークである[Next.js](https://nextjs.org)を使ってみたかったので、Next.jsを使って自己紹介ページを作ってみました。そして、サイトのビルド、公開には[Netlify](https://www.netlify.com) を使いました。

今回は、その過程で学んだことを書いておきます。

## 目次

1. Next.jsでブログサイトをつくる
1. Netlify CMSを導入する
1. Netlify で公開する

また、ブログなどのコンテンツは [Netlify CMS](https://www.netlifycms.org) を使って管理できるようにしています。
今回、Netlify CMSを使ってよかった点は、WordPressなどのコンテンツ管理システム（Contents Management System: CMS）などのように、データベースを。
Next.jsを静的サイトジェネレーターとして使うことで、ページ間の遷移が早いユーザー満足度の高いサイトが実現出来たと自負しております。Netlify CMS内でマークダウン形式で記事を作成し、Next.jsで記事を読み込みページを生成するという流れです。ページの制作、公開の過程で新しく学んだことをここに書きました。

## どのようなサイトを作ったのか
自己紹介サイトを作りました。  

コンテンツは今のところ、

- ホーム
- ブログ
- ポートフォリオ
- コンタクトフォーム  

の4つです。

## なぜ作ったのか
自己紹介サイトを作った理由は2つあります。１つは、以前にも別の言語やフレームワークを使って自己紹介サイトを作ったことはあったのですが、ブログやポートフォリオなどのコンテンツを管理できるものをもう一度作り直そうと思っていたところだったからです。もうひとつは、とりあえずNext.jsを使って何かを作ってみたいと思っていたからです。[Next.jsの公式ドキュメント](https://nextjs.org/docs/getting-started)を見ると、とにかくまずは "[learn course](https://nextjs.org/learn/basics/create-nextjs-app)" をやってみるのがお勧めだと書いてあります。その内容がまさにブログサイトを作るというものだったのです。
