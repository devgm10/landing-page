# ---- Stage 1: build ----
FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

ARG VITE_CONTACT_API_URL
ARG VITE_TURNSTILE_SITE_KEY

ENV VITE_CONTACT_API_URL=$VITE_CONTACT_API_URL
ENV VITE_TURNSTILE_SITE_KEY=$VITE_TURNSTILE_SITE_KEY

COPY . .
RUN pnpm build

FROM nginx:1.31.2-alpine3.23-slim AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]