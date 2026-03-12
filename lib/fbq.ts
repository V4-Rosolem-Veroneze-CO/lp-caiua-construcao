declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export const META_PIXEL_ID = "1900418787558160"

export type FbqEventPayload = Record<string, unknown>

export function fbqTrack(event: string, data: FbqEventPayload = {}): void {
  if (typeof window === "undefined") return
  if (!window.fbq) return

  window.fbq("track", event, data)
}

