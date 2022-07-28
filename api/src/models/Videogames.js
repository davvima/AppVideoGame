const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release:{
      type: DataTypes.DATEONLY,
    },
    rating:{
      type: DataTypes.FLOAT,
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    created:{
      type:DataTypes.BOOLEAN
    }
    
  });
};
