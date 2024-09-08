import { Ticket } from "@/shared/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <li key={ticket.id}>
      <Card className="">
        <CardHeader>
          <CardTitle className=" whitespace-nowrap">{ticket.title}</CardTitle>
          <CardDescription>{ticket.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://utfs.io/f/79394bda-cd40-46fd-b353-4e206512bc2c-1k27.png"
            className="max-w-28 rounded-3xl "
            alt={ticket.title}
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center gap-4 ">
          <p>Price: {ticket.price}</p>
          <p>Amount: {ticket.amount}</p>
          <Button>Buy</Button>
        </CardFooter>
      </Card>
    </li>
  );
}
