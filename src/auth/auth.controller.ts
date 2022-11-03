import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthServiceP } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServiceP) {}
  // request object @Req() request: Request
  // @Get()
  // findAll(@Req() request: Request): { key: string } {
  //   console.log(request.query);
  //   return { key: 'value' };
  // }

  // status OK => res to json([])
  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   return [];
  // }

  // @Post('testpost')
  // async create(@Body() createAuthDto: CreateAuthDto) {
  //   this.authService.create(createAuthDto);
  //   return 'created';
  // }

  @Get()
  findAll(): Promise<Auth[]> {
    return this.authService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateAuthDto): Promise<Auth[]> {
    return this.authService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  }

  // @Post('signup')
  // signup(): { msg: string } {
  //   return { msg: 'success' };
  // }
  // @Post()
  // create(): string {
  //   return 'this action adds a new auth';
  // }

  // @Get('ab*cd')
  // test(): string {
  //   return 'This route uses a wildcard';
  // }

  // status code is always 200 except post is 201
  // change behaviour by add @HttpCode(...) at a handler level
  // 204: no-content
  // configuration: using @Header or res.header()
  // @Get('httptestcode')
  // @Header('Cache-Control', 'none')
  // testHttpCode(): string {
  //   return 'This route uses a test htttp code';
  // }

  // To redirect a response to a specific URL
  // @Get('redirectres')
  // @Redirect('https://nestjs.com', 301)
  // redirectRes(): string {
  //   return 'This route uses a test redirectRes';
  // }

  //catch Query request using Query
  // @Get('redirectresv2')
  // @Redirect('https://nestjs.com', 302)
  // redirectResV2(@Query('version') version): { url: string } {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  // Asynchronicity
  // @Get('testasync')
  // async findAllv2(): Promise<any[]> {
  //   return [];
  // }

  // // Request payloads
  // @Post('createauth')
  // async createTest(@Body() createAuthDto: CreateAuthDto) {
  //   console.log(createAuthDto);
  //   return 'This action adds new auth';
  // }

  // Route parameters
  // params: path nằm sau /
  // query : nằm sau ?
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
}
