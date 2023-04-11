let express = require('express')

const router = express.Router();
let userController = require('../src/user/userController')

router.route('/user/getAll').get(userController.getDAtaControllerfn);

router.route('/user/create').post(userController.createUserControllerfn);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router