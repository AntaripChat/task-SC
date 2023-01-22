let product = [
    {
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
    },
    {
        "title": "iPhone 10",
        "description": "An apple mobile which is nothing like apple",
        "price": 649,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
    },
    {
        "title": "Running Shoes",
        "description": "An apple mobile which is nothing like apple",
        "price": 649,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Adidas",
        "category": "Shoes",
    }
];


const products = (req,res) =>{
    res.send(product);
};

const addproducts = (req,res) =>{
    const add = req.body;
    product.push(add);
    res.send(`${add.title} saved`);
};


module.exports = {
    products,
    addproducts
}