---
title: How to run Vite (and Nuxt) behind HAProxy
created: 07/02/23
status: draft
---
::date
07/02/2023
::

# How to run Vite (and Nuxt) behind HAProxy


haproxy.cfg
```
global
    daemon
    log 127.0.0.1 local0
    log 127.0.0.1 local1 notice

defaults
    log global
    mode http
    option httplog
    option dontlognull
    timeout connect 5000
    timeout client 50000
    timeout server 50000

frontend my_frontend
    bind *:80
    acl is_websocket hdr(Upgrade) -i websocket
    default_backend my_backend
    use_backend my_ws_backend if is_websocket


backend my_ws_backend
    server backend_ws nuxt:3001
backend my_backend
    mode http
    server backend_server1 nuxt:3000

```

nuxt config

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        port: 3001,
        clientPort: 8800,
      },
    },
  },
});
```
docker-compose.yml
```
services:
  haproxy:
    image: haproxy
    volumes:
      - ./haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg
    ports:
      - 8800:80
  nuxt:
    image: node:18
    restart: unless-stopped
    volumes:
      - .:/opt/app
      - node_modules:/opt/app/node_modules
    working_dir: /opt/app
    command: bash -c "npm run dev"
    ports:
      - 3000:3000
volumes:
  node_modules:
```

