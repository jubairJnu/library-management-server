// Enum for MembershipType
export enum IMembershipType {
  BASIC = "BASIC",
  PREMIUM = "PREMIUM",
  STUDENT = "STUDENT",
  FACULTY = "FACULTY",
}

// Enum for MembershipStatus (assuming this enum exists based on your model)
export enum IMembershipStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

// Type definition for Membership model
export interface IMembership {
  id: string; // Unique identifier
  userId: string; // User associated with the membership (foreign key)
  type: IMembershipType; // Type of membership (BASIC, PREMIUM, etc.)
  status: IMembershipStatus; // Status of the membership (ACTIVE, INACTIVE)
  startDate: Date; // Start date of the membership
  endDate: Date | null; // End date of the membership (nullable)
  maxBooks: number; // Maximum books allowed for this membership
  createdAt: Date; // Date the membership was created
  updatedAt: Date; // Date the membership was last updated
}
