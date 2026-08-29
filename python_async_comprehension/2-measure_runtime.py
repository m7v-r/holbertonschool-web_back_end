#!/usr/bin/env python3
"""
Run time for four parallel comprehensions module.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total runtime.
    """
    start_time: float = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time: float = time.time()

    return end_time - start_time
