import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface RoleAttributes {
    id: string;
    name: string;
    description: string;
};

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id' | 'description'> {}

interface RoleInstance extends Model<RoleAttributes, RoleCreationAttributes>, RoleAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Role = sequelize.define<RoleInstance>('Role', {
    id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING,
    },
}, { 
    timestamps: true,
    underscored: true
});

export default Role;
