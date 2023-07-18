import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UpdateResult } from "typeorm";
import { CreateExpenseDto, UpdateExpenseDto } from "./dto/create-expense.dto";
import { Expense } from "./expense.entity";
import { ExpensesService } from "./expenses.service";

@Controller("expenses")
export class ExpensesController {
	constructor(private _expensesService: ExpensesService) {}

	@Get()
	public get(): Promise<Expense[]> {
		return this._expensesService.findAll();
	}

	@Post()
	public add(@Body() dto: CreateExpenseDto): Promise<Expense> {
		return this._expensesService.create(dto);
	}

	@Put(":id")
	public update(@Param("id") id: number, @Body() dto: UpdateExpenseDto): Promise<UpdateResult> {
		return this._expensesService.update(id, dto);
	}

	@Delete(":id")
	public delete(@Param("id") id: string): Promise<void> {
		return this._expensesService.remove(id);
	}
}
