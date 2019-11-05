const Register = require("./../models/register");

const insert =(req,res)=>{
    const student = new Register(req.body);
    student.save((error,document)=>{
        if(error)
        res.status(500).json({
            msg: "hubo un error"
        });
        return res.status(201).json({
            msg: "creado",
            register: document
        })
    });
};
const getRegister = (req, res)=>{
    Register.find({}, (error,documents)=>{
        if(error)
        res.status(500).json({
            msg: "hubo un error"
        });
        return res.status(200).json({
            msg: "ok",
            register: documents
        });
    });
};

const getOneRegister = (req, res)=>{
    Register.findbyId(req.params.id, (error,document)=>{
        if(error)
            res.status(500).json({
            msg: "hubo un error"
        });
        return res.status(200).json({
            msg: "ok",
            register: document
        });
    });
};
module.exports={
    getRegister,
    insert,
    getOneRegister
};