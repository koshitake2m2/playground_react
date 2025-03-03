"use client";

import { useEffect, useState } from "react";

export default function GreetPage() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchGreeting().then((res) => {
      setMessage(res.message);
    });
  }, []);
  const fetchGreeting = async (): Promise<{ message: string }> => {
    const res = await fetch("/api/proto/greet");
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <h1>Greet</h1>
      <p>{message}</p>
    </>
  );
}
