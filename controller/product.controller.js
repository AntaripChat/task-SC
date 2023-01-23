const product = require('../model/products.model');

// const products = (req,res) =>{
//     res.send(product);
// };

// const addproducts = (req,res) =>{
//     const add = req.body;
//     product.push(add);
//     res.send(`${add.title} saved`);
// };
const showdata = async (req, res) => {
    try {
        const data = await product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const productsData = async (req, res) => {
    const data = new product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        productDetails: req.body.productDetails,
        cities: req.body.cities
    })

    try {
        const dataToSave = await data.save();
        res.json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const productByCities = async (req, res) => {
    console.log(req.params.key);
    try {
        const data = await product.find(
            {
                "$or": [
                    { cities: { $regex: req.params.key } }
                ]
            },
        );
        if (!data.length) {
            res.send(`Sorry we are not available in ${req.params.key}.We are only available Deihi,Mumbai,Chennai and Kolkata`);
        } else {
            res.send(data);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    productsData,
    showdata,
    productByCities
}