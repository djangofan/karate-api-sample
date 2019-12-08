function fn() {
  karate.log('karate.env property is: ', karate.env);
  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);
  karate.configure('connectTimeout', 30 * 1000);
  karate.configure('readTimeout', 30 * 1000);

  var config = {
    env: karate.env == null ? "dev" : karate.env,
    data: read("classpath:env-config.json")
  };

  //config.data = read("classpath:env-config.json");
  config.whatever = "whatever";

  karate.log("Karate config: " + JSON.stringify(config, null, 2));
  return config;
}
