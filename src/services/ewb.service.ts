export class EwbService {
  async generateEwb(payload: any): Promise<{ status: string; message: string }> {
    if (!payload || !payload.irn) {
      return { status: "error", message: "IRN required" };
    }
    return {
      status: "not_implemented",
      message: "EWB service skeleton ready - waiting for IRIS contract",
    };
  }
}

export const ewbService = new EwbService();
