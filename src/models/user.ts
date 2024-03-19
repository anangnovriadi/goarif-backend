import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface UserAttributes {
    id: string;
    roleId: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes { 
    created_at?: Date;
    updated_at?: Date; 
}

const User = sequelize.define<UserInstance>('User', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    roleId: {
        allowNull: true,
        field: 'role_id',
        type: DataTypes.INTEGER,
    },
    firstname: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastname: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
}, { 
    timestamps: true,
    underscored: true
});

export default User;
