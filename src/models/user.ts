import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface UserAttributes {
    id?: number;
    roleId: number;
    username: string;
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
    roleId: {
        allowNull: true,
        field: 'role_id',
        type: DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
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
