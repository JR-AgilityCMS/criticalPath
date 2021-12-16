import {login} from "./procs.mjs";
import dotenv from "dotenv";

dotenv.config();

login(process.env.EMAIL, process.env.PASSWORD);


