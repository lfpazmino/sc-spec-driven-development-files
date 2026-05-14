export interface Agent {
  id: number;
  name: string;
  specialty: string;
  description: string;
  availability: boolean;
}

export interface Ailment {
  id: number;
  name: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
}

export interface Therapy {
  id: number;
  name: string;
  description: string;
  duration: number;
  cost: number;
}

export interface Booking {
  id: number;
  agentId: number;
  therapyId: number;
  scheduledAt: Date;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}
