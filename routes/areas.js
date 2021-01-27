import express from 'express';

import {
  getAreas,
  createArea,
  updateArea,
  deleteArea,
} from '../controllers/areas';

const router = express.Router();

router.get('/', getAreas);
router.post('/', createArea);
router.patch('/:id', updateArea);
router.delete('/:id', deleteArea);

export default router;
