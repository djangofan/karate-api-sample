function fn() {
  karate.log('karate.env property is: ', karate.env);
  var config = {
    env: karate.env
  };
  return config;
}

function() {
    return placeholderUrl='https://jsonplaceholder.typicode.com';
}

