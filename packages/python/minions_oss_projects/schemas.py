"""
Minions Oss-projects SDK — Type Schemas
Custom MinionType schemas for Minions Oss-projects.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

oss_project_type = MinionType(
    id="oss-projects-oss-project",
    name="Oss project",
    slug="oss-project",
    description="An active open-source project being maintained.",
    icon="📦",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="ideaId", type="string", label="ideaId"),
        FieldDefinition(name="repoUrl", type="string", label="repoUrl"),
        FieldDefinition(name="packageName", type="string", label="packageName"),
        FieldDefinition(name="currentVersion", type="string", label="currentVersion"),
        FieldDefinition(name="techStack", type="string", label="techStack"),
        FieldDefinition(name="stars", type="number", label="stars"),
        FieldDefinition(name="downloads", type="number", label="downloads"),
        FieldDefinition(name="health", type="select", label="health"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

project_metric_type = MinionType(
    id="oss-projects-project-metric",
    name="Project metric",
    slug="project-metric",
    description="A periodic health metric snapshot.",
    icon="📈",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="stars", type="number", label="stars"),
        FieldDefinition(name="forks", type="number", label="forks"),
        FieldDefinition(name="issues", type="number", label="issues"),
        FieldDefinition(name="downloads", type="number", label="downloads"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
    ],
)

custom_types: list[MinionType] = [
    oss_project_type,
    project_metric_type,
]

