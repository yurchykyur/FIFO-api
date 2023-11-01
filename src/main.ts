import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3001;
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    await app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`),
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
bootstrap();
