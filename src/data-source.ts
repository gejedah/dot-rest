import { DataSource } from 'typeorm';
import { Employee } from './entity/Employee';

const AppDataSource = new DataSource({
  type: 'postgres', // or your preferred database type
  host: 'localhost',
  port: 5432, // default PostgreSQL port
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  synchronize: true, // set to false in production
  logging: false,
  entities: [Employee],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;