import DataSchema from '../models/datos.model';

const getData= async (req,res)=>{

    let data = await DataSchema.find()
    res.json(data);

}


const addData = async(req, res) => {
    const { latitude, longitude,nombre} = req.body;

    console.log(latitude, longitude,nombre);

    const newData = new DataSchema({
        nombre,latitude, longitude
    });
    const saveData = await newData.save();

    res.json({ message: 'get add',Data: saveData})
}


module.exports = {  
    getData,
    addData

}