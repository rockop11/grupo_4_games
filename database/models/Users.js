module.exports = (sequelize, dataTypes) =>{
    let alias = 'Users';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: dataTypes.STRING(100),
        email: dataTypes.STRING(100),
        password: dataTypes.STRING(100),
        // repeatPassword: dataTypes.STRING(100),
        image: dataTypes.STRING(100),
        address: dataTypes.STRING(100),
        location: dataTypes.STRING(100),
        postalCode: dataTypes.STRING(20),
        phone: dataTypes.STRING(20),
        isAdmin: dataTypes.BOOLEAN
    };
    let options = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias,cols,options);
    return User;

}
