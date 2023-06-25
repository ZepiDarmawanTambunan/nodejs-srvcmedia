const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
    }, {
        tableName: 'media',
    });

    return Media;
}