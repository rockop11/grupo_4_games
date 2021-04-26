module.exports = (sequelize, dataTypes) =>{
    let alias = 'Category';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING(100),
    };
    let options = {
        tableName: 'category',
        timestamps: false
    };

    const Category = sequelize.define(alias,cols,options);
    return Category;

}