DROP TABLE `generation_revisions`;--> statement-breakpoint
DROP TABLE `transactions`;--> statement-breakpoint
ALTER TABLE `generations` ADD `content_type` text NOT NULL;--> statement-breakpoint
ALTER TABLE `generations` ADD `tone` text NOT NULL;--> statement-breakpoint
ALTER TABLE `generations` ADD `length` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `generations` ADD `keywords` text;--> statement-breakpoint
ALTER TABLE `generations` ADD `source_text` text;--> statement-breakpoint
ALTER TABLE `generations` ADD `content` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `generations` ADD `status` text DEFAULT 'streaming' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `tokens`;