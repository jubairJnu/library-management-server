export type TBook = {
  id: string; // UUID
  isbn?: string | null; // ISBN can be null or undefined
  title: string;
  author: string;
  publisher?: string | null; // Publisher can be null or undefined
  publishedYear?: number | null; // Published year can be null or undefined
  genre?: string | null; // Genre can be null or undefined
  description?: string | null; // Description can be null or undefined
  price: number; // Price as an integer
  totalCopies: number; // Total copies available
  availableCopies: number; // Available copies
  language: string; // Default to "English" in model
  pages?: number | null; // Pages can be null or undefined
  imageUrl?: string | null; // Image URL can be null or undefined
  createdAt: Date; // Timestamp when created
  updatedAt: Date; // Timestamp when last updated
};
export type TBookCategory = {
  id: string; // UUID
  name: string; // Name is required and unique
  description?: string | null; // Description is optional and nullable
  createdAt: Date; // Timestamp when created
};
