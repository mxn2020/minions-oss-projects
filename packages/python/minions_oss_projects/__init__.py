"""
Minions Oss-projects Python SDK

Project definitions, repos, version history, and health status
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Oss-projects.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
