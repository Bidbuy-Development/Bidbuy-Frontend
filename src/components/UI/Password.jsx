"use client";

import Image from "next/image";
import Group from "./Group";
import Input from "./Input";
import { useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Group>
      <Input type={showPassword ? "text" : "password"} placeholder="Password" />
      <button
        onClick={() => setShowPassword((v) => !v)}
        type="button"
        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 "
      >
        <Image
          src={showPassword ? "/eye-open.svg" : "/eye-close.svg"}
          alt={showPassword ? "Hide password" : "Show password"}
          width={20}
          height={20}
        />
      </button>
    </Group>
  );
};

export default Password;
