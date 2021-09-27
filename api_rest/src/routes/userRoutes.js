import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir

// router.get('/', UserController.index); // Lista os usuários
// router.get('/:id', UserController.show); // Mostra um usuário

router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index ==> Lista todos os usuários ==> GET
store/create ==> Cria um novo usuário ==> POST
delete ==> Apaga um usuário ==> DELETE
show ==> Mostra um usuário ==> GET
update ==> Atualiza um usuário ==> PATCH OU PUT
*/
