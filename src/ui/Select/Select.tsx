"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./select.module.scss";

const Select: FC<{
  options?: Array<{ value: string; label: string; viewLabel?: string }>;
  onChange?: (val: string) => void;
  disable?: boolean;
  className?: string;
  classNameOptions?: string;
  value?: string;
}> = ({
  options = [],
  onChange = () => {},
  disable = false,
  className = "",
  classNameOptions = "",
  value = "",
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef<any>(null);

  const handleClick = () => {
    if (ref.current && !ref.current.contains(event?.target)) {
      setActive(false);
    }
  };

  const changeValue = (type: { value: string }) => {
    onChange(type.value);
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.addEventListener("mousedown", handleClick);
    };
  }, []);

  const currentOption = options?.find((item) => item.value === value);

  return (
    <div ref={ref} className={styles.select}>
      <button
        disabled={disable}
        className={` ${className}`}
        type="button"
        onClick={() => setActive(!active)}
      >
        <span className="h4 navbarLink">{currentOption?.label}</span>
      </button>

      <div className={`${active ? styles.active : ""}  ${classNameOptions}`}>
        {options?.map((type) => (
          <button
            className={`${value === type?.value ? styles.active : ""} `}
            type="button"
            key={type?.value}
            onClick={() => changeValue(type)}
          >
            {type?.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
