import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface ProductAttributes {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
};

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'description'> {}

interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Product = sequelize.define<ProductInstance>('Product', {
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

export default Product;
