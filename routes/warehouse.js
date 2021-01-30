import express from 'express';

import {
  getWarehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
} from '../controllers/warehouse';

const router = express.Router();

router.get('/', getWarehouse);
router.post('/', createWarehouse);
router.patch('/:id', updateWarehouse);
router.delete('/:id', deleteWarehouse);

export default router;
