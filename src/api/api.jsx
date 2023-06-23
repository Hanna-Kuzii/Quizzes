const BASE_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function getTest(params ='') {
  const fullURL = BASE_URL +  params;
  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}
