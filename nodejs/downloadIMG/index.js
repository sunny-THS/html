const fs = require('fs');
const puppeteer = require('puppeteer');
const downloadIMG = require('image-downloader');

function getLargestImageFromSrcSet(srcSet) {
  const spliteSrcs = srcSet.split(',');
  const imgSrc = spliteSrcs[spliteSrcs.length-1].split(' ')[0];
  return imgSrc;
}

async function getImagesFromPage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const imageSrcSets = await page.evaluate(() =>{
    const imgs = Array.from(document.querySelectorAll('article img'));
    const srcSetAttribute = imgs.map(i => i.getAttribute('srcset'));
    return srcSetAttribute;
  });

  const imgUrls = imageSrcSets.map(srcSet => getLargestImageFromSrcSet(srcSet))
  await browser.close();
  return imgUrls;
}
async function main() {
  const resultFolder = './result';
  if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder);
  }
  const imgSrc = 'https://www.instagram.com/hot_sexy_asian_girrls/';
  const images = await getImagesFromPage(imgSrc);
  images.forEach(image => {
    downloadIMG({
        url : image,
        dest : resultFolder
    });
  });
}
main();
