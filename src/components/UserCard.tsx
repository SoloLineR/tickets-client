import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserInfo } from "@/shared/types";

export default function UserCard({ user }: { user: UserInfo }) {
  return (
    <Card className=" flex-1">
      <CardHeader>
        <CardTitle>Account Info</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Email: {user.email}</p>
        <p>Balance: {user.money} </p>
      </CardContent>
    </Card>
  );
}
