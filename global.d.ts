declare namespace NodeJS {
    interface Module {
      hot?: {
        accept: (path?: string, callback?: () => void) => void;
      };
    }
  
    interface Require {
      context: (
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
      ) => __WebpackModuleApi.RequireContext;
    }
  }
  