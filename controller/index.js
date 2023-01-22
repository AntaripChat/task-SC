const help = require('../model/help.mode');
const home = (req,res) =>{
    res.send('Hello,Welcome to ABC');
};

const data = async (req,res) =>{
    const data = new help({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const showdata = async (req, res) => {
    try {
        const data = await help.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    home,
    data,
    showdata
}