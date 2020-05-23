import React, { lazy } from "react";
import { DefaultLayout } from "@/layouts";

const StatisticsCards = lazy(() =>
  import("./StatisticsCards" /* webpackChunkName: "StatisticsCards" */)
);

export default function index() {
  return (
    <DefaultLayout>
      <StatisticsCards />
    </DefaultLayout>
  );
}
