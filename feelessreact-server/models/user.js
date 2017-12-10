const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		first_name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		last_name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		password_hash: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	});
	Users.associate = (models) => {
		models.Users.hasMany(models.Requests);
	}

	Users.beforeCreate((user) =>
	new sequelize.Promise((resolve) => {
		bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
			resolve(hashedPassword);
		});
	}).then((hashedPassword) => {
		user.password_hash = hashedPassword;
	})
);
	return Users;
}
