import { UTILS_GetBank } from "./UTILS_All.ts";

type API_HelloWorld_Params = {
  Status: {
    ProjectId: number;
  };
};

export function API_HelloWorld(
  args: CSArguments,
  context: CSContext<API_HelloWorld_Params>
) {
  log.info(context.FunctionArgument.Status.ProjectId);
  log.info(args);
  log.error("ERROR");
  log.info("INFO");
  UTILS_GetBank(123);
}

export function API_GetReadOnlyData(
  args: CSArguments,
  context: CSContext<Object>
) {
  UTILS_GetBank(124);
}
