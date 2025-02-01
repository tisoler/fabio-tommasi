# Stage 1: Building the code
FROM node:18-alpine AS builder

WORKDIR /tommasi-agro

RUN apk add --no-cache yarn

# Install dependencies for building
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY /app ./app
COPY /clients ./clients
COPY /components ./components
COPY /constants ./constants
COPY /public ./public
COPY /redirects ./redirects
COPY /scripts ./scripts
COPY /servicios ./servicios
COPY /stores ./stores
COPY /types ./types
COPY /utils ./utils
COPY /views ./views
COPY tsconfig*.json ./
COPY next.config.mjs ./
RUN yarn build

# Stage 2: Run the built code
FROM node:18-alpine AS runner
WORKDIR /tommasi-agro

# Set to production
ENV NODE_ENV=production

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /tommasi-agro/public ./public
COPY --from=builder /tommasi-agro/package.json ./package.json
COPY --from=builder /tommasi-agro/yarn.lock ./yarn.lock

# Copy built assets
COPY --from=builder --chown=nextjs:nodejs /tommasi-agro/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /tommasi-agro/.next/static ./.next/static

# Set user
USER nextjs

# Expose and run
EXPOSE 3075
ENV PORT 3075

CMD ["node", "server.js"]
