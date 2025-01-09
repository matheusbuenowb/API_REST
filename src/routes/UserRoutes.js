import { Router} from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router;

router.get('/:id', UserController.show);
router.get('/', loginRequired, UserController.index);
//isso não deveria existir
// por que listar todos os usuários?

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuarios  -> GET
store/create -> cria um novo usuario  -> POST
delete -> apaga um usuário  -> DELETE
show -> mostra um usuário  -> GET
update -> atualiza um usuario    -> PATCH ou PUT

*/
