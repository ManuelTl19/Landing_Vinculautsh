const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export const appService = {

  // Obtener URL de descarga de la APK
  descargarApk: (): string => {
    return `${API_URL}/api/app/download`;
  },

  // Obtener URL del código QR
  obtenerQr: (): string => {
    return `${API_URL}/api/app/qr`;
  }

};