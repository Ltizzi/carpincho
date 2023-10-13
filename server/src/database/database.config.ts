import { ConfigService } from '@nestjs/config';

export const databaseConfig = (configService: ConfigService) => ({
  uri: configService.get('MONGODB'),
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
