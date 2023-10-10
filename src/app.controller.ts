import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAsync(name: string): Promise<string> {
    return `Hello ${name} Async`;
  }

  @EventPattern('greeting-async')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}
