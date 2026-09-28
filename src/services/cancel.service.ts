export class CancelService {
  async cancelIrn(payload: any): Promise<{ status: string; message: string }> {
    if (!payload || !payload.irn) {
      return { status: "error", message: "IRN required" };
    }
    return {
      status: "not_implemented",
      message: "Cancel service skeleton ready - waiting for IRIS contract",
    };
  }
}

export const cancelService = new CancelService();
