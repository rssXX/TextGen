import { sqliteTable, AnySQLiteColumn, foreignKey, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const accounts = sqliteTable("accounts", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	accessTokenExpiresAt: integer("access_token_expires_at"),
	refreshTokenExpiresAt: integer("refresh_token_expires_at"),
	scope: text(),
	password: text(),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
	updatedAt: integer("updated_at").default(sql`(unixepoch())`).notNull(),
});

export const sessions = sqliteTable("sessions", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
	token: text().notNull(),
	expiresAt: integer("expires_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
	updatedAt: integer("updated_at").default(sql`(unixepoch())`).notNull(),
},
(table) => [
	uniqueIndex("sessions_token_unique").on(table.token),
]);

export const users = sqliteTable("users", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	emailVerified: integer("email_verified").default(false).notNull(),
	name: text().notNull(),
	image: text(),
	role: text().default("user"),
	banned: integer().default(false),
	banReason: text("ban_reason"),
	banExpires: integer("ban_expires"),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
	updatedAt: integer("updated_at").default(sql`(unixepoch())`).notNull(),
},
(table) => [
	uniqueIndex("users_email_unique").on(table.email),
]);

export const verifications = sqliteTable("verifications", {
	id: text().primaryKey().notNull(),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: integer("expires_at").notNull(),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
	updatedAt: integer("updated_at").default(sql`(unixepoch())`).notNull(),
});

export const generationRevisions = sqliteTable("generation_revisions", {
	id: text().primaryKey().notNull(),
	generationId: text("generation_id").notNull().references(() => generations.id, { onDelete: "cascade" } ),
	prompt: text(),
	content: text().notNull(),
	author: text().notNull(),
	version: integer().notNull(),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
});

export const generations = sqliteTable("generations", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
	topic: text().notNull(),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
});

export const transactions = sqliteTable("transactions", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
	type: text().notNull(),
	amount: integer().notNull(),
	revisionId: text("revision_id").references(() => generationRevisions.id, { onDelete: "set null" } ),
	createdAt: integer("created_at").default(sql`(unixepoch())`).notNull(),
});

