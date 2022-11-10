import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Elena",
    email: "elenavesta@gmx.de",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Korneli",
    email: "korneli@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hudir",
    email: "hudir@123.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
