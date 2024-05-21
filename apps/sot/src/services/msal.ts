import * as msal from "@azure/msal-node";

const msalConfig = {
    auth: {
      clientId: "d3e5ad7f-3183-4811-a01c-b1ad27a3736d",
      authority:
        "https://login.microsoftonline.com/0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
      clientSecret: "GB78Q~dzJYwKumb5OxRf9Mwggi0SKoB-NSpEuboJ",
    },
    system: {
      loggerOptions: {
        piiLoggingEnabled: false,
        logLevel: msal.LogLevel.Info,
      },
    },
  };

export const pca = new msal.ConfidentialClientApplication(msalConfig);