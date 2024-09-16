import Loader from "@/components/Loader";
import { Card } from "@/components/ui/card";
import UserCard from "@/components/UserCard";
import { userApi } from "@/model/user/userApi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useState } from "react";
export default function UserPage() {
  const [pdfLoadingState, setPdfLoadingState] = useState<boolean>(false);
  const { data: user, isLoading } = userApi.useGetUserInfoQuery();
  const { data: tickets, isLoading: isLoadingTickets } =
    userApi.useGetTicketsBroughtByUserQuery();
  console.log(tickets);

  const authorizationToken = useAuthHeader();

  async function getPdfTicket(id: string) {
    setPdfLoadingState(true);
    axios
      .post(
        "http://localhost:3000/api/pdf",
        {
          activated_id: id,
        },
        {
          withCredentials: true,
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            console.log(progressEvent);
          },
          headers: {
            Authorization: `${authorizationToken}`,
          },
        }
      )
      .then((res) => {
        const url = window.URL.createObjectURL(res.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ticket.pdf";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPdfLoadingState(false));
  }

  if (!user || isLoading || isLoadingTickets || !tickets) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <UserCard user={user} />

      <Card className=" flex flex-col flex-1">
        <ScrollArea className="h-72   rounded-md border flex flex-col ">
          <div className="p-4 flex-1 ">
            <h4 className="mb-4  leading-none text-2xl font-bold ">
              Купленные билеты:
            </h4>
            {tickets.map((ticket) => (
              <div key={ticket.activated_id}>
                <div className="flex flex-col gap-4 items-center border-2 p-1 rounded-sm justify-between sm:flex-row">
                  <div className="text-lg ">{ticket.title} </div>
                  <img src={ticket.img} className="max-w-28 " alt="" />
                  <p className="text-lg "> Price:{ticket.price}</p>
                  <Button
                    className="flex gap-4"
                    onClick={() => getPdfTicket(ticket.activated_id)}
                  >
                    Скачать PDF
                    {pdfLoadingState ? <Loader size="SMALL" /> : null}
                  </Button>
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
