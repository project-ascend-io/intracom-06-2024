import React, { useState } from "react";
import { Link } from "react-router-dom";

export function BillingSuccess() {
  return (
    <section>
      <h2>Address Saved</h2>
      <p>Your billing address has been saved.</p>
      <Link to={"/billing"}>
        <button>Done</button>
      </Link>
    </section>
  );
}