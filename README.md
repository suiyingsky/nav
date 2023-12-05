## 相关产品

- [点击跳转到 云端花园：https://huayuan00.com](https://huayuan00.com)
- [点击跳转到 花园导航:：https://nav.huayuan00.com](https://nav.huayuan00.com)


<p align="center">
  <a href="https://nav.huayuan00.com/?g">
    <img src="src/assets/logo.png" width="130" />
  </a>
  <br />
  <b>Discovery Navigation</b>
  <p align="center">A purely static, powerful navigation website that supports SEO and online editing, I hope you will like it</p>
  <p align="center">Built-in collection of up to 800+ high-quality websites to help you work, study and live</p>
  <p align="center">
    <a href="README_zh-CN.md">
      <img src="https://img.shields.io/badge/lang-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-red.svg?longCache=true&style=flat-square">
    </a>
    <img src="https://img.shields.io/github/v/release/xjh22222228/nav" />
    <a href="https://github.com/suiyingsky/nav/stargazers"><img src="https://img.shields.io/github/stars/xjh22222228/nav" alt="Stars"/></a>
    <img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular11&style=flat-square&color=C82B38">
    <img src="https://img.shields.io/github/license/xjh22222228/nav" />
  </p>
</p>

<br />
<br />


## Preview
**Themes**

- [Sim online preview](https://nav.huayuan00.com/#/sim)
- [Light online preview](https://nav.huayuan00.com/#/light)
- [Side online preview](https://nav.huayuan00.com/#/side)
- [App online preview](https://nav.huayuan00.com/#/app)

![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/1.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/2.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/3.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/4.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/5.png)






## Features
`Discovery Navigation The idea is to make it simple and convenient without relying on back-end services, without complicated configuration and database configuration concepts, so it can be used out of the box.


- 🍰 Built-in 800+utility sites.
- 🍰 Support SEO.
- 🍰 It is completely static and provides automatic deployment functions.
- 🍰 The trigeminal tree has a clear structure and clear classification.
- 🍰 Support one website to associate multiple URLs
- 🍰 The coexistence of beauty and simplicity is no longer the era of killing Matt.
- 🍰 Completely open source, easy to customize.
- 🍰 Support multiple browsing modes and innovation.
- 🍰 Support footprint memory.
- 🍰 Support mobile browsing.
- 🍰 Support search query.
- 🍰 Support custom engine search.
- 🍰 A variety of theme switching.
- 🍰 Support dark mode.
- 🍰 Support background management, no need to deploy.
- 🍰 Support import from Chrome bookmarks


## Deploy
Its as easy as counting numbers "3 2 1" that simple!

#### Method one (github-pages free)
1、Fork the current project.

2、Click on the `main` branch on the warehouse page and enter `image` in the input box to create a branch. Otherwise, uploading images will result in a 404 phenomenon.

3、[https://github.com/settings/tokens](https://github.com/settings/tokens) apply for a token, check the corresponding permissions, if you don’t understand, select all, copy and save the token.

4、https://github.com/username/nav/settings/secrets/actions/new  Create a new application token, name fill in TOKEN (All are uppercase).

5、Go to https://github.com/username/nav/actions click "Green Button"

6、Be sure to modify the project configuration file [nav.config.ts](nav.config.ts)

7、After 5 minutes, open https://username.github.io/nav , you will see a very powerful navigation website.

### Method 2 (Free Vercel)
The steps are the same as the first method, except that the fourth step is not needed.
For specific use, follow the steps [https://github.com/apps/vercel](https://github.com/apps/vercel)


### Method 3 (Free Netlify)
[https://www.netlify.com/](https://www.netlify.com/)




## Backstage
Modify the routing address to `system`, such as: https://www.nav.huayuan00.cn/#/light Change to https://www.nav.huayuan00.cn/#/system


## Bookmark import

Support importing from Chrome bookmarks (WebKit kernel should be supported~), it will automatically detect navigation that meets the three-level classification, and all others will be set as unclassified:

![](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/import.png)

The browser opens chrome://bookmarks/ to export the bookmarks to get the html file, and then import it from the background of the navigation website.




## Upgrade
Before upgrading, please back up the `data` folder and `nav.config.ts` in the root directory, and replace them after the upgrade.
Click the `Watch` button in the upper right corner to track the version upgrade for the first time.


## Update log
[CHANGELOG](https://github.com/suiyingsky/nav/releases)






## Development and construction
NODE: v18
``` bash
# Download
git clone --depth=1 https://github.com/suiyingsky/nav.git

cd nav

# Installation dependencies(Node:v18)
yarn

# Start
yarn start

# Build
yarn build
```



## contribute
Thank you for your [contribution](https://github.com/suiyingsky/nav/issues), men.

<a href="https://github.com/YutHelloWorld">
  <img src="https://avatars1.githubusercontent.com/u/20860159?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/JJJTHuang">
  <img src="https://avatars3.githubusercontent.com/u/22817432?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/Fechin">
  <img src="https://avatars1.githubusercontent.com/u/2541482?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/setdiaoyong">
  <img src="https://avatars1.githubusercontent.com/u/62551864?s=460&v=4" width="30px" height="30px" />
</a>






## Suggest
If you have any functional suggestions, you can initiate an [issue](https://github.com/suiyingsky/nav/issues), Thank you.

## LICENSE
[MIT](./LICENSE)
