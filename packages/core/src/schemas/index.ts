/**
 * @module @minions-oss-projects/sdk/schemas
 * Custom MinionType schemas for Minions Oss-projects.
 */

import type { MinionType } from 'minions-sdk';

export const ossprojectType: MinionType = {
  id: 'oss-projects-oss-project',
  name: 'Oss project',
  slug: 'oss-project',
  description: 'An active open-source project being maintained.',
  icon: '📦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'ideaId', type: 'string', label: 'ideaId' },
    { name: 'repoUrl', type: 'string', label: 'repoUrl' },
    { name: 'packageName', type: 'string', label: 'packageName' },
    { name: 'currentVersion', type: 'string', label: 'currentVersion' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'stars', type: 'number', label: 'stars' },
    { name: 'downloads', type: 'number', label: 'downloads' },
    { name: 'health', type: 'select', label: 'health' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const projectmetricType: MinionType = {
  id: 'oss-projects-project-metric',
  name: 'Project metric',
  slug: 'project-metric',
  description: 'A periodic health metric snapshot.',
  icon: '📈',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'stars', type: 'number', label: 'stars' },
    { name: 'forks', type: 'number', label: 'forks' },
    { name: 'issues', type: 'number', label: 'issues' },
    { name: 'downloads', type: 'number', label: 'downloads' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
  ],
};

export const customTypes: MinionType[] = [
  ossprojectType,
  projectmetricType,
];

