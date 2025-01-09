import { Router} from 'express';
import AlunoController from '../controllers/AlunoController';


const router = new Router;

router.get('/', AlunoController.index);
router.post('/', AlunoController.store);
router.put('/:id', AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', AlunoController.delete);

export default router;


/*index -> lista todos os usuarios  -> GET
store/create -> cria um novo usuario  -> POST
delete -> apaga um usuário  -> DELETE
show -> mostra um usuário  -> GET
update -> atualiza um usuario    -> PATCH ou PUT
*/
