"use client";
import React from "react";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { toast } from "react-toastify";
import {
  MdOutlineSearch
} from "react-icons/md";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo color="#9267A0" />
      <div className="flex gap-4 items-center">
        <Input placeholder="Search..." inputStyle="w-40" />
        <Button
          onClick={() => toast('🦄 Wow so easy!')}
          radius="full"
          variant="primary"
          hasIcon={<MdOutlineSearch />}
        >
          Primary
        </Button>
        <Button
          onClick={() => alert("Secondary btn")}
          radius="full"
          variant="secondary"
        >
          Secondary
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
