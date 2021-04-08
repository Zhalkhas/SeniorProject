export default class Config {
    public static readonly EXPRESS_PORT: number = 8888;
    public static readonly DB_HOST: string = process.env.SP_POSTGRES_HOST || 'localhost';
    public static readonly DB_USERNAME: string = 'postgres';
    public static readonly DB_PASSWORD: string = 'supersecret';
    public static readonly DB_NAME: string = 'senior-project';
}
