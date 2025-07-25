import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMessageDto: CreateMessageDto) {
    return await this.prisma.message.create({
      data: createMessageDto,
    });
  }

  async findOne(id: string) {
    return await this.prisma.message.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.message.findMany();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return await this.prisma.message.update({
      where: { id },
      data: updateMessageDto,
    });
  }

  async delete(id: string) {
    return await this.prisma.message.delete({
      where: { id },
    });
  }

  async getMessagesByConversationId(conversationId: string) {
    return await this.prisma.message.findMany({
      where: { conversationId },
      orderBy: {
        createdAt: 'asc', // Tri par date de création croissante (plus ancien en premier)
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });
  }
}
