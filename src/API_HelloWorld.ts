import { UTILS_GetBank } from "./UTILS_All.ts";

type API_HelloWorld_Params = {  
  ProjectId: number; 
};

export function API_HelloWorld(args: CSArguments, context: CSContext<API_HelloWorld_Params> ) {
  log.info(context.FunctionArgument.ProjectId);
  log.info(args);
  log.error("ERROR");
  log.info("INFO");
  UTILS_GetBank(123);
  server.GetUserReadOnlyData("", ["Bank", "MyValue"]);
}

export function API_GetReadOnlyData(args: CSArguments, context: CSContext<any> ) {
  UTILS_GetBank(124);
}
