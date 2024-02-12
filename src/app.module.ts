import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './modules/employee.module';
import { CompanyModule } from './modules/company.module';
import { AwardsModule } from './modules/awards.module';
import { EmployeeAwardsModule } from './modules/employee-awards.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://trainingdli2:ClBJf4zYSnYivavf@cluster0.ojexm4z.mongodb.net/hrms?retryWrites=true&w=majority'),
    EmployeeModule,
    CompanyModule,
    AwardsModule,
    EmployeeAwardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
