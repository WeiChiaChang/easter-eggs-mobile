# 📱 easter-eggs-mobile

![mitLicense](https://img.shields.io/badge/License-MIT-yellow.svg)
![npmPackage](https://badge.fury.io/js/easter-egg-mobile.svg)
![vulnerabilities](https://snyk.io/test/npm/easter-egg-mobile/badge.svg)
![scoreMe](https://readme-score-api.herokuapp.com/score.svg?url=WeiChiaChang/easter-eggs-mobile)

> It's the special version which extended from [easter-egg-collection](https://github.com/WeiChiaChang/easter-egg-collection) this library for user to trigger lots of easter eggs on mobile device by 👆 clicking or tapping with ease.

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

#### CDN 👇

```html
<script src="https://rawgit.com/WeiChiaChang/easter-eggs-mobile/master/scripts/easter-egg-mobile.js"></script>
```

#### NPM 👇

```shell
npm i easter-egg-mobile -D
```

For <b>`Vue`</b> users, setup these commands in your single component file :

```javascript
import easterEggMobile from 'easter-egg-mobile'
```

And don't forget trigger easter eggs when it <b>`mounted`</b> already :

```javascript
export default {
  data () {
    return {
      ...
    }
  },
  // Trigger easter eggs when mounted
  mounted: function () {
    easterEggMobile
  }
}
```

> Magic will show with a tiny setting on HTML, keep going ! 💪 

Add `class name` and `data-src` attribute on `<a>` tags in your <b>HTML</b> structure, take `ghost` for example :

```html
<a class="gif-ghost" data-src='./images/ghost.gif'>Ghost</a>
```

So if you want to use `pikachu`, that would be :
```html
<a class="gif-pikachu" data-src='./images/pikachu.gif'>Pikachu</a>
```

#### The rest of easter eggs follow this way as well 🎉 , now enjoy it ! 🍾 

> This table can help you find out easter eggs as required : 

🐰 easter egg | 😳 class | 📊 data-src | 💯 original source | 🔊 sound
---------- | ----- | -------- | --------------- | ------------------
airguitar  | gif-airguitar | https://goo.gl/qEhWwZ | https://i.giphy.com/7yfb0x166Coms.gif | 🔕
ghost | gif-ghost | https://goo.gl/4EwYZr | https://i.giphy.com/YoypIsUmXXI52.gif | 🔕
pikachu | gif-pikachu | https://goo.gl/x3rX4r | https://i.giphy.com/uXnif9JVu6VnW.gif | 🔔
dog | gif-dog | https://goo.gl/aQVAXH | https://i.giphy.com/4wLJ8aC0V68x2.gif | 🔕 
hangover | gif-hangover | https://goo.gl/aWj4U2 | https://i.giphy.com/uDvz51Hu6PONi.gif | 🔕 
winner | gif-winner | https://goo.gl/5vcgPj | https://i.giphy.com/3oKIPwZVHEiM2B3ljq.gif | 🔕 


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
