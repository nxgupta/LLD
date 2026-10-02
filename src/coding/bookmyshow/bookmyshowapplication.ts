import { AppDataSource } from "./data-source.js";
import { UserController } from "./controllers/User.controller.js";
import { CreateUserRequestDto } from "./dtos/CreateUserRequest.dto.js";
import { ObjectRegistry } from "./ObjectRegistry.js";
import { UserRepository } from "./repositories/User.repository.js";
import { UserService } from "./services/User.service.js";


ObjectRegistry.register('UserRepository', new UserRepository())
ObjectRegistry.register('UserService', new UserService(ObjectRegistry.get<UserRepository>('UserRepository')))
ObjectRegistry.register('UserController', new UserController(ObjectRegistry.get<UserService>('UserService')))
class Client {
    async start() {
        await AppDataSource.initialize();
        const createUserRequestDto = new CreateUserRequestDto();
        createUserRequestDto.email = "neer3@gmail.com";
        const userController = ObjectRegistry.get<UserController>('UserController')
        const user = await userController.createUser(createUserRequestDto);
        console.log(user);
    }
}

new Client().start().catch(console.error);