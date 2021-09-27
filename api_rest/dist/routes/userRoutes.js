"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir

// router.get('/', UserController.index); // Lista os usuários
// router.get('/:id', UserController.show); // Mostra um usuário

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index ==> Lista todos os usuários ==> GET
store/create ==> Cria um novo usuário ==> POST
delete ==> Apaga um usuário ==> DELETE
show ==> Mostra um usuário ==> GET
update ==> Atualiza um usuário ==> PATCH OU PUT
*/
