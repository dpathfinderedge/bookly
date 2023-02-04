import { Router } from 'express';
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = Router();

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:id', verifyAdmin, updateHotel);

// DELETE
router.delete('/find/:id', verifyAdmin, deleteHotel);

// GET
router.get('/:id', getHotel);

// GET ALL
router.get('/', getHotels);


// GET
router.get('/contByCity', countByCity);

// GET ALL
router.get('/countByType', getHotels);

export default router;