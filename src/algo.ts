export const genID = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = "";
  const randomValues = new Uint8Array(5);
  crypto.getRandomValues(randomValues);
  
  for (let i = 0; i < 5; i++) {
    id += chars[randomValues[i] % chars.length];
  }
  
  return id;
};
