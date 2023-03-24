import React, {useState} from "react";

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    return (
      <>
        <button className={styles.stopwatch} onClick={() => setSeconds(seconds +1)}>
          {seconds}
        </button>
      </>
    )
  }
  