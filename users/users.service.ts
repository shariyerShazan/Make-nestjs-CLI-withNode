import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getData() {
    return 'Users service working!';
  }
}
