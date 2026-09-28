export class IrnService {
  async generateIrn(payload: any): Promise<{ status: string; message: string }> {
    if (!payload || !payload.invoiceNumber) {
      return { status: "error", message: "Invoice number required" };
    }
    return {
      status: "not_implemented",
      message: "IRN service skeleton ready - waiting for IRIS contract",
    };
  }
}

export const irnService = new IrnService();
