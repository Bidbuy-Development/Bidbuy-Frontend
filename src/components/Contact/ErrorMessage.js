"use client";

import { FieldError } from "react-aria-components";
import { FaExclamationCircle } from "react-icons/fa";

export default function ErrorMessage({ className = "" }) {
  return (
    <FieldError
      className={`flex items-center gap-1 text-primary-purple text-sm leading-none h-4 ${className}`}
    >
      {({ validationErrors }) =>
        validationErrors?.length ? (
          <>
            <FaExclamationCircle className="w-3 h-3 shrink-0" />
            <span>{validationErrors.join(", ")}</span>
          </>
        ) : null
      }
    </FieldError>
  );
}