import createServer from './server'

const app = await createServer();

app.listen(3000);

console.log(`TextGen Backend
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Port:     ${app.server?.port}
Env:      ${process.env.NODE_ENV || 'development'}
API:      http://${app.server?.hostname}:${app.server?.port}/api
Health:   http://${app.server?.hostname}:${app.server?.port}/api/health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
