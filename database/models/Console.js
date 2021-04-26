module.exports = (sequelize, dataTypes) =>{
    let alias = 'Console';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING(100),
    };
    let options = {
        tableName: 'console',
        timestamps: false
    };

    const Console = sequelize.define(alias,cols,options);

    Console.associate = function(models){

        Console.hasMany(models.Products,{
            as:'products',
            foreignKey: 'console_id'
        })

    }

    return Console;

}