import { UTILS_GetBank } from "./UTILS_All.ts";

type API_HelloWorld_Params = {
  Status: {
    ProjectId: number;
  };
};

handlers.API_HelloWorld = (args, context: CSContext<API_HelloWorld_Params>) => {
  log.info(context.FunctionArgument.Status.ProjectId);
  log.error("ERROR");
  log.info("INFO");
  UTILS_GetBank(123);
};

handlers.API_GetReadOnlyData = (args, context) => {
  UTILS_GetBank(124);
};
