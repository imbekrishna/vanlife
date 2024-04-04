export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
  category?: string;
  visibility?: boolean;
}

export interface APIError {
  message: string;
  statusText: string;
  status: number;
}
