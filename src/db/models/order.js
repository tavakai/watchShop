const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Order.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
