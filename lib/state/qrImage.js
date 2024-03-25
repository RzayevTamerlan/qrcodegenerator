import { create } from 'zustand'

export const useQRImage = create((set) => ({
  image: '',
  size: 100,
  setImage: (image) => set({ image }),
  setImageSize: (size) => set({ size }),
}))