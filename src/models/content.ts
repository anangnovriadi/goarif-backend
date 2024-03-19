import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface ContentAttributes {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
};

interface ContentCreationAttributes extends Optional<ContentAttributes, 'id' | 'description'> {}

interface ContentInstance extends Model<ContentAttributes, ContentCreationAttributes>, ContentAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Content = sequelize.define<ContentInstance>('Content', {
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
    isActive: {
        allowNull: true,
        field: 'is_active',
        type: DataTypes.BOOLEAN,
    }
}, { 
    timestamps: true,
    underscored: true
});

export default Content;
