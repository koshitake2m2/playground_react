import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { GreetService } from "@/proto/gen/proto/greet/greet_pb";

const transport = createConnectTransport({
  httpVersion: "1.1",
  baseUrl: "http://localhost:50051",
});

export async function GET(req: NextRequest) {
  const client = createClient(GreetService, transport);
  const res = await client.sayHello({
    name: "Alice",
  });
  console.log(res);

  return NextResponse.json({ message: res.message });
}
