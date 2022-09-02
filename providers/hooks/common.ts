const baseUrl = process.env.HOST;

export const getImage = (path: string) => {
  return `${baseUrl}/files/${path}`;
};
