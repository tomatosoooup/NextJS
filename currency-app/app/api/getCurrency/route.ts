import axios from "axios";

export async function GET(first: string | null, second: string | null) {
  try {
    const req = first + second;
    const apiUrl = `https://api.binance.com/api/v3/avgPrice?symbol=${req}`;
    const response = await axios.get(apiUrl);
    const avgPrice = response.data.price;

    return {
      data: response.data,
      avgPrice: avgPrice,
    };
  } catch {
    return { error: true };
  }
}
