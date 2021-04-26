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
        images: dataTypes.STRING(100),
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
    return Product;

}


