import Sequelize, { Model, VIRTUAL } from 'sequelize';
//import { SequelizeMethod } from 'sequelize/lib/utils';
import appConfigs from '../config/appConfigs';

export default class Foto extends Model {
  static init(sequelize){
    super.init({
      originalname: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio'
          }
        }
      },
      filename: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,

        get(){
          return `${appConfigs.url}/images/${this.getDataValue('filename')}`;
        }
      }
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, {
      foreignKey: 'aluno_id'
    });
  }
}
