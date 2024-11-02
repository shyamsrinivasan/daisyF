export {}
declare global {
  const push: typeof import('notivue')['push']
  const ref: typeof import('vue')['ref']
  const watch: typeof import('vue')['watch']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly push: UnwrapRef<typeof import('notivue')['push']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
  }
}