import { Client } from "@notionhq/client";

// ─── Notion Client Singleton ─────────────────────────────────────────────────
let _client: Client | null = null;

export function getNotionClient(): Client {
  if (!_client) {
    const token = process.env.NOTION_TOKEN?.trim();
    if (!token) {
      throw new Error("NOTION_TOKEN environment variable is not set or is empty");
    }
    _client = new Client({ auth: token });
  }
  return _client;
}

// ─── Type Helpers ────────────────────────────────────────────────────────────
// Notion property types are deeply nested. These helpers safely extract values.

type NotionProperty = Record<string, any>;

/**
 * Extracts plain text from a Notion rich_text or title property.
 * Returns fallback if the property is missing or empty.
 */
export function getPlainText(
  property: NotionProperty | undefined,
  fallback: string = ""
): string {
  if (!property) return fallback;

  // Handle title type
  if (property.type === "title" && Array.isArray(property.title)) {
    const text = property.title.map((t: any) => t.plain_text).join("");
    return text || fallback;
  }

  // Handle rich_text type
  if (property.type === "rich_text" && Array.isArray(property.rich_text)) {
    const text = property.rich_text.map((t: any) => t.plain_text).join("");
    return text || fallback;
  }

  return fallback;
}

/**
 * Extracts a URL from a Notion url property.
 */
export function getUrl(
  property: NotionProperty | undefined,
  fallback: string = ""
): string {
  if (!property) return fallback;

  if (property.type === "url") {
    return property.url || fallback;
  }

  // Sometimes URLs are stored as rich_text
  if (property.type === "rich_text") {
    return getPlainText(property, fallback);
  }

  return fallback;
}

/**
 * Extracts a number from a Notion number property.
 */
export function getNumber(
  property: NotionProperty | undefined,
  fallback: number = 0
): number {
  if (!property) return fallback;

  if (property.type === "number") {
    return property.number ?? fallback;
  }

  return fallback;
}

/**
 * Extracts email from a Notion email property.
 */
export function getEmail(
  property: NotionProperty | undefined,
  fallback: string = ""
): string {
  if (!property) return fallback;

  if (property.type === "email") {
    return property.email || fallback;
  }

  // Fallback to rich_text
  if (property.type === "rich_text") {
    return getPlainText(property, fallback);
  }

  return fallback;
}

/**
 * Extracts phone from a Notion phone_number property.
 */
export function getPhone(
  property: NotionProperty | undefined,
  fallback: string = ""
): string {
  if (!property) return fallback;

  if (property.type === "phone_number") {
    return property.phone_number || fallback;
  }

  // Fallback to rich_text
  if (property.type === "rich_text") {
    return getPlainText(property, fallback);
  }

  return fallback;
}

/**
 * Queries a Notion database and returns all rows (pages).
 * Optionally sorts by a property.
 */
export async function queryDatabase(
  databaseId: string,
  sorts?: Array<{ property: string; direction: "ascending" | "descending" }>
): Promise<any[]> {
  const client = getNotionClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryParams: any = {
    database_id: databaseId,
  };

  if (sorts && sorts.length > 0) {
    queryParams.sorts = sorts;
  }

  const response = await (client as any).databases.query(queryParams);

  return response.results;
}

/**
 * Gets the first row from a single-row database.
 * Most of our page databases have just one row of content.
 */
export async function getDatabaseFirstRow(
  databaseId: string
): Promise<Record<string, any> | null> {
  const rows = await queryDatabase(databaseId);
  if (!rows.length) return null;

  const page = rows[0] as any;
  return page.properties || null;
}
