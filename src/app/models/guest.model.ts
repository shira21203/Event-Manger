export interface Guest {
    guest_id: number;
    guest_name: string;
    guest_email: string;
    invite_status?: string; // Optional field for invite status
  }