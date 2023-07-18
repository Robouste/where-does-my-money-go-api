import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { CreateExpenseDto, UpdateExpenseDto } from "./dto/create-expense.dto";
import { Expense } from "./expense.entity";

@Injectable()
export class ExpensesService {
	constructor(
		@InjectRepository(Expense)
		private _repository: Repository<Expense>,
		private _dataSource: DataSource
	) {}

	public findAll(): Promise<Expense[]> {
		return this._repository.find({
			order: {
				date: "ASC",
			},
		});
	}

	public findOne(id: number): Promise<Expense> {
		return this._repository.findOneBy({ id });
	}

	public create(dto: CreateExpenseDto): Promise<Expense> {
		const expense = new Expense();
		expense.type = dto.type;
		expense.name = dto.name;
		expense.amount = dto.amount;
		expense.date = dto.date;

		return this._repository.save(expense);
	}

	public async update(id: number, dto: UpdateExpenseDto): Promise<UpdateResult> {
		const expense = await this.findOne(id);

		if (expense == null) {
			throw Error("Not Found");
		}

		expense.type = dto.type;
		expense.name = dto.name;
		expense.amount = dto.amount;
		expense.date = dto.date;

		return this._repository.update(expense.id, expense);
	}

	public async remove(id: string): Promise<void> {
		await this._repository.delete(id);
	}
}
