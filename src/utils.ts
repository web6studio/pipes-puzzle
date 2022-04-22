export const convertData = (data: string): Pipes => {
  const rows = data.split('\n');
  const pipes = rows.map((row) => row.split(''))

  return pipes;
};
