import { User } from "../models/User.js";
import { UserRepository } from "../repositories/User.repository.js";

export class UserService {
    constructor(private userRepository: UserRepository) { }
    async createUser(email: string): Promise<User> {
        const user = new User();
        user.email = email;
        const savedUser = await this.userRepository.save(user);
        return savedUser;
    }
}