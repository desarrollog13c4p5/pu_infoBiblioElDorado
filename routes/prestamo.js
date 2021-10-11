import express from 'express';
const router = express.Router();

// importar el modelo prestamo
import Prestamo from '../models/prestamo';

// Agregar una prestamo
router.post('/nuevo-prestamo', async(req, res) => {
  const body = req.body;  
  try {
    const prestamoDB = await Prestamo.create(body);
    res.status(200).json(prestamoDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


  router.delete('/prestamo/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const prestamoDb = await Prestamo.findByIdAndDelete({_id});
      if(!prestamoDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(prestamoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Put actualizar una prestamo
router.put('/prestamo/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const prestamoDb = await Prestamo.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(prestamoDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Get con parámetros
router.get('/prestamo/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const prestamoDB = await Prestamo.findOne({_id});
    res.json(prestamoDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/prestamo', async(req, res) => {
  try {
    const prestamoDb = await Prestamo.find();
    res.json(prestamoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;