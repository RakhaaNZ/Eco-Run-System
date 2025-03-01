import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section>
      <div className="relative flex flex-row justify-center items-center">
        <div>
          <div>{/* <Image /> */}</div>
          <div>{/* <Image /> */}</div>
        </div>

        <div>
          <button popoverTarget="mypopover">Toggle the popover</button>
          <div id="mypopover" popover="true">
            Popover content
          </div>
        </div>
      </div>
    </section>
  );
}
