import { request, response } from 'express';
import { 
    getAllUsers as getAllUsersService,
    getOneUser as getOneUserService,
    createNewUser as createNewUserService,
    updateOneUser as updateOneUserService,
    deleteOneUser as deleteOneUserService
} from '../services/userServices.js'


export const getAllUsers = ( req = request, res = response) => {
    const allUsers = getAllUsersService();
    res.send('Get all users');
}

export const getOneUser = ( req = request, res = response) => {
    const user = getOneUserService();
    res.send('Get one user');
}

export const createNewUser = ( req = request, res = response) => {
    const createdUser = createNewUserService();
    res.send('Create a new user');
}

export const updateOneUser = ( req = request, res = response) => {
    const updatedUser = updateOneUserService();
    res.send('Update one user');
}

export const deleteOneUser = ( req = request, res = response) => {
    const deletedUser = deleteOneUserService();
    res.send('Delete an existing user');
}