import { create } from 'zustand'

export const useQRType = create((set) => ({
  qrType: 'url',
  setQRType: (type) => set({ qrType: type }),
}))