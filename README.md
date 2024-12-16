# Unexpected React useEffect Cleanup Issue

This repository demonstrates a subtle bug related to the cleanup function in React's `useEffect` hook.  The cleanup function, responsible for releasing resources when a component unmounts, is not consistently called under specific circumstances.

## Bug Description
The provided `MyComponent` uses `useEffect` to log messages on mount and unmount. In typical scenarios, this works as expected. However, under certain conditions (e.g., rapid component updates or interactions with other libraries), the cleanup function might not execute properly, leading to unexpected behavior. 

## How to Reproduce
Clone this repository and run the application. Observe the console logs during normal component interaction.  Note that the unmount log may not always appear as expected.  Investigate potential conditions that could prevent proper cleanup.