export const BASE_URL = "https://backend-onetouch.azurewebsites.net";

const serverVars = {
  apiUrl: "https://backend-onetouch.azurewebsites.net"
};

const localVars = {
  apiUrl: "https://backend-onetouch.azurewebsites.net"
};

export function getConfiguration() {
  if (process.env.NODE_ENV === "production") {
    return serverVars;
  }
  
  return localVars;
}
