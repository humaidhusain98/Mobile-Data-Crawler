const express = require('express');
const router = express.Router();
const PhoneCollections = require('../models/phoneCollectionSchema');
const scrapeMobileData = require('../scraper/mobileScraper');

router.get('/phones/brand', async (req, res) => {
    const brand = req.query.brand;
    console.log('Fetching Phones....');

    try {
        let phones;

        if (brand) {
          
            console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
                brand: new RegExp(brand.replace(/_/g, ' '), 'i')
            }).limit(6) ;

            if (phones.length === 0) {
                return res.status(404).json({ message: `No phones found for brand: ${brand}` });
            }
        } else {
            phones = await PhoneCollections.find().limit(6);
        }

        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
});


router.post('/getDeviceById', async (req, res) => {
    const {deviceId} = req.body
    console.log('Fetching Device by Id '+deviceId);

    try {
        let phone = await PhoneCollections.findById(deviceId)
        res.status(200).json([phone]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
});

router.get('/scrapeDevice',async(req,res)=>{
    try{
        const {model} = req.query;
        if(!model){
            res.status(400).json({error:"model required in query"});
        }
        else{
            const scrapeResponse = await scrapeMobileData(model);
            res.status(200).json({message:"Successfully Scraped "+scrapeResponse});
        }
       
    }
    catch(error){
        console.log("Error Occured while scraping phone " +e);
        res.status(500).json({ message: 'Error Scraping phones', error });
    }
})


router.post('/getDevicesTable',async(req,res)=>{


    try {
        let phones;
            // console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
            },{brand:1,price:1,releaseDate:1,image:1,misc:1,platform:1,display: 1}).limit(12) ;
        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
})


router.post('/under200Dollars',async(req,res)=>{

    console.log('Fetching Phones....');

    try {
        let phones;
          
            // console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
                price: { $lt: 300}
            },{brand:1,price:1,releaseDate:1,image:1}).limit(12);



        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
})

router.post('/flagships',async(req,res)=>{

    console.log('Fetching Phones....');

    try {
        let phones;
          
            // console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
                price: { $gt: 500}
            },{brand:1,price:1,releaseDate:1,image:1}).limit(12) ;



        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
})

router.post('/popular',async(req,res)=>{

    console.log('Fetching Phones....');

    try {
        let phones;
          
            // console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
            },{brand:1,price:1,releaseDate:1,image:1}).limit(12) ;



        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
})



router.post('/getPhonesOfBrand',async(req,res)=>{
    const {brand} = req.body;
    console.log('Fetching Phones....');

    try {
        let phones;

        if (brand) {
          
            console.log(`Fetching phones for brand: ${brand}`);
            phones = await PhoneCollections.find({ 
                brand: new RegExp(brand, 'i')
            },{brand:1,price:1,releaseDate:1,image:1,misc:1,platform:1}).limit(10) ;

            if (phones.length === 0) {
                return res.status(404).json({ message: `No phones found for brand: ${brand}` });
            }
        } else {
            phones = await PhoneCollections.find().limit(12);
        }

        console.log("Phones:", phones);
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching phones', error });
        console.error(error);
    }
})




router.post('/scrapeDevicesList',async(req,res)=>{
    try{
        const {scrapeList} = req.body;
        if(!scrapeList || !Array.isArray(scrapeList)){
            res.status(400).json({error:"scrapeList required in body which needs to be a list"});
        }
        else{
            let operationsList = [];
            for(let model of scrapeList){
                try{
                    const scrapeResponse = await scrapeMobileData(model);
                    operationsList.push(scrapeResponse);
                }
                catch(e){
                    console.log("Error occured on " +model+". The Erro "+e);
                    operationsList.push(false);
                }
               
            }
          
            res.status(200).json({result: operationsList});
        }
       
    }
    catch(error){
        console.log("Error Occured while scraping phone " +e);
        res.status(500).json({ message: 'Error Scraping phones', error });
    }
})



module.exports = router;
