import Image from "next/image";
import UserList from "./UserList/UserList";

export default function Home() {
  return (
    <div className="font-sans">
      <UserList />
    </div>
  );
}
