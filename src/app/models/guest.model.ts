export interface Guest { 
  GuestCode?: number; // Optional if you expect the backend to provide this
  EventCode: string;
  GuestName: string;
  RelationshipType: string | null;
  Phone: string | null;
  Email: string | null;
  InvitationSent: boolean;
  ArrivalConfirmed: boolean;
  NumPeople: number | null;

  }   