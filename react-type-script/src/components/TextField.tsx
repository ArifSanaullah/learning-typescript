import React, { useRef, useState } from "react";

interface Person {
  name: string;
  age: number;
}

export interface Props {
  message: string;
  person: Person;
  onChange?: (e: React.FormEvent<HTMLDivElement>) => void;
  styles: React.CSSProperties;
}

export const TextField: React.FC<Props> = ({ message, styles, person }) => {
  const [count, setCount] = useState<number | null>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={styles} ref={divRef}>
      {`${message} from Name: ${person.name}, Age - ${person.age}`}
      <h1>{`Count: ${count}`}</h1>
      <button
        onClick={() => typeof count === "number" && setCount(count + 1)}
        ref={buttonRef}
      >
        Increase count
      </button>
    </div>
  );
};
