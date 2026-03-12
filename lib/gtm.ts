declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export type GtmEventPayload = Record<string, unknown>

export function gtmPush(event: string, data: GtmEventPayload = {}): void {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    ...data,
  })
}

