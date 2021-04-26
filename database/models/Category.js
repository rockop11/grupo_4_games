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

    Category.associate = function(models){

        Category.hasMany(models.Products,{
            as:'products',
            foreignKey: 'category_id'
        })

    }
    return Category;

}