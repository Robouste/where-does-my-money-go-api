import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class AppService {
	constructor(private _dataSource: DataSource) {}

	public getHello(): string {
		console.log(this._dataSource);
		return "Hello World!";
	}
}
