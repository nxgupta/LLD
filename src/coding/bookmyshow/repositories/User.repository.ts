import { AppDataSource } from "../data-source.js";
import { User } from "../models/User.js";

export class UserRepository {
    private repo = AppDataSource.getRepository(User);
    async save(user: User): Promise<User> {
        return this.repo.save(user);
    }

    async findById(userId: number): Promise<User | null> {
        return this.repo.findOne({ where: { id: userId } })
    }
}