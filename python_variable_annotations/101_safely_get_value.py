#!/usr/bin/env python3
"""
More involved type annotations module.
"""
from typing import Any, Mapping, Optional, TypeVar, Union

T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Optional[T] = None) -> Union[Any, T]:
    """
    Safely retrieves a value from a mapping given a key.
    Returns the default value if the key is not present.
    """
    if key in dct:
        return dct[key]
    else:
        return default
