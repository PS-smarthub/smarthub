"use client";

export default function InputSetPoint({ value }: { value: number }) {
  return (
    <input
      type="number"
      defaultValue={value}
      // disabled={
      //   user.name ==
      //   container.scheduling_container[0]?.user_name_1
      //     ? false
      //     : true
      // }
      step={"0.25"}
      onChange={(e) => {
        const value = parseFloat(e.target.value);
        console.log(value);
      }}
      className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
    />
  );
}
