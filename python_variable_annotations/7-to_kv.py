#!/usr/bin/env python3
"""
Complex types - string and int/float to tuple module.
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and an int or float v, and returns a tuple:
    - First element is k
    - Second element is the square of v as a float
    """
    return (k, float(v ** 2))
