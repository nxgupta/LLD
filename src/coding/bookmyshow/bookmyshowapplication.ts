import 'reflect-metadata';
import { AppDataSource } from "./data-source.js";
import { UserController } from "./controllers/User.controller.js";
import { CreateUserRequestDto } from "./dtos/CreateUserRequest.dto.js";
import { ObjectRegistry } from "./ObjectRegistry.js";
import { UserRepository } from "./repositories/User.repository.js";
import { UserService } from "./services/User.service.js";
import { CityRepository } from "./repositories/City.repository.js";
import { CityService } from "./services/City.service.js";
import { CityController } from "./controllers/City.controller.js";


ObjectRegistry.register('UserRepository', new UserRepository())
ObjectRegistry.register('UserService', new UserService(ObjectRegistry.get<UserRepository>('UserRepository')))
ObjectRegistry.register('UserController', new UserController(ObjectRegistry.get<UserService>('UserService')))

ObjectRegistry.register('CityRepository', new CityRepository());
ObjectRegistry.register('CityService', new CityService(ObjectRegistry.get<CityRepository>('CityRepository')));
ObjectRegistry.register('CityController', new CityController(ObjectRegistry.get<CityService>('CityService')));
class Client {
    async start() {
        await AppDataSource.initialize();
        // const createUserRequestDto = new CreateUserRequestDto();
        // createUserRequestDto.email = "neer3@gmail.com";
        // const userController = ObjectRegistry.get<UserController>('UserController')
        // const user = await userController.createUser(createUserRequestDto);
        // console.log(user);
        // await ObjectRegistry.get<CityController>('CityController').addCity('Chandigarh')
    }
}

new Client().start().catch(console.error);