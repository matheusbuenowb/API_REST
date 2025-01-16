import { Router} from 'express';
import AlunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router;

router.get('/', AlunoController.index);
router.post('/', loginRequired ,AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;


/*index -> lista todos os usuarios  -> GET
store/create -> cria um novo usuario  -> POST
delete -> apaga um usuário  -> DELETE
show -> mostra um usuário  -> GET
update -> atualiza um usuario    -> PATCH ou PUT
*/
