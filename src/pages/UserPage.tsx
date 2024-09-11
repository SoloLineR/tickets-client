import Loader from "@/components/Loader";
import { Card } from "@/components/ui/card";
import UserCard from "@/components/UserCard";
import { userApi } from "@/model/user/userApi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function UserPage() {
  const { data: user, isLoading } = userApi.useGetUserInfoQuery();
  const { data: tickets, isLoading: isLoadingTickets } =
    userApi.useGetTicketsBroughtByUserQuery();
  console.log(tickets);

  if (!user || isLoading || isLoadingTickets || !tickets) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <UserCard user={user} />

      <Card className=" flex flex-col flex-1">
        <ScrollArea className="h-72   rounded-md border flex flex-col ">
          <div className="p-4 flex-1 ">
            <h4 className="mb-4 text-sm font-medium leading-none">
              Купленные билеты:
            </h4>
            {tickets.map((ticket) => (
              <div key={ticket.activated_id}>
                <div className="flex gap-4 items-center border-2 p-1 rounded-sm">
                  <div className="text-sm">{ticket.title} </div>
                  <img src={ticket.img} className="max-w-28 " alt="" />
                  <p> Price:{ticket.price}</p>
                </div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
