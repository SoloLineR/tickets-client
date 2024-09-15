import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserInfo } from "@/shared/types";
import { Separator } from "./ui/separator";

export default function UserCard({ user }: { user: UserInfo }) {
  return (
    <Card className=" flex-1">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Account Info</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold">
          Email: <span className="font-normal">{user.email}</span>
        </p>
        <Separator className="my-8" />

        <p className="text-lg font-bold">
          Balance: <span className="font-normal">{user.money}</span>{" "}
        </p>
      </CardContent>
    </Card>
  );
}
