import express from 'express';

import { getItems, createItem } from '../controllers/items';

const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);

export default router;
