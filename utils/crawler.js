const puppeteer = require('puppeteer');


const takeScreenshot = async (url, device) => {

    let options = device === 'phone' ?
        { width: 375, height: 812, deviceScaleFactor: 2 } : device === "laptop" ?
            { width: 1440, height: 900, deviceScaleFactor: 2 } : { width: 1920, height: 1080, deviceScaleFactor: 2 }

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage();
    // deviceScaleFactor makes the image quality much better
    await page.setViewport(options);
    try {
        await page.goto(`https://${url}`);
        // wait for pageload
        await page.waitFor(2000);
        const generatedFileName = `${Date.now()}`;
        await page.screenshot({ fullPage: false, path: `./uploads/${generatedFileName}.png` });
        await browser.close();
        return generatedFileName;

    } catch (err) {
        console.log(err.message)
        return false;
    }
};

module.exports = { takeScreenshot };