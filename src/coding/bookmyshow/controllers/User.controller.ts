import type { CreateUserRequestDto } from "../dtos/CreateUserRequest.dto.js";
import { CreateUserResponseDto } from "../dtos/CreateUserResponse.dto.js";
import type { UserService } from "../services/User.service.js";

export class UserController {
    constructor(private userService: UserService) {

    }
    async createUser(request: CreateUserRequestDto): Promise<CreateUserResponseDto> {
        const savedUser = await this.userService.createUser(request.email);
        const userResponseDto = new CreateUserResponseDto();
        userResponseDto.user = savedUser;
        return userResponseDto;
    }
}