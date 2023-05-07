import { Module } from '@nestjs/common'
import {UserController} from './user.controller'
import {PrismaService } from '@app/services/PrismaService'

@Module({
    imports: [],
    controllers: [UserController],
    providers: [PrismaService]
})
export class UserModule{}