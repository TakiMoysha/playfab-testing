import { API_HelloWorld } from "./API_HelloWorld.ts";

const LOGIN_HANDLERS = {
  API_HelloWorld: API_HelloWorld,
};

Object.assign(handlers, LOGIN_HANDLERS);
Object.assign(handlers, { API_HelloWorld: API_HelloWorld });
