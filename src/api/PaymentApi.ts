import { getAccessToken } from "@/modules/auth/core/utils";
import { CreatePaymentData } from "./type";
import { api } from "@/core/axios";

export class PaymentApi {
  static async createPayment(data: CreatePaymentData) {
    const token = getAccessToken();
    const result = await api.post('/payments', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return result.data;
  }
}