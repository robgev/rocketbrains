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
  const fillCount = length % 3 !== 0 ? 3 - (length % 3) : 0;
  const fillArray = new Array(fillCount).fill(placeholder);
  return [ ...tiles, ...fillArray ];
}
