import User from '../models/User';

class UserController {


  //Store


  async store(req, res){
    try{
      const novoUser = await User.create(req.body);
      const {id, nome, email} = novoUser;
      return res.json({id, nome, email});
    }
    catch (e){
      return res.status(400).json('Deu um erro: ' + e);

      //ou ainda pelo professor:

     /* res.status(400).json({
        errors: e.erros.map((err) => err.mensage)
      });*/
    }
  }


  //Index

  async index(req, res){
    try{
      const users = await User.findAll({
        attributes : ['id', 'nome', 'email']
      });
      return res.json(users);
    }
    catch (e){
      return res.json(e);
    }
  }

  //Show

  async show(req, res){
    try{
      //achar pela primary key
      const user = await User.findByPk(req.params.id);

      const {id, nome, email } = user;

      return res.json({id, nome, email });
    }
    catch (e){
      return res.json(e);
    }
  }

  //Update


  async update(req, res){
    try{

      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe!']
        });
      }

      const novosDados = await user.update(req.body);

      const {id, nome, email} = novosDados;

      return res.json({id, nome, email});
    }
    catch (e){
      return res.status(400).json('Deu um erro: ' + e);

    }
  }

  //Delete

  async delete(req, res){
    try{

    /*  if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado']
        });
      }*/
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe!']
        });
      }

      await user.destroy();

      return res.json("Usuário apagado!");
    }
    catch (e){
      return res.status(400).json('Deu um erro: ' + e);

    }
  }


}


export default new UserController();

