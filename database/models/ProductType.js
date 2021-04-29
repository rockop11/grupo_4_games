module.exports = (sequelize, dataTypes) =>{
    let alias = 'ProductType';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING(100),
    };
    let options = {
        tableName: 'product_Type',
        timestamps: false
    };

    const ProductType = sequelize.define(alias,cols,options);

    ProductType.associate = function(models){

        ProductType.hasMany(models.Products,{
            as:'products',
            foreignKey: 'product_type_id'
        })

    }

    return ProductType;

}
