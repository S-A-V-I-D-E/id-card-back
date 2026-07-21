import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as qrcode from 'qrcode'; // Importamos la librería

@Injectable()
export class CardService {
  async generarCodigoQR(data: string): Promise<string> {
    try {
      // toDataURL convierte el texto en una imagen lista para el navegador
      const qrImageBase64 = await qrcode.toDataURL(data, {
        errorCorrectionLevel: 'H', // Alta corrección por si el carnet se raya
        margin: 1, // Borde blanco pequeño
        width: 300 // Tamaño en píxeles
      });
      return qrImageBase64;
    } catch (error) {
      throw new InternalServerErrorException('Error al generar el código QR del carnet');
    }
  }
}
