```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanUp, setShouldCleanUp] = useState(true);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    return () => {
      if (shouldCleanUp) {
        console.log('Component unmounted');
      }
    };
  }, [shouldCleanUp]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setShouldCleanUp(true);
  };

  const handleUnmount = () => {
    setShouldCleanUp(false);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```