import { Router } from 'express';
import { 
    createNewUser, 
    deleteOneUser, 
    getAllUsers, 
    getOneUser, 
    updateOneUser 
} from '../../controllers/userController.js';

const router = Router();
router
    .get('/', getAllUsers )
    .get('/:userId', getOneUser )
    .post('/', createNewUser )
    .put('/:userId', updateOneUser )
    .delete('/:userId', deleteOneUser )

export default router;