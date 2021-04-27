module.exports = (sequelize, dataTypes) =>{
    let alias = 'Products';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING(100),
        description: dataTypes.TEXT,
        image: dataTypes.STRING(100),
        price: dataTypes.MEDIUMINT,
        discount: dataTypes.TINYINT,
        product_type_id: dataTypes.BIGINT(10),
        category_id: dataTypes.BIGINT(10),
        console_id: dataTypes.BIGINT(10),
    };
    let options = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias,cols,options);

      Product.associate = function(models){

        Product.belongsTo(models.Category,{
            as:'categories',
            foreignKey:'category_id'
        })
        
        Product.belongsTo(models.Console,{
            as:'consoles',
            foreignKey:'console_id'
        })

    
        Product.belongsTo(models.ProductType,{
            as:'productTypes',
            foreignKey:'product_type_id'
        })

    }

    return Product;

}




