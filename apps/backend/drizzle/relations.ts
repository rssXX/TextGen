import { relations } from "drizzle-orm/relations";
import { users, accounts, sessions, generations, generationRevisions, transactions } from "./schema";

export const accountsRelations = relations(accounts, ({one}) => ({
	user: one(users, {
		fields: [accounts.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	accounts: many(accounts),
	sessions: many(sessions),
	generations: many(generations),
	transactions: many(transactions),
}));

export const sessionsRelations = relations(sessions, ({one}) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id]
	}),
}));

export const generationRevisionsRelations = relations(generationRevisions, ({one, many}) => ({
	generation: one(generations, {
		fields: [generationRevisions.generationId],
		references: [generations.id]
	}),
	transactions: many(transactions),
}));

export const generationsRelations = relations(generations, ({one, many}) => ({
	generationRevisions: many(generationRevisions),
	user: one(users, {
		fields: [generations.userId],
		references: [users.id]
	}),
}));

export const transactionsRelations = relations(transactions, ({one}) => ({
	generationRevision: one(generationRevisions, {
		fields: [transactions.revisionId],
		references: [generationRevisions.id]
	}),
	user: one(users, {
		fields: [transactions.userId],
		references: [users.id]
	}),
}));