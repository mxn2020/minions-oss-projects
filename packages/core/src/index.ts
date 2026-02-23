/**
 * Minions Oss-projects SDK
 *
 * Project definitions, repos, version history, and health status
 *
 * @module @minions-oss-projects/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-projects.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
