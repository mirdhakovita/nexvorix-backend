export class QrVerifyService {
  async verifyQr(payload: any): Promise<{ status: string; message: string }> {
    if (!payload || !payload.qrData) {
      return { status: "error", message: "QR data required" };
    }
    return {
      status: "not_implemented",
      message: "QR verify service skeleton ready - waiting for IRIS contract",
    };
  }
}

export const qrVerifyService = new QrVerifyService();
