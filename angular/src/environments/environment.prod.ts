export const environment = {
  production: true
};

const mqtt_service_options = {
  hostname: '72.24.0.2',  // alias with docker-compose did not work (if ip is not valid just `docker inspect mosquitto` and copy the ip)
  port: 8000,
  path: '/mqtt',
};
