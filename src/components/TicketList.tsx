import { Ticket } from "@/shared/types";
import TicketCard from "./TicketCard";

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6   md:grid-cols-2  xl:grid-cols-3 lg:grid-cols-2">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}
