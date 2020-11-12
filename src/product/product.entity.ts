import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, default: "Eli"})
    name: string;

    @Column({nullable: true, default: "eli descrtipion"})
    description: string;

    @Column({nullable: true, default: "203"})
    price: string;
}
