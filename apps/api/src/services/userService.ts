/**
 * @fileoverview User service layer for TaskFlow API.
 *
 * Provides stubbed CRUD operations for user management.
 * Each function returns a structured response object so that
 * route handlers stay thin and business logic is testable in isolation.
 */

/** A user record as returned by the service layer. */
export interface User {
  /** Unique identifier (stubbed). */
  id: string;
  /** Optional fields supplied by the caller (e.g. name, email). */
  [key: string]: unknown;
}

/** Generic wrapper returned by every service function. */
export interface ServiceResponse<T> {
  /** The payload — may be `null` when no matching resource exists. */
  data: T;
  /** Human-readable status message. */
  message: string;
}

/**
 * List all users.
 *
 * Currently returns an empty array because persistence is not yet wired up.
 *
 * @returns {Promise<ServiceResponse<User[]>>} An empty user list.
 *
 * @example
 * ```ts
 * const res = await listUsers();
 * console.log(res.data); // []
 * ```
 */
export async function listUsers(): Promise<ServiceResponse<User[]>> {
  return {
    data: [],
    message: "User listing is not implemented yet.",
  };
}

/**
 * Create a new user.
 *
 * Accepts an arbitrary payload and returns a stubbed user id.
 * In a production system this would validate the input against a
 * Zod schema and persist the record via Prisma.
 *
 * @param payload - Arbitrary key/value pairs to store on the user record.
 * @returns {Promise<ServiceResponse<User>>} The newly created (stubbed) user.
 *
 * @example
 * ```ts
 * const res = await createUser({ name: "Ada", email: "ada@example.com" });
 * console.log(res.data.id); // "stub-user-id"
 * ```
 */
export async function createUser(
  payload: Record<string, unknown>
): Promise<ServiceResponse<User>> {
  return {
    data: {
      id: "stub-user-id",
      ...payload,
    },
    message: "User creation is not implemented yet.",
  };
}
