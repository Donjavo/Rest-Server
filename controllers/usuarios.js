const {response,request} = require('express');
//* obtenemos los parametros del query
const usuariosGet=(req, res=response) => {
    const {geo,lat}= req.query;
    res.json({
        ok:true,
        msg:'get API - Controlador',
        geo,lat
    })
};
const usuariosPost=(req=request, res=response) => {
    const {nombre,edad,id} =req.body;
    res.json({
        ok:true,
        msg:'Post API - Controlador',
        nombre,edad,id
    })
};
const usuariosPut=(req, res=response) => {
    res.json({
        ok:true,
        msg:'Put API - Controlador'
    })
};
const usuariosPatch=(req, res=response) => {
    res.json({
        ok:true,
        msg:'Patch API - Controlador'
    })
};
const usuariosDelete=(req, res=response) => {
    res.json({
        ok:true,
        msg:'Delete API - Controlador'
    })
}



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}