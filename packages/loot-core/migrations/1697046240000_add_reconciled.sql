BEGIN TRANSACTION;

ALTER TABLE transactions ADD COLUMN reconciled INTEGER DEFAULT 0;

COMMIT;
