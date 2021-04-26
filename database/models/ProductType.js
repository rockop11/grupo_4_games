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
        tableName: 'productType',
        timestamps: false
    };

    const ProductType = sequelize.define(alias,cols,options);
    return ProductType;

}
