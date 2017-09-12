# 📱 easter-eggs-mobile

> It's the special version which extended from [easter-egg-collection](https://github.com/WeiChiaChang/easter-egg-collection) this library for user to trigger lots of easter eggs on mobile device by clicking or tapping with ease.

<p align="center">
  <a target="_blank" href="https://github.com/WeiChiaChang/easter-eggs-mobile">
    <img alt="easter-egg-mobile" src="https://i.imgur.com/HE3hzAO.gif">
  </a>
</p>

## 🤘 Live Demo

- [Just try it](https://git.io/v5PQC)!
- Or... [Codepen](https://codepen.io/WeiChiaChang/pen/BwByxN?editors=1100) is your best friend!

## 💡 Inspiration

Original Source: Thanks to [Richard Denton](https://codepen.io/isdampe/pen/OXYZZO)!

All of the images were derived from [GIPHY](https://giphy.com/).

## 🎉 Installing / Getting started

In a browser with CDN usage :

```javascript
<script src="https://rawgit.com/WeiChiaChang/easter-eggs-mobile/master/scripts/easter-egg-mobile.js"></script>
```

Then add `class name` and `data-src` attribute on your `<a>` tags in your <b>HTML</b> file, take <b>Ghost</b> for example :

```html
<a class="gif-click gif-ghost" data-src='./images/ghost.gif'>Ghost</a>
```

 So if you want to use `pikachu`, that would be :
 ```html
 <a class="gif-click gif-pikachu" data-src='./images/pikachu.gif'>Pikachu</a>
 ```

 The rest of easter eggs follow this this way as well 🎉 

> You can ignore `gif-click` this class, just for CSS styling.

This table can help you find out easter eggs as required : 

easter egg | class | data-src | original source
---------- | ----- | -------- | ---------------
airguitar  | gif-airguitar | https://weichiachang.github.io/easter-eggs-mobile/images/airguitar.gif | https://i.giphy.com/7yfb0x166Coms.gif
ghost | gif-ghost | https://weichiachang.github.io/easter-eggs-mobile/images/ghost.gif | https://i.giphy.com/7yfb0x166Coms.gif
pikachu | gif-pikachu | https://weichiachang.github.io/easter-eggs-mobile/images/pikachu.gif | https://i.giphy.com/7yfb0x166Coms.gif
dog | gif-dog | https://weichiachang.github.io/easter-eggs-mobile/images/dog.gif | https://i.giphy.com/7yfb0x166Coms.gif

## 🤓 Developing

### Setting up Dev

A quick introduction of how to use easter-eggs-mobile, first of all:

```shell
git clone https://github.com/WeiChiaChang/easter-eggs-mobile.git
```

Then install pingy as front-end build tool:

> Save your life, save your time

```shell
npm install @pingy/cli --global
```

Last step, install all of the modules:

```shell
npm install
```

Type this command with your favorite iterm2:

```shell
pingy dev
```

Everything all done now! ![turtle](http://i.imgur.com/879dfXS.gif)


### Deploying / Publishing
Export website to a folder for distribution and ready for deploying:

```shell
pingy export
```

## ©️ License

MIT © [WeiChiaChang](https://github.com/WeiChiaChang/)
