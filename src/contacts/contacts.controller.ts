import { Contact } from './contact.entity';
import { Controller, Post, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post()
  async createAdminUser(@Body() contact: Contact): Promise<any> {
    await this.contactsService.create(contact);
    return {
      message: 'Contato cadastrado com sucesso',
    };
  }
}
