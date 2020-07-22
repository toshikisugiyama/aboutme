---
title: Next.js + Netlify CMS + Netlify で自己紹介サイトを公開しました
date: '2020-07-21'
topics: 'React,Next.js,TypeScript,Netlify CMS, Netlify'
---

[<img src="https://raw.githubusercontent.com/toshikisugiyama/aboutme/master/src/public/images/snsIcons/github.svg" alt="github" width="30" height="30" >](https://github.com/toshikisugiyama/aboutme)

## はじめに

[React](https://reactjs.org) のフレームワークである [Next.js](https://nextjs.org) を使ってみたかったので、 Next.js を使って自己紹介サイトを作ってみました。当サイトのビルド、デプロイおよび公開には[Netlify](https://www.netlify.com) を使いました。

また、ブログなどのコンテンツは [Netlify CMS](https://www.netlifycms.org) を使って管理できるようにしています。コンテンツはデータベースではなくファイルで管理しており、 Netlify CMS を使うことで管理画面を作ってブラウザ上で記事を挙げることが簡単に出来ます。Netlify CMS で作った管理画面上で記事を書くと、 Netlify と連携した GitHub レポジトリにプッシュされ、 Netlify の機能によって自動的に公開することが出来ます。

さらに、公開されたサイトは Next.js のプレレンダリング機能により各ページの HTML が予め生成されているので、閲覧する時にサクサクと素早く動作します。

## どのようなサイトを作ったのか

自己紹介サイトを作りました。  

コンテンツは今のところ、

* [ホーム](https://aboutme-toshikisugiyama.netlify.app)
* [ブログ](https://aboutme-toshikisugiyama.netlify.app/blog)
* [ポートフォリオ](https://aboutme-toshikisugiyama.netlify.app/portfolio)
* [コンタクトフォーム](https://aboutme-toshikisugiyama.netlify.app/contact) 

の4つです。  

そのうち、ブログとポートフォリオはマークダウンファイルをアップロードすることで記事ページを追加できるようになっています。この作業はブラウザ上で Netlify CMS の管理画面から行うことができるようにしました。

## おわりに

当サイトを作る前に [Next.js のチュートリアル](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)をやってみました。 [Next.jsの公式ドキュメント](https://nextjs.org/docs/getting-started)にも、とにかくまずは "[learn course](https://nextjs.org/learn/basics/create-nextjs-app)" をやってみるのがお勧めだと書いてあります。このチュートリアルは丁寧に書かれています。そして内容もブログシステムを作るというものです。当サイトはこのチュートリアルに沿って Next.js を少し学んだ後に再度アレンジを加えながら作りました。 Next.js の公式チュートリアルでは公開には [Vercel](https://vercel.com) がお勧めされていますが、今回は Netlify を使いました。 Netlify を使ったのは、これまでも使用した経験があり便利だと感じていたことと、 [Forms](https://docs.netlify.com/forms/setup) などの機能があり、コンタクトフォームなども簡単に作ることができるからです。 Netlify の機能は他にもたくさんあり、まだまだ使えていないものもあるのでこれからも有効に使っていきたいと思っています。

