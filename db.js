import { Sequelize } from "sequelize";

const DATABASE_URL =
  "postgresql://neondb_owner:npg_GRZ8s6mcXbJq@ep-empty-glade-aivnc20c-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require&uselibpqcompat=true";

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});
