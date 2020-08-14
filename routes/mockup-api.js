const path = require('path');
const express = require('express');
const router = express.Router();
const {
    takeScreenshot
} = require('../utils/crawler.js');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const OVERLAYDEVICE = {
    phone: { name: 'iPhone_l2uxdl', width: 826, height: 1692, x: 0, y: 0 },
    laptop: { name: 'macbook_iggsml', width: 3626, height: 2110, x: 0, y: 0 },
    desktop: { name: 'iMac_bmhro3', width: 4148, height: 3424, x: 10, y: 478 },
}


/* GET home page. */
router.get('/', (req, res, next) => {
    res.send({ express: 'connected to express API' });
});


router.post('/', async (req, res, next) => {
    const { url, device } = req.body;
    console.log(`Requesting mockup of ${url} on ${device} at ${new Date()}`)
    const generatedFileName = await takeScreenshot(url, device);


    if (generatedFileName) {
        let filePath = path.join(__dirname, `../uploads/${generatedFileName}.png`);

        const overlayDevice = device == 'phone' ? OVERLAYDEVICE.phone : device === 'laptop' ? OVERLAYDEVICE.laptop : OVERLAYDEVICE.desktop;

        cloudinary.uploader.upload(filePath, {
            overlay: overlayDevice.name,
            width: overlayDevice.width,
            height: overlayDevice.height,
            crop: "scale",
            x: overlayDevice.x,
            y: overlayDevice.y
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.json({ msg: 'An error occured when trying to upload image' })
            }

            // after image has been uploaded to cloudinary, remove from filesystem
            fs.unlink(path.join(__dirname, `../uploads/${generatedFileName}.png`), (err) => {
                if (err && err.code == 'ENOENT') {
                    // file doens't exist
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    // other errors, e.g. maybe we don't have enough permission
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed image from filesystem`);
                }
            })
            console.log(result)
            const cloudinaryImageSource = result.secure_url;
            return res.status(201).json({ image: cloudinaryImageSource });
        });
    } else {
        return res.json({ msg: 'Could not navigate to page' })
    }

});


module.exports = router;
