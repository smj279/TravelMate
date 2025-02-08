module.exports = (sequelize,DataTypes) =>{
 const Clients = sequelize.define("Clients", {
   name: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
  },
   email: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   password: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   address: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   phone: {
       type: DataTypes.INTEGER,
       allowNull: false,
},

 });

 return Clients; 
}


