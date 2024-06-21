export interface Guest { 
  guest_id?: number; // Optional if you expect the backend to provide this
  event_id: number;
  name: string;
  closeness_type: string | null;
  phone_number: string | null;
  email_address: string | null;
  order_sent: boolean;
  arrival_confirmed: boolean;
  guest_count: number | null;

  }