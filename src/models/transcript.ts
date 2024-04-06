import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config';

interface TranscriptAttributes {
    id?: number;
    deepgramId: string;
    fileName: string;
    result: any;
    status: string;
};

interface TranscriptCreationAttributes extends Optional<TranscriptAttributes, 'id' | 'fileName'> {}

interface TranscriptInstance extends Model<TranscriptAttributes, TranscriptCreationAttributes>, TranscriptAttributes {
    created_at?: Date;
    updated_at?: Date; 
}

const Transcript = sequelize.define<TranscriptInstance>('Transcript', {
    deepgramId: {
        allowNull: false,
        field: 'deepgram_id',
        type: DataTypes.STRING,
    },
    fileName: {
        allowNull: true,
        field: 'file_name',
        type: DataTypes.STRING,
    },
    result: {
        allowNull: true,
        field: 'result',
        type: DataTypes.JSONB,
    },
    status: {
        allowNull: true,
        field: 'status',
        type: DataTypes.BOOLEAN,
    }
}, { 
    timestamps: true,
    underscored: true
});

export default Transcript;
