#!/usr/bin/env python3
"""
Complex types - list of floats module.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats as argument and returns their sum as a float.
    """
    return float(sum(input_list))
