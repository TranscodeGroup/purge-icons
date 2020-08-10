import type { ServerPlugin } from 'vite'
import { PurgeIconsOptions, PurgeIcons } from 'purge-icons'
import { IMPORT_PATH } from './constants'

export function createServerPlugin(options: PurgeIconsOptions): ServerPlugin {
  return ({ app }) => {
    app.use(async(ctx, next) => {
      if (ctx.path === IMPORT_PATH) {
        ctx.body = await PurgeIcons(options)
        ctx.type = 'js'
        ctx.status = 200
      }

      await next()
    })
  }
}
