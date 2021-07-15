import {
    ApiProperty
} from '@nestjs/swagger';
import {
    IsNotEmpty,
} from 'class-validator';

export class CreateRecordDto {
    id: number;

    @ApiProperty({
        example: 'jon_snow',
        description: 'Hero name'
    })
    @IsNotEmpty()
    heroname: string;

    creationTime: Date;
}
