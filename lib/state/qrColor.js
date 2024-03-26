import { create } from 'zustand'

export const useQRColor = create((set) => ({
  qrBgColor: '#ffffff',
  qrFgColor: '#000000',
  qrEye1Color: '#000000',
  qrEye2Color: '#000000',
  qrEye3Color: '#000000',
  qrDesign: 'squares',
  setQRBgColor: (color) => set({ qrBgColor: color }),
  setQRFgColor: (color) => set({ qrFgColor: color }),
  setQREye1Color: (color) => set({ qrEye1Color: color }),
  setQREye2Color: (color) => set({ qrEye2Color: color }),
  setQREye3Color: (color) => set({ qrEye3Color: color }),
  setQRDesign: (design) => set({ qrDesign: design }),
}))