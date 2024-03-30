import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { userId } = useParams();
  return (
    <div className="bg-green-600 text-3xl rounded-sm p-3"> User : {userId}</div>
  );
}

export default Users;
