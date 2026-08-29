#!/usr/bin/env python3
"""
Complex types - functions module.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float multiplier and returns a function that multiplies
    a float by multiplier.
    """
    def multiplier_function(n: float) -> float:
        return n * multiplier

    return multiplier_function
