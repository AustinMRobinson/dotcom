import type { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectorProps {
  name: string;
  registerName?: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  size?: string;
}

export function Selector({
  name,
  registerName,
  label,
  register,
  size,
}: SelectorProps) {
  switch (size) {
    case "small":
      size = "h-7 px-3";
    default:
      size = "h-8 px-4";
  }

  const baseStyles =
    "selector flex cursor-pointer items-center justify-center overflow-hidden rounded-full text-neutral-900 bg-neutral-900/10 hover:before:bg-neutral-900/20 dark:text-white dark:bg-white/10 dark:hover:before:bg-white/20 text-center font-medium transition-colors duration-300 before:absolute before:inset-0 before:scale-75 before:rounded-full before:transition-all before:duration-300 hover:before:scale-100 hover:before:bg-neutral-900/10 dark:hover:before:bg-white/10";

  return (
    <div className="flex shrink-0">
      <input
        type="radio"
        id={name}
        value={name}
        {...register(registerName || "")}
        className="selector-input m-0 hidden h-0 w-0 appearance-none"
      />
      <label htmlFor={name} className={baseStyles + " " + size}>
        {label}
      </label>
    </div>
  );
}

interface SelectorGroupProps {
  registerName: string;
  register: any;
  items: any;
  size?: string;
  className?: string;
}

export function SelectorGroup({
  registerName,
  register,
  items,
  size,
  className,
}: SelectorGroupProps) {
  return (
    <fieldset
      name={registerName}
      className={`flex grow gap-3 overflow-x-scroll sm:overflow-visible ${
        className || ""
      }`}
    >
      {items.map((item: any, index: any) => (
        <Selector
          key={index}
          label={item.label}
          name={item.name}
          registerName={registerName}
          register={register}
          size={size}
        />
      ))}
    </fieldset>
  );
}