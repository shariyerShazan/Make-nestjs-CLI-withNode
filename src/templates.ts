exports.moduleTemplate = (name) => `import { Module } from '@nestjs/common';
import { ${name}Controller } from './${name}.controller';
import { ${name}Service } from './${name}.service';

@Module({
  controllers: [${name}Controller],
  providers: [${name}Service],
})
export class ${name}Module {}
`;

exports.controllerTemplate = (name) => `import { Controller, Get } from '@nestjs/common';
import { ${name}Service } from './${name}.service';

@Controller('${name.toLowerCase()}')
export class ${name}Controller {
  constructor(private readonly ${name.toLowerCase()}Service: ${name}Service) {}

  @Get()
  getData() {
    return this.${name.toLowerCase()}Service.getData();
  }
}
`;

exports.serviceTemplate = (name) => `import { Injectable } from '@nestjs/common';

@Injectable()
export class ${name}Service {
  getData() {
    return '${name} service working!';
  }
}
`;
