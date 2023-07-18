import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExpensesModule } from "./expenses/expenses.module";

@Module({
	imports: [
		ExpensesModule,
		TypeOrmModule.forRoot({
			type: "sqlite",
			database: "expenses.sql",
			synchronize: true,
			autoLoadEntities: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
