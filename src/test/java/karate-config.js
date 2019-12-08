function fn() {
  var thisEnv = karate.env == null ? "dev" : karate.env;
  karate.log('karate.env property is: ', thisEnv);
  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);
  karate.configure('connectTimeout', 30 * 1000);
  karate.configure('readTimeout', 30 * 1000);

  var config = {
    env: thisEnv,
    data: read("classpath:env-config.json")[thisEnv]
  };

  karate.log("Karate config: " + JSON.stringify(config, null, 2));
  return config;
}
