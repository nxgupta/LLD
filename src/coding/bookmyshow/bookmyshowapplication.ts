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
import { TheatreRepository } from './repositories/Theatre.repository.js';
import { TheatreService } from './services/Theatre.service.js';
import { TheatreController } from './controllers/Theatre.controller.js';
import { AuditoriumRepository } from './repositories/Auditorium.repository.js';
import { AuditoriumService } from './services/AuditoriumService.js';
import { AuditoriumController } from './controllers/Auditorium.controller.js';
import { ShowRepository } from './repositories/Show.repository.js';
import { ShowService } from './services/Show.service.js';
import type { MovieRepository } from './repositories/Movie.repository.js';
import { ShowController } from './controllers/Show.controller.js';


ObjectRegistry.register('UserRepository', new UserRepository())
ObjectRegistry.register('UserService', new UserService(ObjectRegistry.get<UserRepository>('UserRepository')))
ObjectRegistry.register('UserController', new UserController(ObjectRegistry.get<UserService>('UserService')))

ObjectRegistry.register('CityRepository', new CityRepository());
ObjectRegistry.register('CityService', new CityService(ObjectRegistry.get<CityRepository>('CityRepository')));
ObjectRegistry.register('CityController', new CityController(ObjectRegistry.get<CityService>('CityService')));

ObjectRegistry.register('TheatreRepository', new TheatreRepository())
ObjectRegistry.register('TheatreService', new TheatreService(ObjectRegistry.get<TheatreRepository>('TheatreRepository'), ObjectRegistry.get<CityRepository>('CityRepository')))
ObjectRegistry.register('TheatreController', new TheatreController(ObjectRegistry.get<TheatreService>('TheatreService')))

ObjectRegistry.register('AuditoriumRepository', new AuditoriumRepository());
ObjectRegistry.register('AuditoriumService', new AuditoriumService(ObjectRegistry.get<AuditoriumRepository>('AuditoriumRepository'), ObjectRegistry.get<TheatreRepository>('TheatreRepository')));
ObjectRegistry.register('AuditoriumController', new AuditoriumController(ObjectRegistry.get<AuditoriumService>('AuditoriumService')));

ObjectRegistry.register('ShowRepository', new ShowRepository());
ObjectRegistry.register('ShowService', new ShowService(ObjectRegistry.get<ShowRepository>('ShowRepository'), ObjectRegistry.get<MovieRepository>('MovieRepository'), ObjectRegistry.get<AuditoriumRepository>('AuditoriumRepository')));
ObjectRegistry.register('ShowController', new ShowController(ObjectRegistry.get<ShowService>('ShowService')));
class Client {
    async start() {
        await AppDataSource.initialize();
        // const createUserRequestDto = new CreateUserRequestDto();
        // createUserRequestDto.email = "neer4@gmail.com";
        // const userController = ObjectRegistry.get<UserController>('UserController')
        // const user = await userController.createUser(createUserRequestDto);
        // console.log(user);
        // await ObjectRegistry.get<CityController>('CityController').addCity('Delhi')
        // const theatre = await ObjectRegistry.get<TheatreController>('TheatreController').createTheatre('PVR', 'abc road Delhi', 2)
        // console.log(theatre);
        // const audiController = ObjectRegistry.get<AuditoriumController>('AuditoriumController')
        // const audiResponse = await audiController.createAuditorium('Audi 1', 1, 50);
        // console.log(audiResponse)
        const startTime = new Date();
        const endDate = new Date(startTime.getTime() + 3 * 60 * 60 * 1000);
        const showController = ObjectRegistry.get<ShowController>('ShowController');
        const showResponse = await showController.createShow(1, 1, startTime, endDate)
        console.log(showResponse)
    }
}

new Client().start().catch(console.error);