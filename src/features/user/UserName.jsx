import React from 'react';
import { useSelector } from 'react-redux';

export default function UserName() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="hidden text-sm font-semibold md:block "> {username} </div>
  );
}
