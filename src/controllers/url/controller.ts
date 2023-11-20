import { Controller, Get, Post } from '@nestjs/common';

@Controller('v1')
export class URLController {
  constructor() {}

  @Get('/url')
  async getURL() {
    return {
      message: 'OK',
    };
  }

  @Post('/url')
  async postURL() {
    return {
      message: 'OK',
    };
  }
}
