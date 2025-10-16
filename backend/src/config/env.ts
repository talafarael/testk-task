import "dotenv/config";
export default {
  port: getEnvVar("PORT"),
  mongodb_uri: getEnvVar("MONGODB_URI"),
};

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
