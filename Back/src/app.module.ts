import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './modules/person/person.module';
import { CardModule } from './modules/card/card.module';

@Module({
  imports: [PersonModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
