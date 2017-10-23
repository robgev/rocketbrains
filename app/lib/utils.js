export const generate_request = body => {
  return {
    method:'post',
    headers: new Headers({
      'content-type':'application/json'
    }),
    body:JSON.stringify(body)
  };
};

export const fillArrayWithEmptyTiles = (tiles, placeholder) => {
  const { length } = tiles;
  const fillCount = 3 - (length % 3);
  for(let i = 0; i < fillCount; i++)
    tiles.push(placeholder)
  return tiles;
}
