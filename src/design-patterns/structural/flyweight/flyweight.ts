enum BulletStatus {
    UNFIRED,
    FIRED,
    EXPLODED,
}

enum BulletType {
    AMMO_9MM = "9mm",
    AMMO_45_ACP = "45 ACP",
    AMMO_5_56MM = "5.56mm",
    AMMO_7_62MM = "7.62mm",
    AMMO_12_GAUGE = "12 Gauge",
    AMMO_300_MAGNUM = "300 Magnum",
    BOLT = "Bolt",
}


class Bullet {
    private readonly radius: number;
    private readonly weight: number;
    private readonly bulletType: BulletType;
    private readonly image: Uint8Array;
    constructor(bulletType: BulletType, radius: number, weight: number, image: Uint8Array) {
        this.radius = radius;
        this.weight = weight;
        this.bulletType = bulletType;
        this.image = image
    }

    getRadius(): number {
        return this.radius;
    }

    getWeight(): number {
        return this.weight;
    }

    getBulletType(): BulletType {
        return this.bulletType;
    }

    getImage(): Uint8Array {
        return this.image;
    }
}

class BulletRegistry {
    private bullets: Map<BulletType, Bullet> = new Map();

    getBullet(bulletType: BulletType): Bullet {
        if (!this.bullets.has(bulletType)) {
            let newBullet: Bullet;
            switch (bulletType) {
                case BulletType.AMMO_5_56MM:
                    newBullet = new Bullet(bulletType, 5.56, 4, new Uint8Array(256))
                    break;
                case BulletType.AMMO_9MM:
                    newBullet = new Bullet(bulletType, 9.0, 4, new Uint8Array(256))
                    break;
                default:
                    throw new Error(`Configuration for ${bulletType} missing.`);
            }
            this.bullets.set(bulletType, newBullet);
        }
        return this.bullets.get(bulletType)!;
    }
}

class FlyingBullet {
    private x_coord: number;
    private y_coord: number;
    private z_coord: number;
    private speed: number;
    private x_direction: number;
    private y_direction: number;
    private z_direction: number;
    private status: BulletStatus = BulletStatus.UNFIRED;
    private userId: number;
    private bullet: Bullet;

    constructor(bullet: Bullet, userId: number, speed: number) {
        this.bullet = bullet;
        this.userId = userId;
        this.speed = speed;
        this.x_coord = 0; this.y_coord = 0; this.z_coord = 0;
        this.x_direction = 0; this.y_direction = 0; this.z_direction = 0;
    }


    getXCoord(): number {
        return this.x_coord;
    }

    setXCoord(x_coord: number): void {
        this.x_coord = x_coord;
    }

    getYCoord(): number {
        return this.y_coord;
    }

    setYCoord(y_coord: number): void {
        this.y_coord = y_coord;
    }

    getZCoord(): number {
        return this.z_coord;
    }

    setZCoord(z_coord: number): void {
        this.z_coord = z_coord;
    }

    getSpeed(): number {
        return this.speed;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    getXDirection(): number {
        return this.x_direction;
    }

    setXDirection(x_direction: number): void {
        this.x_direction = x_direction;
    }

    getYDirection(): number {
        return this.y_direction;
    }

    setYDirection(y_direction: number): void {
        this.y_direction = y_direction;
    }

    getZDirection(): number {
        return this.z_direction;
    }

    setZDirection(z_direction: number): void {
        this.z_direction = z_direction;
    }

    getStatus(): BulletStatus {
        return this.status;
    }

    setStatus(status: BulletStatus): void {
        this.status = status;
    }

    getUserId(): number {
        return this.userId;
    }

    setUserId(userId: number): void {
        this.userId = userId;
    }

    getBullet(): Bullet {
        return this.bullet;
    }

    setBullet(bullet: Bullet): void {
        this.bullet = bullet;
    }
}

let bulletRegistry = new BulletRegistry();

let bullets: FlyingBullet[] = [];
for (let i = 0; i < 200000; i++) {
    let shared556 = bulletRegistry.getBullet(BulletType.AMMO_5_56MM);
    let flyingBullet: FlyingBullet = new FlyingBullet(shared556, 101, 900);
    bullets.push(flyingBullet);
}






