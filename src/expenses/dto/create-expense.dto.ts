export class CreateExpenseDto {
	type: string;
	name: string;
	amount: number;
	date: Date;
}

export type UpdateExpenseDto = CreateExpenseDto;
