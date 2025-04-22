'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Purchase.belongsTo(models.Product, {
        foreignKey: "productID"
      })

      Purchase.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  Purchase.init({
    userId: DataTypes.STRING,
    productID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};