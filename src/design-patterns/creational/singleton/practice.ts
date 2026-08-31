import fs from "node:fs"
class Logger {
    private static instance: Logger | null = null;

    // Class property to hold our open file stream
    private logStream!: fs.WriteStream;
    private currentFileDate!: string;

    // 1. Requirement: "expensive setup" happens ONLY ONCE inside the private constructor
    private constructor() {
        console.log("🛠️ [SETUP] Initializing expensive file write stream... (Should only print ONCE)");
        this.initializeStream();
    }

    private initializeStream(): void {
        this.currentFileDate = new Date().toISOString().split("T")[0]!;
        const fileName = `${this.currentFileDate}.txt`;

        console.log(`📂 [STREAM OPENED] Creating fresh stream connection to file: ${fileName}`);
        this.logStream = fs.createWriteStream(fileName, { flags: 'a' });
    }
    // Standard Singleton access method
    static getInstance(): Logger {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    // 2. Requirement: Expose a simple log(message: string) method
    public log(message: string): void {
        const today = new Date().toISOString().split("T")[0];
        if (today !== this.currentFileDate) {
            this.logStream.end();
            this.initializeStream();
        }


        const formattedLog = `[${new Date().toISOString()}] ${message}\n`;
        // We reuse the pre-opened stream instead of using expensive fs.appendFile again
        this.logStream.write(formattedLog);
    }
}

// ==========================================
// 3. Requirement: Prove it in your test code
// ==========================================

console.log("🏁 Starting test code...");

// Request the logger from two different places
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

// Proof Part 1: Confirm both calls used the same instance
console.log(`🔍 Proof 1: Do logger1 and logger2 match? ${logger1 === logger2}`);

// Proof Part 2: Call log from different variables and check terminal output
logger1.log("First log message from component A.");
logger2.log("Second log message from component B.");

console.log("🏁 Test code execution completed.");
