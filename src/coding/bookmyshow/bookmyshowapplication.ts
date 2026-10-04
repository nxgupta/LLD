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
import { MovieRepository } from './repositories/Movie.repository.js';
import { MovieService } from './services/Movie.service.js';
import { MovieController } from './controllers/Movie.controller.js';
import { ShowController } from './controllers/Show.controller.js';
import { SeatRepository } from './repositories/Seat.repository.js';
import { ShowSeatRepository } from './repositories/ShowSeat.repository.js';
import { SeatService } from './services/Seat.service.js';
import { ShowSeatService } from './services/ShowSeat.service.js';


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

ObjectRegistry.register('MovieRepository', new MovieRepository());
ObjectRegistry.register('MovieService', new MovieService(ObjectRegistry.get<MovieRepository>('MovieRepository')));
ObjectRegistry.register('MovieController', new MovieController(ObjectRegistry.get<MovieService>('MovieService')));

ObjectRegistry.register('ShowRepository', new ShowRepository());
ObjectRegistry.register('ShowService', new ShowService(ObjectRegistry.get<ShowRepository>('ShowRepository'), ObjectRegistry.get<MovieRepository>('MovieRepository'), ObjectRegistry.get<AuditoriumRepository>('AuditoriumRepository')));
ObjectRegistry.register('ShowController', new ShowController(ObjectRegistry.get<ShowService>('ShowService')));

// Register Repositories
ObjectRegistry.register('SeatRepository', new SeatRepository());
ObjectRegistry.register('ShowSeatRepository', new ShowSeatRepository());

// Register Services
ObjectRegistry.register('SeatService', new SeatService(
    ObjectRegistry.get<SeatRepository>('SeatRepository'),
    ObjectRegistry.get<AuditoriumRepository>('AuditoriumRepository')
));

ObjectRegistry.register('ShowSeatService', new ShowSeatService(
    ObjectRegistry.get<ShowSeatRepository>('ShowSeatRepository'),
    ObjectRegistry.get<ShowRepository>('ShowRepository'),
    ObjectRegistry.get<SeatRepository>('SeatRepository')
));

class Client {
    async start() {
        await AppDataSource.initialize();
        //User creation
        // const createUserRequestDto = new CreateUserRequestDto();
        // createUserRequestDto.email = "neer4@gmail.com";
        // const userController = ObjectRegistry.get<UserController>('UserController')
        // const user = await userController.createUser(createUserRequestDto);
        // console.log(user);

        //theatre creation
        // await ObjectRegistry.get<CityController>('CityController').addCity('Delhi')
        // const theatre = await ObjectRegistry.get<TheatreController>('TheatreController').createTheatre('PVR', 'abc road Delhi', 2)
        // console.log(theatre);

        //auditorium creation
        // const audiController = ObjectRegistry.get<AuditoriumController>('AuditoriumController')
        // const audiResponse = await audiController.createAuditorium('Audi 1', 1, 50);
        // console.log(audiResponse)

        //movie creation
        // const movieController = ObjectRegistry.get<MovieController>('MovieController');
        // const movieResponse = await movieController.addMovie('Inception', 148, 4.5);
        // console.log(movieResponse);

        //show creation
        // const startTime = new Date();
        // const endDate = new Date(startTime.getTime() + 3 * 60 * 60 * 1000);
        // const showController = ObjectRegistry.get<ShowController>('ShowController');
        // const showResponse = await showController.createShow(1, 1, startTime, endDate)
        // console.log(showResponse)


        // 1. Add physical seats to Audi 1 (id: 1)
        // const seatService = ObjectRegistry.get<SeatService>('SeatService');
        // const physicalSeats = await seatService.createSeatsForAuditorium(1, ["A1", "A2", "A3", "B1", "B2", "B3"]);
        // console.log(`Created ${physicalSeats.length} physical seats.`);

        // 2. Generate ShowSeats for Show 1 (id: 1)
        const showSeatService = ObjectRegistry.get<ShowSeatService>('ShowSeatService');
        const showSeats = await showSeatService.createShowSeatsForShow(1);
        console.log(`Generated ${showSeats.length} ShowSeats in AVAILABLE state for Show 1:`, showSeats);
    }
}

new Client().start().catch(console.error);