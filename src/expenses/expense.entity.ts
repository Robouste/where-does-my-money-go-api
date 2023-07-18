import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public type: string;

	@Column()
	public name: string;

	@Column({ type: "float" })
	public amount: number;

	@Column()
	public date: Date;
}
